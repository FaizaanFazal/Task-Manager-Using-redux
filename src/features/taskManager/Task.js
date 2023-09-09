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
        setTitle("")
        setDiscription("")
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
        <div class='container-lg pt-5 text-center'>
        {show? <div className='pop'>
            <div>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={discription} onChange={handleInputdisc} />
                <button className='button' onClick={onClickupdatehandler} >Update</button>
                <button className='button' onClick={()=>setShow(show=> !show)}>X</button>
            </div>
        </div>:null}
        
            <div className='cutombox1'>
            <div class="todo">
                <span class="underlined">Todo</span>
            </div>
                <div className='form-row'>
                    <div className='col-sm-5 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' id='title' placeholder='Title...' type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='col-sm-5 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' id='discription' placeholder='Discription...' type='text' value={discription} onChange={handleInputdisc} />
                    </div> 
                    <div className='col-sm-2 mt-1'>
                         <button className='btn rounded-pill btnadd' onClick={onClickHandler} >Add</button>
                    </div>  
               
                </div>

            <div className='mt-3'>
               
                {todolist.length>0 ? todolist.map(todolist=>(
                    
                    <div key={todolist.id}>
                    <hr className='divider'/>

                    <h5 className='text-left'>
                    <span className='text-left'>{todolist.title} - </span> 
                    <span>{todolist.compeleted ? "True" : "False" }</span>
                    </h5>
                    
                    <div className='row mx-2'>
                    <div className='text-left col-sm-10'> {todolist.discription}</div>
                    <div className='col-sm-2 d-flex justify-content-between'>
                    <button id={todolist.id} className='actionbtn' onClick={handleedit}><i className="bi bi-pencil-square"></i> </button>
                    <button id={todolist.id} className='actionbtn' onClick={handleDelete}><i class="bi bi-trash"></i></button>
                    </div>
                   
                    </div>
                    

                    </div>
                   
                )):null}
            </div>

            </div>
           
        </div>
       
    )
}