/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import { renderWithProviders }  from './todotesting';

import { screen,fireEvent } from '@testing-library/react';
import { expect } from '@jest/globals';

test('renders todo heading', () => { 
  renderWithProviders(<App/>);
  expect(screen.getByText('Todo')).toBeInTheDocument();
 })

 //ceating task and displaying it
test('check task creation and displaying ', async() => { 
  //Arrange
  const {getByTestId}=renderWithProviders(<App/>)
  const inputTitle=getByTestId('titleInput');
  const inputDisc=getByTestId('discInput');
  const inputBtn=getByTestId("inputbtn");
  //Act
  fireEvent.change(inputTitle,{target:{value:"Test2"}})
  fireEvent.change(inputDisc,{target:{value:"tarka how are yu"}})
  fireEvent.click(inputBtn)
    //Assert
  const outTitle=getByTestId('titleOutput0'); //title
  const outDisc=getByTestId('discOutput0'); //discription
  const outStatus=getByTestId('outStatus0'); //status 
  expect(outTitle.textContent).toBe("Test2 ");
  expect(outDisc.textContent).toBe("tarka how are yu");
  expect(outStatus.checked).toEqual(false) //default should be false
 })


 //editting test
test('check updating task- on screen',()=>{
  const {getByTestId}=renderWithProviders(<App/>)
  const btnedit=getByTestId('btnedit0');
  fireEvent.click(btnedit)
  const etitleInput= getByTestId('etitleInput');
  const ediscInput=getByTestId('ediscInput');
  const ebtnInput=getByTestId("ebtnInput");

  //Act
  fireEvent.change(etitleInput,{target:{value:"Updated Title"}})
  fireEvent.change(ediscInput,{target:{value:"got hair cut"}})
  fireEvent.click(ebtnInput)
  
   //check outputs
   const eoutTitle=getByTestId('titleOutput0'); //title
   const eoutDisc=getByTestId('discOutput0'); //discription
   const eoutStatus=getByTestId('outStatus0'); //status 
   expect(eoutTitle.textContent).toBe("Updated Title ");
   expect(eoutDisc.textContent).toBe("got hair cut");
   expect(eoutStatus.checked).toEqual(false) //default shold be false

})


test('check toggling compelete status on screen before and after',()=>{
  const {getByTestId}=renderWithProviders(<App/>)
  const outStatus=getByTestId('outStatus0');
  //Before
  expect(outStatus.checked).toBeFalsy();
  //After toggling
  fireEvent.click(outStatus);
  expect(outStatus.checked).toBeTruthy();

})


test('Deleting item check- before and after from screen',()=>{
  const {getByTestId}=renderWithProviders(<App/>)
  const checkdisplay=getByTestId('checkdisplay')
  const btndelete=getByTestId('btndelete0');
  //Before
  expect(checkdisplay.textContent).toContain("Updated Title")
  //After toggling
  fireEvent.click(btndelete);
  const checkdisplayAfter=getByTestId('checkdisplay')
  expect(checkdisplayAfter).not.toContain("Updated Title")

})
 