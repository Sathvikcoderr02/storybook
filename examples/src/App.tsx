import React, { useState } from 'react';
import { InputField } from '../../src/components/InputField/InputField';
import { DataTable } from '../../src/components/DataTable/DataTable';
import type { Column } from '../../src/components/DataTable/DataTable';
import './App.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!name || !email || !password) {
        setError('All fields are required');
        setLoading(false);
        return;
      }
      
      const newUser: User = {
        id: users.length + 1,
        name,
        email,
        role: 'User'
      };
      
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setPassword('');
      setError('');
      setLoading(false);
    }, 500);
  };

  const columns: Column<User>[] = [
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

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Component Library Demo</h1>
      </header>
      
      <main className="app-content">
        <section className="form-section">
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <InputField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              required
              className="mb-4"
            />
            
            <InputField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
              className="mb-4"
            />
            
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              showPasswordToggle
              className="mb-4"
            />
            
            {error && <div className="error-message">{error}</div>}
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </form>
        </section>
        
        <section className="table-section">
          <h2>Users</h2>
          <DataTable<User>
            data={users}
            columns={columns}
            emptyText="No users added yet"
            className="user-table"
          />
        </section>
      </main>
    </div>
  );
};

export default App;
