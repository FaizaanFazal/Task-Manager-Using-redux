import { createSlice } from "@reduxjs/toolkit";

let nId=1;

const taskSlice= createSlice({
    name:'Todo',
    initialState:[
        {
            title:"title",
            disc:"discription",
            compeleted:false,
        }
    ],
    reducers:{
        create:{
            reducer(state,{payload}){
                console.log(payload)
                const{title:title,disc:disc}=payload
                state.push({title:title,disc:disc,compeleted:false})
            },
            prepare(...args){
                console.log(args)
                return{
                    payload:{
                        title:args[0],
                        disc:args[1],
                        compeleted:false
                    }
                }
            }
        },
        deleteitem:{
            reducer(state,{payload}){
                const{title:title}=payload
                state.splice(state.findIndex((arrow) => arrow.title === title), 1);
            },
            prepare(...args){
                console.log("args"+args)
                return{
                    payload:{
                        title:args[0],
                     
                    }
                }
            }
        }
    }

});
const {actions,reducer}=taskSlice
export const { create , deleteitem }=actions
export default reducer