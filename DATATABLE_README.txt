DATA TABLE COMPONENT DOCUMENTATION
=================================

OVERVIEW
--------
A responsive and accessible data table component with sorting, selection, and loading states.

FEATURES
--------
- Displays tabular data with customizable columns
- Column sorting (ascending/descending)
- Row selection (single/multiple)
- Loading state with skeleton loader
- Customizable empty state
- Responsive design (mobile-friendly)
- Fully accessible (keyboard navigation, ARIA)
- Custom cell rendering
- Column alignment options
- Light and dark theme support

USAGE
-----
```typescript
import { DataTable } from './components/DataTable';

// Define your data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Define columns
const columns = [
  { 
    key: 'name', 
    title: 'Name', 
    sortable: true 
  },
  { 
    key: 'email', 
    title: 'Email' 
  },
  { 
    key: 'role', 
    title: 'Role', 
    sortable: true 
  }
];

// Sample data
const data: User[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    email: 'john@example.com', 
    role: 'Admin' 
  },
  // ... more data
];

// Component usage
function UserTable() {
  const handleRowSelect = (selectedRows: User[]) => {
    console.log('Selected rows:', selectedRows);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      selectable={true}
      onRowSelect={handleRowSelect}
      loading={false}
    />
  );
}
```

PROPS
-----
DataTableProps<T>:
- data: T[] (required)
  Array of data objects to display

- columns: Column<T>[] (required)
  Array of column configurations
  
- loading?: boolean (default: false)
  Shows loading state when true
  
- selectable?: boolean (default: false)
  Enables row selection
  
- onRowSelect?: (selectedRows: T[]) => void
  Callback when rows are selected

- className?: string
  Additional CSS class names

- rowKey?: keyof T | ((record: T) => string | number)
  Key to uniquely identify rows (default: 'id')

- emptyText?: React.ReactNode
  Custom empty state message (default: 'No data available')

COLUMN CONFIGURATION
-------------------
Column<T> interface:
- key: string (required)
  Unique key for the column
  
- title: string (required)
  Column header text
  
- dataIndex: keyof T (required)
  Key to access data in the row object
  
- sortable?: boolean (default: false)
  Whether the column is sortable
  
- render?: (value: any, record: T) => React.ReactNode
  Custom cell renderer
  
- width?: number | string
  Column width (e.g., '100px' or 100)
  
- align?: 'left' | 'center' | 'right' (default: 'left')
  Text alignment

ACCESSIBILITY
-------------
- Implements ARIA attributes for screen readers
- Keyboard navigation support
  - Tab to navigate to the table
  - Arrow keys to navigate between cells
  - Space/Enter to select rows
  - Shift + Arrow keys for range selection
  - Home/End keys for navigation

THEMING
-------
Uses Tailwind CSS for styling. Supports light and dark mode.

Customize colors in your Tailwind config:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
};
```

RESPONSIVE DESIGN
----------------
- Stacks rows on mobile devices
- Horizontal scrolling for wide tables
- Touch-friendly controls

PERFORMANCE
-----------
- Virtualized rendering for large datasets
- Memoized calculations
- Efficient re-renders

BROWSER SUPPORT
---------------
- Latest versions of Chrome, Firefox, Safari, and Edge
- IE11+ with polyfills

LICENSE
-------
MIT
