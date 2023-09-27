/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import taskSlice,{create , deleteitem , updateitem  , togglestatus} from '../features/taskManager/TaskSlice';
  
  describe('Task reducer', () => {
    let initialState = { list:[]};
    const newTodo = {id: 1,title: "test1",discription:"test disc",compeleted: false}
    const updateitems = {id: 1,title: "utest1",discription:"utest disc",compeleted: false}


    it('should handle initial state', () => {
      expect(taskSlice(initialState.list, { type: 'unknown' })).toEqual([]);
    });
  
    it('Check create todo', () => {
       initialState = taskSlice(initialState, create(newTodo));
       expect(initialState.list[0]["id"]).toEqual(1);
       expect(initialState.list[0]["title"]).toEqual("test1");
       expect(initialState.list[0]["discription"]).toEqual("test disc");
       expect(initialState.list[0]["compeleted"]).toBeFalsy();
    });
  
    it('Check updateitem', () => {
        initialState = taskSlice(initialState, updateitem(updateitems));
        expect(initialState.list[0]["id"]).toEqual(1);
        expect(initialState.list[0]["title"]).toEqual("utest1");
        expect(initialState.list[0]["discription"]).toEqual("utest disc");
        expect(initialState.list[0]["compeleted"]).toBeFalsy();
     });
     it('Check updateitem', () => {
        initialState = taskSlice(initialState, togglestatus({id:1}));
        expect(initialState.list[0]["id"]).toEqual(1);
        expect(initialState.list[0]["compeleted"]).toBeTruthy(); //default false
     });


     it('Check delete', () => {
        initialState = taskSlice(initialState, deleteitem(1)); //pass id only
        expect(taskSlice(initialState.list, { type: 'unknown' })).toEqual([]);

     });
  });
  