import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {create,deleteitem,updateitem} from './TaskSlice'

import '../../App.css';

export function Task(){
    const[title,setTitle]=useState("");
    const[discription,setDiscription]=useState("");
    const[show,setShow]=useState(false)
    const[idtoUpdate,setIdtoUpdate]=useState("")


    const dispatch= useDispatch();
    const todolist =useSelector(state=>state.todo.list);

    const onClickHandler=(e)=>{
        e.preventDefault();
        const newTodo = {
            id: (Math.floor(Math.random() * 888888) + 100000).toString(),
            title: title,
            discription:discription,
            compeleted: false,
           
        }
        dispatch(create(newTodo)) //create
    }
    const onClickupdatehandler=(e)=>{
        e.preventDefault();
        const updatetodo = {
            id: idtoUpdate,
            title: title,
            discription:discription,
           
           
        }
        dispatch(updateitem(updatetodo)); //update
        setShow(show=>!show)
    }

    const handleInputdisc =(e)=>{
        setDiscription(e.target.value)
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteitem(e.target.id))  //delete
    }
    let res;
    const handleedit=(e)=>{
        e.preventDefault();
        res=todolist.filter((item) => { return item.id == e.target.id});

        setTitle(res[0].title)
        setDiscription(res[0].discription) 
        setIdtoUpdate(e.target.id)
        setShow(show=> !show)     //display edit box
        
    }

    return(
        <div className='App'>
        {show? <div className='pop'>
            <div>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={discription} onChange={handleInputdisc} />
                <button className='button' onClick={onClickupdatehandler} >Update</button>
                <button className='button' onClick={()=>setShow(show=> !show)}>X</button>
            </div>
        </div>:null}
        
            <div>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={discription} onChange={handleInputdisc} />
                <button className='button' onClick={onClickHandler} >Add</button>
            </div>
            <div className='container'>
                <h1>Todo</h1>
                {todolist.length>0 ? todolist.map(todolist=>(
                    <div key={todolist.id}>
                    {todolist.title}:{todolist.discription}:{todolist.compeleted ? "True" : "False" }
                    <button id={todolist.id} className='edit' onClick={handleedit}>edit</button>
                    <button id={todolist.id} className='button' onClick={handleDelete}>delete</button>
                    </div>
                   
                )):null}
            </div>
        </div>
       
    )
}