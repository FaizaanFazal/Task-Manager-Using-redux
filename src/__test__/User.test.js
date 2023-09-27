/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import { renderWithProviders }  from './todotesting';
import { screen,fireEvent } from '@testing-library/react';
import { expect } from '@jest/globals';
import { getUsers } from '../features/taskManager/User';

test('renders  users', async () => { 
  renderWithProviders(<App/>);
  const useritem=await screen.findByTestId('users')
 
  expect(useritem).toBeInTheDocument();
 })

// test('GetsUsers', async () => { 
// renderWithProviders(<App/>);
// //creating mock
// const userMock =  { get:jest.fn() }
// const sut =  getUsers(userMock);
// sut.getUsers();
// expect(userMock.get).mockResolvedValue("faizaan")

// })