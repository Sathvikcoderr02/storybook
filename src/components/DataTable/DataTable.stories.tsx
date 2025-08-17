import type { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import DataTable from './DataTable';
import type { Column } from './DataTable';
import { Button } from '../Button/Button';

// Sample data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

// Sample data
const generateUsers = (count: number): User[] => {
  const roles = ['Admin', 'Editor', 'Viewer', 'Developer', 'Manager'];
  const statuses: ('active' | 'inactive' | 'pending')[] = ['active', 'inactive', 'pending'];
  const names = [
    'John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis', 'Michael Brown',
    'Sarah Wilson', 'David Taylor', 'Jessica Anderson', 'James Thomas', 'Jennifer Jackson'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: names[i % names.length],
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  }));
};

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: false },
    columns: { control: false },
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
    onRowSelect: { action: 'rowsSelected' },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

// Basic usage
export const Basic: Story = {
  render: (args) => {
    const users = useMemo(() => generateUsers(10), []);
    
    const columns: Column<User>[] = [
      { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
      { key: 'email', title: 'Email', dataIndex: 'email' },
      { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
      { 
        key: 'status', 
        title: 'Status', 
        dataIndex: 'status',
        sortable: true,
        render: (value) => (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            value === 'active' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : value === 'inactive'
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {value}
          </span>
        ),
      },
      { key: 'lastLogin', title: 'Last Login', dataIndex: 'lastLogin', sortable: true },
    ];

    return <DataTable {...args} data={users} columns={columns} />;
  },
  args: {
    loading: false,
    selectable: false,
  },
};

// With row selection
export const WithRowSelection: Story = {
  render: (args) => {
    const users = useMemo(() => generateUsers(8), []);
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    
    const columns: Column<User>[] = [
      { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
      { key: 'email', title: 'Email', dataIndex: 'email' },
      { key: 'role', title: 'Role', dataIndex: 'role' },
      { 
        key: 'status', 
        title: 'Status', 
        dataIndex: 'status',
        render: (value) => (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {value}
          </span>
        ),
      },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {selectedRows.length} row(s) selected
          </span>
          {selectedRows.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => alert('Action on selected rows')}>
              Action on Selected
            </Button>
          )}
        </div>
        <DataTable
          {...args}
          data={users}
          columns={columns}
          selectable
          onRowSelect={setSelectedRows}
        />
      </div>
    );
  },
};

// With custom cell rendering
export const WithCustomCells: Story = {
  render: (args) => {
    const users = useMemo(() => generateUsers(5), []);
    
    const columns: Column<User>[] = [
      { 
        key: 'user', 
        title: 'User', 
        dataIndex: 'name',
        render: (_, record) => (
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium">
              {record.name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{record.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{record.email}</div>
            </div>
          </div>
        ),
      },
      { 
        key: 'role', 
        title: 'Role', 
        dataIndex: 'role',
        render: (role) => (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {role}
          </span>
        ),
      },
      { 
        key: 'lastActive', 
        title: 'Last Active', 
        dataIndex: 'lastLogin',
        render: (date) => {
          const daysAgo = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24));
          return (
            <div className="text-sm text-gray-900 dark:text-white">
              {date}
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {daysAgo === 0 ? 'Today' : `${daysAgo} days ago`}
              </div>
            </div>
          );
        },
        sortable: true,
      },
      {
        key: 'actions',
        title: 'Actions',
        dataIndex: 'id',
        render: () => (
          <div className="flex space-x-2">
            <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
              Edit
            </button>
            <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
              Delete
            </button>
          </div>
        ),
      },
    ];

    return <DataTable {...args} data={users} columns={columns} />;
  },
};

// Loading state
export const LoadingState: Story = {
  args: {
    data: [],
    columns: [
      { key: 'name', title: 'Name', dataIndex: 'name' },
      { key: 'email', title: 'Email', dataIndex: 'email' },
      { key: 'role', title: 'Role', dataIndex: 'role' },
      { key: 'status', title: 'Status', dataIndex: 'status' },
    ],
    loading: true,
  },
};

// Empty state
export const EmptyState: Story = {
  args: {
    data: [],
    columns: [
      { key: 'name', title: 'Name', dataIndex: 'name' },
      { key: 'email', title: 'Email', dataIndex: 'email' },
      { key: 'role', title: 'Role', dataIndex: 'role' },
      { key: 'status', title: 'Status', dataIndex: 'status' },
    ],
    emptyText: (
      <div className="text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-white">No users found</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          There are no users matching your criteria.
        </p>
        <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Add New User
        </button>
      </div>
    ),
  },
};
