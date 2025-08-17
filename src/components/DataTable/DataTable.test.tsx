
import { render, screen, fireEvent } from '../../test-utils';
import { DataTable, type Column } from './DataTable';

type TestData = {
  id: number;
  name: string;
  email: string;
  role: string;
};

describe('DataTable', () => {
  const testData: TestData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  const columns: Column<TestData>[] = [
    { 
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true 
    },
    { 
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      sortable: true 
    },
    { 
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      sortable: true 
    },
  ];

  it('renders table with data', () => {
    render(<DataTable<TestData> data={testData} columns={columns} />);
    
    // Check if headers are rendered
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    
    // Check if data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    // Check for multiple instances of 'User' role
    expect(screen.getAllByText('User')).toHaveLength(2);
  });

  it('handles row selection when selectable', () => {
    const onRowSelect = jest.fn();
    render(
      <DataTable<TestData>
        data={testData}
        columns={columns}
        selectable
        onRowSelect={onRowSelect}
      />
    );
    
    // Click on the first row's checkbox
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]); // First checkbox is the header
    
    // The first data row should be selected
    expect(onRowSelect).toHaveBeenCalledWith(expect.arrayContaining([testData[0]]));
  });

  it('shows loading state', () => {
    render(<DataTable<TestData> data={[]} columns={columns} loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(
      <DataTable<TestData>
        data={[]}
        columns={columns}
        emptyText="No data available"
      />
    );
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('handles sorting', () => {
    render(
      <DataTable<TestData>
        data={testData}
        columns={[
          { 
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
            sortable: true 
          },
          ...columns.slice(1),
        ]}
      />
    );
    
    // Click on the sortable header
    fireEvent.click(screen.getByText('Name'));
    
    // After clicking, the table should be sorted by name
    const nameCells = screen.getAllByRole('cell', { name: /john|jane|bob/i });
    expect(nameCells[0]).toHaveTextContent('Bob Johnson'); // Should be sorted alphabetically
  });

  it('renders custom cell content', () => {
    const handleEdit = jest.fn();
    const columnsWithCustomRender: Column<TestData>[] = [
      ...columns,
      {
        key: 'actions',
        title: 'Actions',
        dataIndex: 'id' as keyof TestData,
        render: (_: unknown, record: TestData) => (
          <button onClick={() => handleEdit(record.id)}>Edit</button>
        ),
      },
    ];

    render(
      <DataTable<TestData> data={testData} columns={columnsWithCustomRender} />
    );
    
    const editButtons = screen.getAllByText('Edit');
    expect(editButtons).toHaveLength(testData.length);
    
    // Test the edit handler
    fireEvent.click(editButtons[0]);
    expect(handleEdit).toHaveBeenCalledWith(testData[0].id);
  });
});
