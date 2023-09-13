import { createSlice } from "@reduxjs/toolkit";

let nId=1;

const taskSlice= createSlice({
    name:'todo',
    initialState:{ list: [
        // {id:"1",title:"Test1",discription:"tarka how are yu",compeleted:false } //for testing need id

    ] },
    reducers:{
        create(state, action) {
            state.list.push(action.payload)
        },
        deleteitem(state,action){
            const index = state.list.findIndex((arrow) =>arrow.id === action.payload.id);
            state.list.splice(index-1, 1);
        },
        updateitem(state, action) {        
            state.list = state.list.map(todo => todo.id === action.payload.id ? { ...todo,  title:action.payload.title,discription:action.payload.discription } : todo)
        },
        togglestatus(state, action) {        
            state.list = state.list.map(todo => todo.id === action.payload.id ? { ...todo,  compeleted: !action.payload.compeleted} : todo)
        }

        // create:{
        //     reducer(state,{payload}){
        //         console.log(payload)
        //         const{title:title,disc:disc}=payload
        //         state.push({title:title,disc:disc,compeleted:false})
        //     },
        //     prepare(...args){
        //         console.log(args)
        //         return{
        //             payload:{
        //                 title:args[0],
        //                 disc:args[1],
        //                 compeleted:false
        //             }
        //         }
        //     }
        // },
        // deleteitem:{
        //     reducer(state,{payload}){
        //         const{title:title}=payload
        //         state.splice(state.findIndex((arrow) => arrow.title === title), 1);
        //     },
        //     prepare(...args){
        //         return{
        //             payload:{
        //                 title:args[0],
                     
        //             }
        //         }
        //     }
        // },
        // updateitem:{
        //     reducer(state,{payload}){
        //         const{titletoupdate:titletoupdate,title:title,disc:disc}=payload
        //         for(let key in state){
        //             if(state[key].title == titletoupdate){
        //                 console.log(key.disc)
        //                 key.title=title;
        //                 key.disc=disc;

        //             }
                   
        //         }
        //         return state
       
        //     },
        //     prepare(...args){
        //         return{
        //             payload:{
        //                 titletopdate:args[0],
        //                 title:args[1],
        //                 disc:args[2],
                     
        //             }
        //         }
        //     }
        // }
    }

});
const {actions,reducer}=taskSlice
export const { create , deleteitem , updateitem , addTodo , togglestatus  }=actions
export default reducer