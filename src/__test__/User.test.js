/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import { renderWithProviders }  from './todotesting';
import { screen,fireEvent, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { User } from '../features/taskManager/User';



test('renders  users', async () => { 
  render(<User/>)
  const useritem=await screen.findAllByRole('itemlist')

 
  expect(useritem).toHaveLength(1);
 })

// test('GetsUsers', async () => { 
// renderWithProviders(<App/>);
// //creating mock
// const userMock =  { get:jest.fn() }
// const sut =  getUsers(userMock);
// sut.getUsers();
// expect(userMock.get).mockResolvedValue("faizaan")

// })