/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import { renderWithProviders }  from './todotesting';

import { screen,fireEvent } from '@testing-library/react';
import { expect } from '@jest/globals';

test('renders  users', async () => { 
  renderWithProviders(<App/>);
  const useritem=await screen.findByTestId('users')
  screen.debug();
  expect(useritem).toBeInTheDocument();
 })