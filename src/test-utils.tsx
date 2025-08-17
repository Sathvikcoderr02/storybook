import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AllTheProviders });
};

// Re-export everything
export * from '@testing-library/react';
// Override render method and export custom render and other utilities
export { customRender as render, fireEvent, screen };
