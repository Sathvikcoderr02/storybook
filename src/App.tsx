import { useState } from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable, type Column } from './components/DataTable/DataTable';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' as const },
  { key: 'email', title: 'Email', dataIndex: 'email' as const },
  { key: 'role', title: 'Role', dataIndex: 'role' as const },
];

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Component Library Demo</h1>
        <p className="text-gray-600">Showcasing InputField and DataTable components</p>
      </header>

      <div className="max-w-5xl mx-auto space-y-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">InputField Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputField
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-6"
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                showPasswordToggle
                className="mb-6"
              />
            </div>
            <div>
              <InputField
                label="Search Users"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-6"
              />
              <div className="p-6 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">Current state:</p>
                <pre className="text-xs mt-2 p-2 bg-gray-100 rounded overflow-auto">
                  {JSON.stringify({ username, password, searchTerm }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">DataTable Component</h2>
          <DataTable
            data={filteredUsers}
            columns={columns}
            selectable
            onRowSelect={(selectedRows) => {
              console.log('Selected rows:', selectedRows);
            }}
            className="border rounded-lg overflow-hidden"
          />
        </section>
      </div>
    </div>
  );
}

export default App;
