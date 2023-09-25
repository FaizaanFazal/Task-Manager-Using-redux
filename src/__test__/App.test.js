/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../App';
import  render  from './todotesting';

test('renders todo heading', () => { 
  const {getByText}=render(<App/>)
  const textElement=getByText('Todo');
  expect(textElement).toBeInTheDocument();
 })

//  //ceating task and displaying it
// test('check task creation and displaying ', () => { 
//   const {getByTestId,container}=renderWithProviders(<App/>)
//   const inputTitle=getByTestId('titleInput');
//   const inputDisc=getByTestId('discInput');
//   const inputBtn=getByTestId("inputbtn");
//   console.log("initial state: ",container.innerHTML);
//   //trigger inputs
//   fireEvent.change(inputTitle,{target:{value:"Test2"}})
//   fireEvent.change(inputDisc,{target:{value:"tarka how are yu"}})
//   fireEvent.click(inputBtn)
//   //check outputs
//   const outTitle=getByTestId('titleOutput'); //title
//   const outDisc=getByTestId('discOutput'); //discription
//   const outStatus=getByTestId('outStatus'); //status 
//   console.log(outTitle)
//   expect(outTitle.textContent).toBe("Test2 ");
//   expect(outDisc.textContent).toBe("tarka how are yu");
//   expect(outStatus.checked).toEqual(false) //default shold be false
//   console.log("after fire",container.innerHTML);
//  })

//  //editting test
// // test('check updating task',()=>{
// //   const {getByTestId,findAllByTestId,container}=renderWithProviders(<App/>)

// //   const btnedit=getByTestId('btnedit');
// //   fireEvent.click(btnedit)
// //   const eidInput=getByTestId('eidInput');
// //   const etitleInput=getByTestId('etitleInput');
// //   const ediscInput=getByTestId('ediscInput');
// //   const ebtnInput=getByTestId("ebtnInput");
// //   fireEvent.change(eidInput,{target:{value:"1"}}) //testing id 1
// //   fireEvent.change(etitleInput,{target:{value:"Updated Title"}})
// //   fireEvent.change(ediscInput,{target:{value:"got hair cut"}})
// //   fireEvent.click(ebtnInput)

// //    //check outputs
// //    const eoutTitle=getAllByTestId('titleOutput'); //title
// //    const eoutDisc=getAllByTestId('discOutput'); //discription
// //    const eoutStatus=getAllByTestId('outStatus'); //status 
// //    expect(eoutTitle.textContent).toBe("Updated Title ");
// //    expect(eoutDisc.textContent).toBe("got hair cut");
// //    expect(eoutStatus.checked).toEqual(false) //default shold be false
// //    console.log("after fire",container.innerHTML);


// // })
 