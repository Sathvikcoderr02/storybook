
import { render, screen, fireEvent } from '../../test-utils';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders with label', () => {
    render(<InputField label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('handles input change', () => {
    const handleChange = jest.fn();
    render(<InputField label="Test Input" onChange={handleChange} />);
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('shows error message when invalid', () => {
    render(
      <InputField 
        label="Test Input" 
        invalid 
        errorMessage="This field is required" 
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows clear button when showClearButton is true and has value', () => {
    render(
      <InputField 
        label="Test Input" 
        showClearButton 
        value="test" 
        onChange={jest.fn()} 
      />
    );
    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
  });

  it('shows clear button and clears input when clicked', () => {
    const handleChange = jest.fn();
    render(
      <InputField 
        label="Test Input" 
        showClearButton 
        value="test" 
        onChange={handleChange}
      />
    );
    
    // Verify clear button is shown
    const clearButton = screen.getByRole('button', { name: /clear/i });
    expect(clearButton).toBeInTheDocument();
    
    // Click the clear button
    fireEvent.click(clearButton);
    
    // Should call onChange with an empty string
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: ''
      })
    }));
  });

  it('toggles password visibility when showPasswordToggle is true', () => {
    render(
      <InputField 
        label="Password" 
        type="password" 
        showPasswordToggle 
        isPassword
      />
    );
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
    
    const toggleButton = screen.getByRole('button', { name: /show password/i });
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('calls onPasswordToggle when password visibility is toggled', () => {
    const onPasswordToggle = jest.fn();
    render(
      <InputField 
        label="Password" 
        type="password" 
        showPasswordToggle
        isPassword
        onPasswordToggle={onPasswordToggle}
      />
    );
    
    const toggleButton = screen.getByRole('button', { name: /show password/i });
    fireEvent.click(toggleButton);
    expect(onPasswordToggle).toHaveBeenCalledWith(true);
    
    fireEvent.click(toggleButton);
    expect(onPasswordToggle).toHaveBeenCalledWith(false);
  });

  it('disables input when disabled prop is true', () => {
    render(<InputField label="Test Input" disabled />);
    expect(screen.getByLabelText('Test Input')).toBeDisabled();
  });

  it('shows loading state when loading prop is true', () => {
    render(<InputField label="Test Input" loading />);
    
    // Verify loading spinner is shown
    const loadingSpinner = screen.getByRole('status');
    expect(loadingSpinner).toBeInTheDocument();
    expect(loadingSpinner).toHaveClass('animate-spin');
    
    // Input should be disabled when loading
    expect(screen.getByLabelText('Test Input')).toBeDisabled();
  });
});
