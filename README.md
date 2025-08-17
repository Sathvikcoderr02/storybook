# React Component Library

A collection of reusable React components built with TypeScript and TailwindCSS.

## Features

- Modern, accessible UI components
- Built with React 18 and TypeScript
- Styled with TailwindCSS
- Documented with Storybook
- Fully accessible (WAI-ARIA compliant)
- Dark mode support

## Components

### 1. InputField

A versatile input component with multiple variants and states.

#### Features
- Text input with label and placeholder
- Helper text and error messages
- Multiple variants: filled, outlined, ghost
- Three sizes: sm, md, lg
- Optional clear button
- Password toggle
- Light & dark theme support

#### Usage
```tsx
import { InputField } from './components/InputField';

function App() {
  const [value, setValue] = useState('');
  
  return (
    <InputField
      label="Username"
      placeholder="Enter your username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      size="md"
      helperText="Choose a unique username"
    />
  );
}
```

### 2. DataTable

A responsive and accessible data table with sorting and selection.

#### Features
- Displays tabular data
- Column sorting (asc/desc)
- Row selection (single/multiple)
- Loading state
- Empty state
- Responsive design
- Accessible (keyboard navigation, ARIA)

#### Usage
```tsx
import { DataTable } from './components/DataTable';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role', sortable: true }
];

const data: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  // ... more data
];

function App() {
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

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/react-component-library.git
cd react-component-library

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run storybook` - Run Storybook
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Approach

### Component Design
- **TypeScript First**: Strong typing for all components and props
- **Composition**: Components built with composition in mind
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Responsive**: Mobile-first approach with Tailwind CSS
- **Theming**: Support for light/dark modes using CSS variables

### Key Decisions
1. **State Management**: Used React hooks for local state management
2. **Styling**: Tailwind CSS for utility-first styling with custom theme configuration
3. **Testing**: Jest and React Testing Library for unit tests
4. **Documentation**: Storybook for component documentation and visual testing
5. **Build Tool**: Vite for fast development and production builds

### Folder Structure
```
src/
  components/       # Reusable UI components
  lib/             # Utility functions
  stories/         # Storybook stories
  test-utils.tsx   # Testing utilities
  App.tsx          # Main app component
  main.tsx         # App entry point
```

## License

Distributed under the MIT License.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
