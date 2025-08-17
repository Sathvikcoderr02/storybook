import React, { forwardRef, useState, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Icons
const ErrorIcon = ({ className }: { className?: string }) => (
  <svg 
    className={cn('h-4 w-4 flex-shrink-0', className)}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    aria-hidden="true"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const LoadingSpinner = ({ className }: { className?: string }) => (
  <div 
    className={cn(
      'h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent',
      'text-primary-500 dark:text-primary-400',
      className
    )}
    role="status"
    aria-label="Loading..."
  />
);

const inputBaseStyles = [
  'flex w-full rounded-lg border-2 border-input bg-background px-4 py-2.5',
  'text-sm text-foreground shadow-sm transition-all duration-200',
  'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  'placeholder:text-muted-foreground',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'dark:border-input/50 dark:bg-background/95 dark:focus-visible:ring-offset-0',
  'transition-colors'
].join(' ');

const inputVariants = cva(inputBaseStyles, {
  variants: {
    variant: {
      filled: [
        'bg-muted/50 border-input/50',
        'hover:border-primary/50',
        'focus:bg-background dark:focus:bg-background/95',
        'dark:bg-muted/30 dark:border-input/30',
        'dark:hover:border-primary/30',
      ].join(' '),
      outlined: [
        'border-input/80',
        'hover:border-primary/50',
        'dark:border-input/40',
        'dark:hover:border-primary/30',
      ].join(' '),
      ghost: [
        'border-transparent',
        'hover:bg-muted/50',
        'dark:bg-background/30',
        'dark:hover:bg-background/50',
        'focus:border-primary/30',
      ].join(' '),
    },
    size: {
      sm: 'h-9 px-3 text-xs',
      md: 'h-11 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    },
  },
  defaultVariants: {
    variant: 'outlined',
    size: 'md',
  },
});

// Omit the 'size' from InputHTMLAttributes to avoid conflict with our custom size prop
/**
 * Props for the InputField component
 */
export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Input field label */
  label?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Additional class name for the helper text container */
  helperTextClassName?: string;
  /** Error message to display when invalid */
  errorMessage?: string;
  /** Whether the input is in an error state */
  invalid?: boolean;
  /** Whether to show a loading indicator */
  loading?: boolean;
  /** Whether to show a clear button */
  showClearButton?: boolean;
  /** Whether this is a password input (shows toggle) */
  isPassword?: boolean;
  /** Whether to show password toggle button (only applicable when type="password") */
  showPasswordToggle?: boolean;
  /** Callback when password visibility is toggled */
  onPasswordToggle?: (isVisible: boolean) => void;
  /** Custom icon for error state */
  errorIcon?: React.ReactNode;
  /** Custom loading indicator */
  loadingIndicator?: React.ReactNode;
  /** Custom class for the container */
  containerClassName?: string;
  /** Custom class for the label */
  labelClassName?: string;
  /** Custom class for the input */
  inputClassName?: string;
  /** Custom class for the helper/error text */
  messageClassName?: string;
}

/**
 * A customizable input field component with support for various states and variants.
 * 
 * @example
 * ```tsx
 * <InputField 
 *   label="Email"
 *   placeholder="Enter your email"
 *   type="email"
 *   required
 *   errorMessage="Please enter a valid email"
 *   invalid={touched && !isValid}
 * />
 * ```
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      variant = 'outlined',
      size = 'md',
      label,
      helperText,
      helperTextClassName,
      errorMessage,
      invalid = false,
      loading = false,
      disabled,
      showClearButton = false,
      isPassword = false,
      showPasswordToggle = false,
      onChange,
      value,
      type: propType = 'text',
      containerClassName,
      labelClassName,
      inputClassName,
      messageClassName,
      errorIcon,
      loadingIndicator,
      onFocus,
      onBlur,
      onPasswordToggle,
      ...inputProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');
    const inputRef = useRef<HTMLInputElement>(null);

    const isControlled = value !== undefined;
    const isError = invalid || !!errorMessage;
    
    // Handle click on the container to focus the input
    const handleContainerClick = (e: React.MouseEvent) => {
      // Only focus if the click wasn't on an interactive element
      if (!(e.target as HTMLElement).closest('button, a, [role="button"]')) {
        inputRef.current?.focus();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      // Create a synthetic event for the onChange handler
      if (onChange) {
        const event = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      onPasswordToggle?.(!showPassword);
    };

    const inputId = React.useId();
    const helperTextId = helperText ? `${inputId}-helper-text` : undefined;
    const errorId = isError ? `${inputId}-error-text` : undefined;
    const descriptionId = isError ? errorId : helperTextId;

    const inputType = propType === 'password' && showPasswordToggle ? 
      (showPassword ? 'text' : 'password') : 
      propType;


  return (
      <div 
        className={cn(
          'w-full space-y-1.5',
          'transition-all duration-200',
          'group',
          disabled && 'opacity-70 cursor-not-allowed',
          containerClassName
        )}
        onClick={handleContainerClick}
        data-invalid={isError ? '' : undefined}
        data-loading={loading ? '' : undefined}
        data-disabled={disabled ? '' : undefined}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium leading-none',
              'sm:text-sm',
              isError ? 'text-destructive' : 'text-foreground',
              disabled && 'opacity-70 cursor-not-allowed',
              'transition-colors duration-200',
              labelClassName
            )}
          >
            {label}
            {inputProps.required && (
              <span 
                className="text-destructive ml-0.5"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={(node: HTMLInputElement | null) => {
              // Update the forwarded ref
              // Update our internal ref first
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
              
              // Update the forwarded ref
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
              }
            }}
            type={inputType}
            className={cn(
              inputVariants({ variant, size }),
              'w-full',
              'pr-8', // Make room for icons
              'disabled:opacity-70 disabled:cursor-not-allowed',
              'read-only:opacity-70 read-only:cursor-default',
              isError 
                ? 'border-destructive/80 focus-visible:ring-destructive/30 dark:border-destructive/60' 
                : 'group-hover:border-primary/50 dark:group-hover:border-primary/30',
              isFocused && !isError && 'ring-2 ring-ring/20',
              inputClassName,
              className
            )}
            value={isControlled ? value : internalValue}
            onChange={handleChange}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            disabled={disabled || loading}
            aria-invalid={isError ? 'true' : 'false'}
            aria-describedby={descriptionId}
            aria-required={inputProps.required ? 'true' : 'false'}
            aria-busy={loading ? 'true' : 'false'}
            aria-disabled={disabled || loading ? 'true' : 'false'}
            data-invalid={isError ? '' : undefined}
            data-loading={loading ? '' : undefined}
            {...inputProps}
            required={inputProps.required}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            {loading && (
              <div className="flex items-center justify-center">
                {loadingIndicator || <LoadingSpinner />}
              </div>
            )}
            {showClearButton && value && !disabled && !loading && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
                aria-label="Clear input"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
            {(isPassword && showPasswordToggle) && (
              <button
                type="button"
                className={cn(
                  'absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full',
                  'text-muted-foreground hover:bg-muted/50',
                  'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  'transition-colors duration-200',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={disabled}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        {isError && errorMessage ? (
          <div className="flex items-start">
            {errorIcon || <ErrorIcon className="text-destructive mt-0.5 mr-1.5" />}
            <p id={errorId} className="text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          </div>
        ) : helperText ? (
          <div className="flex items-start">
            <svg className="h-4 w-4 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p id={helperTextId} className={cn('text-sm text-gray-600 dark:text-gray-400', helperTextClassName)}>
              {helperText}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
