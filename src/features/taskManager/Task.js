import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {create,deleteitem} from './TaskSlice'

import '../../App.css';

export function Task(){
    const[title,setTitle]=useState("");
    const[discription,setDiscription]=useState("");
    const[show,setShow]=useState(false)

    const dispatch= useDispatch();
    const todolist =useSelector(state=>state.roster);

    const onClickHandler=(e)=>{
        e.preventDefault();
        dispatch(create(title,discription));
    }

    const handleInputdisc =(e)=>{
        setDiscription(e.target.value)
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteitem(e.target.id))
    }
    return(
        <div className='App'>
        {show? <div className='pop'>pop up</div>:null}
        
            <div>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={discription} onChange={handleInputdisc} />
                <button className='button' onClick={onClickHandler} >Add</button>
            </div>
            <div className='container'>
                <h1>Todo</h1>
                {todolist.map(todolist=>(
                    <div key={todolist.title}>
                    {todolist.title}:{todolist.disc}:{todolist.compeleted ? "True" : "False" }
                    <button  className='edit' onClick={()=>setShow(show=> !show)}>edit</button>
                    <button id={todolist.title} className='button' onClick={handleDelete}>delete</button>
                    </div>
                   
                ))}
            </div>
        </div>
    )
}