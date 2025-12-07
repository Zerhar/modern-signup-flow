import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUpForm';
import { describe, it, expect } from 'vitest';

describe('SignUpForm', () => {
  it('renders all input fields', () => {
    render(<SignUpForm />);
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<SignUpForm />);

    const submitBtn = screen.getByRole('button', { name: /sign up/i });
    await user.click(submitBtn);

    expect(await screen.findByText(/first name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/^password is required$/i)).toBeInTheDocument();
  });

  it('shows success message when form is valid', async () => {
    const user = userEvent.setup();
    render(<SignUpForm />);

    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email address/i), 'john.doe@example.com');
    
    await user.click(screen.getByLabelText(/gender/i)); 
    await user.click(screen.getByRole('option', { name: /^male$/i }));

    await user.type(screen.getByLabelText(/^password$/i), 'password123');
    await user.type(screen.getByLabelText(/confirm password/i), 'password123');

    await user.click(screen.getByRole('checkbox'));

    const submitBtn = screen.getByRole('button', { name: /sign up/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/welcome!/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup();
    render(<SignUpForm />);

    await user.type(screen.getByLabelText(/^password$/i), 'password123');
    await user.type(screen.getByLabelText(/confirm password/i), 'password999');
    
    await user.click(document.body);

    expect(await screen.findByText(/passwords must match/i)).toBeInTheDocument();
  });
});