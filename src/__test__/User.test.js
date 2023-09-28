/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import { renderWithProviders }  from './todotesting';
import { screen,fireEvent, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { User } from '../features/taskManager/User';
import {server} from '../__mocks__/server'
import { rest } from 'msw';



test('renders  users', async () => { 
  render(<User/>)
  const useritem=await screen.findAllByRole('itemlist') 
  expect(useritem).toHaveLength(1);
 })

test('renders error', async ()=>{
  server.use(
    rest.get("https://jsonplaceholder.typicode.com/users",(req,res,ctx)=>{
      return res(ctx.status(500));
    })
  )
  render(<User/>)
  const error = await screen.findByText("Error fetching users")
  expect(error).toBeInTheDocument();
})