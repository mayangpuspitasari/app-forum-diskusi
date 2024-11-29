/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle name typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */
import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action
    await userEvent.type(emailInput, 'emailtest');
    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Username');
    // Action
    await userEvent.type(usernameInput, 'usernametest');
    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
  it('should call login function when register button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<RegisterInput register={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'usernametest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Register' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      name: 'usernametest',
      password: 'passwordtest',
    });
  });
});
