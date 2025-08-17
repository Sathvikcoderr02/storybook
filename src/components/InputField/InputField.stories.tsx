import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';
import { useState } from 'react';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A flexible and accessible input component with validation states, variants, and sizes.
        
### Features:
- Multiple variants: filled, outlined, ghost
- Responsive design
- Accessible with proper ARIA attributes
- Loading state
- Clear button
- Password visibility toggle
- Customizable styling
- Error states and helper text
- Full keyboard navigation`,
      },
    },
  },
  tags: ['autodocs', 'autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'The visual style of the input',
      table: {
        type: { summary: 'filled | outlined | ghost' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Mark the input as invalid',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show a loading spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show a clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isPassword: {
      control: 'boolean',
      description: 'Toggle password visibility',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when invalid',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    containerClassName: {
      control: 'text',
      description: 'Custom class for the container',
      table: {
        type: { summary: 'string' },
      },
    },
    labelClassName: {
      control: 'text',
      description: 'Custom class for the label',
      table: {
        type: { summary: 'string' },
      },
    },
    inputClassName: {
      control: 'text',
      description: 'Custom class for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    messageClassName: {
      control: 'text',
      description: 'Custom class for the helper/error message',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with common props
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text',
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic input field with a label and helper text.',
      },
    },
  },
  // Play function removed to avoid @storybook/test dependency
};

// Showcase different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-lg font-medium mb-2">Filled Variant</h3>
        <InputField
          label="Filled Input"
          variant="filled"
          placeholder="Type something..."
          helperText="Has a subtle background color"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Outlined Variant</h3>
        <InputField
          label="Outlined Input"
          variant="outlined"
          placeholder="Type something..."
          helperText="Has a border around the input"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Ghost Variant</h3>
        <InputField
          label="Ghost Input"
          variant="ghost"
          placeholder="Type something..."
          helperText="Minimal style, good for toolbars and headers"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'InputField comes with three visual variants: filled, outlined, and ghost.',
      },
    },
  },
};

// Showcase different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-2">Small (sm)</h3>
        <InputField
          size="sm"
          placeholder="Small input"
          helperText="Compact size for tight spaces"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Medium (md)</h3>
        <InputField
          size="md"
          placeholder="Medium input (default)"
          helperText="Standard size for most forms"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Large (lg)</h3>
        <InputField
          size="lg"
          placeholder="Large input"
          helperText="Larger touch target for better mobile experience"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'InputField comes in three sizes: small (sm), medium (md), and large (lg).',
      },
    },
  },
};

// Showcase different states
export const States: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-base font-medium mb-2">Disabled State</h3>
        <InputField
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled
          helperText="Cannot be interacted with"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Error State</h3>
        <InputField
          label="Email"
          placeholder="Enter your email"
          type="email"
          invalid
          errorMessage="Please enter a valid email address"
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Loading State</h3>
        <InputField
          label="Search"
          placeholder="Searching..."
          loading
          helperText="Loading results..."
          containerClassName="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-base font-medium mb-2">Read-only State</h3>
        <InputField
          label="Account ID"
          value="ACC-123456"
          readOnly
          helperText="This field is read-only"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'InputField supports various states like disabled, error, loading, and read-only.',
      },
    },
  },
};

// Showcase with clear button
export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('Clear me!');
    return (
      <div className="space-y-6 w-[400px]">
        <div>
          <h3 className="text-base font-medium mb-2">With Clear Button</h3>
          <InputField
            label="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            showClearButton
            placeholder="Type to search..."
            helperText="The clear button appears when there's text in the input"
          />
        </div>
        
        <div>
          <h3 className="text-base font-medium mb-2">Custom Clear Button</h3>
          <InputField
            label="With Custom Styling"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            showClearButton
            inputClassName="pr-10" // Add padding to prevent text under the clear button
            containerClassName="relative"
            helperText="Custom styling can be applied to the clear button"
            helperTextClassName="text-sm text-muted-foreground"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'InputField can show a clear button when there is text in the input.',
      },
    },
  },
  // Play function removed to avoid @storybook/test dependency
};

// Showcase password input
export const PasswordInput: Story = {
  render: () => {
    const [password, setPassword] = useState('mySecurePassword123');
    const [confirmPassword, setConfirmPassword] = useState('');
    const passwordsMatch = confirmPassword === password && confirmPassword !== '';
    
    return (
      <div className="space-y-6 w-[400px]">
        <div>
          <h3 className="text-base font-medium mb-2">Password Input</h3>
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isPassword
            placeholder="Enter a strong password"
            helperText="Use at least 8 characters with a mix of letters, numbers, and symbols"
            containerClassName="mb-6"
          />
        </div>
        
        <div>
          <InputField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isPassword
            placeholder="Confirm your password"
            invalid={!passwordsMatch && confirmPassword !== ''}
            errorMessage={!passwordsMatch && confirmPassword !== '' ? 'Passwords do not match' : undefined}
            helperText={passwordsMatch ? 'Passwords match!' : ''}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input with visibility toggle and confirmation field.',
      },
    },
  },
  // Play function removed to avoid @storybook/test dependency
};

// Controlled input example
export const ControlledInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-4 w-[400px]">
        <InputField
          label="Controlled Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={`Character count: ${value.length}`}
          placeholder="Type something..."
        />
        <button
          onClick={() => setValue('')}
          className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
        >
          Clear Input
        </button>
      </div>
    );
  },
};

// Form example with validation
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const validate = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      
      if (formData.phone && !/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      
      if (!formData.message) {
        newErrors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validate()) {
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1500);
      }
    };
    
    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: ''
        }));
      }
    };
    
    if (isSubmitted) {
      return (
        <div className="w-[500px] p-6 bg-card rounded-lg shadow-sm border">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setErrors({});
                setIsSubmitted(false);
              }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
            errorMessage={errors.name}
            invalid={!!errors.name}
            required
            containerClassName="mb-1"
          />
          
          <InputField
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="you@example.com"
            errorMessage={errors.email}
            invalid={!!errors.email}
            required
            containerClassName="mb-1"
          />
          
          <InputField
            label="Phone Number (Optional)"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            errorMessage={errors.phone}
            invalid={!!errors.phone}
            containerClassName="mb-1"
          />
          
          <div>
            <InputField
              label="Your Message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="How can we help you?"
              errorMessage={errors.message}
              invalid={!!errors.message}
              required
              // Removed multiline prop as it's not part of InputFieldProps
              className="min-h-[120px]"
              containerClassName="mb-1"
            />
            <div className="text-right text-sm text-muted-foreground mt-1">
              {formData.message.length}/500
            </div>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A complete contact form example with validation and submission state.',
      },
    },
  },
};

// Accessibility example
export const AccessibilityExample: Story = {
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <h2 className="text-xl font-bold mb-4">Accessible InputField</h2>
        <p className="text-muted-foreground mb-6">
          The InputField component is built with accessibility in mind, following WAI-ARIA best practices.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium mb-3">Keyboard Navigation</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Press <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Tab</kbd> to navigate between form controls</li>
              <li>Press <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Space</kbd> to toggle password visibility</li>
              <li>Press the clear button with <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded border border-border text-xs">Space</kbd></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-3">Screen Reader Support</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Labels are properly associated with inputs</li>
              <li>Error messages are announced when they appear</li>
              <li>Required fields are indicated with an asterisk (*)</li>
              <li>Password visibility toggle has appropriate ARIA labels</li>
            </ul>
          </div>
          
          <div className="pt-4">
            <InputField
              label="Try it out"
              placeholder="Type something to test keyboard navigation"
              helperText="Use the keyboard to navigate and interact with this input"
              showClearButton
              containerClassName="max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The InputField component is built with accessibility in mind, following WAI-ARIA best practices.',
      },
    },
  },
};
