import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import '../../App.css';
import {create,deleteitem,updateitem,togglestatus} from './TaskSlice'


export function Task(){
    const[title,setTitle]=useState("");
    const[discription,setDiscription]=useState("");
    const[show,setShow]=useState(false)
    const[idtoUpdate,setIdtoUpdate]=useState("")
    let duplciate;
    let check;



    const dispatch= useDispatch();
    const todolist =useSelector(state=>state.todo.list);

    const onClickHandler=(e)=>{
        e.preventDefault();
        check=checknulls();
        if(!check){
            const newTodo = {
                id: Math.floor(Math.random() * 888888) + 100000,
                title: title,
                discription:discription,
                compeleted: false,     
            }
            duplciate=checkduplicate(newTodo);
            if(duplciate!==true){
            dispatch(create(newTodo)) //create
            setTitle("")
            setDiscription("")
            }
            else{alert("Task already exists")}
        }
        else{alert("some fields empty")}
       
    }
    const checknulls=()=>{
        if(title.length>0 && discription.length>0){
            return false
        }
        else{return true}
    }
    const checkduplicate=(newTodo)=>{    //title duplciation? validation
        let f=null;
        f=todolist.find(item=> item.title === newTodo.title)
        if(f){return true;}
        else{return false}
    }
    const onClickupdatehandler=(e)=>{   
        e.preventDefault();
        if(!checknulls){
            const updatetodo = {
                id: idtoUpdate,
                title: title,
                discription:discription,  
            }
            duplciate=checkduplicate(updatetodo);
            if(duplciate!==true){
                dispatch(updateitem(updatetodo)); //update
                setShow(show=>!show)
            }
            else{alert("task already exists")}
        } 
    }

    const handleInputdisc =(e)=>{
        setDiscription(e.target.value)
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        console.log(e.target.id)
        dispatch(deleteitem(e.target.id))  //delete
    }


    let status;
    let compel;
    const handletoggle=(id)=>{
        console.log(id)
        status=todolist.filter((item) => { return item.id === id});
        compel=status[0].compeleted           //toggle
        const toggletodo = {
            id: id,
            compeleted:compel  
        }
        dispatch(togglestatus(toggletodo)); //update
    }

    
    let res;
    const handleedit=(e)=>{
        e.preventDefault();
        console.log("id "+e.target.id)
        res=todolist.filter((item) => { return item.id === e.target.id});
        console.log(res) //print
        setTitle(res[0].title)
        setDiscription(res[0].discription) 
        setIdtoUpdate(e.target.id)
        setShow(show=> !show)     //display edit box     
    }

    return(
        <div className='container-lg pt-5 text-center'>
        {show? <div className='pop'>

            <div className='popbox p-3'>
            <div className='text-right'>   <button className='closebtn' onClick={()=>setShow(show=> !show)}>X</button>  </div>
            <div>Make Changes</div>
                <div className='form-row'>
                    <div className='col-sm-12 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' data-testid="etitleInput" id='title' placeholder='Title...' type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='col-sm-12 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' data-testid="ediscInput" id='discription' placeholder='Discription...' type='text' value={discription} onChange={handleInputdisc} />
                    </div> 
                    <div className='col-sm-12 mt-1'>
                         <button className='btn rounded-pill btnadd' data-testid="ebtnInput" onClick={onClickupdatehandler} >Update</button>
                    </div>  
                </div>
                
                </div>          
                </div>:null}
        
            <div className='cutombox1'>
            <div className="todo">
                <span className="underlined">Todo</span>
            </div>
                <div className='form-row'>
                    <div className='col-sm-5 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' data-testid="titleInput" id='title' placeholder='Title...' type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='col-sm-5 mt-1'>
                        <input className='bg-dblue rounded-pill form-control' data-testid="discInput" id='discription' placeholder='Discription...' type='text' value={discription} onChange={handleInputdisc} />
                    </div> 
                    <div className='col-sm-2 mt-1'>
                         <button className='btn rounded-pill btnadd' data-testid='inputbtn' onClick={onClickHandler} >Add</button>
                    </div>  
               
                </div>

            <div className='mt-3'>
               
                {todolist.length>0 ? todolist.map(todolist=>(
                    
                    <div key={todolist.id} data-id={todolist.id}>
                   
                    <hr className='divider'/>

                    <h5 className='text-left'>
                    <span className='text-left' data-testid="titleOutput">{todolist.title} </span> 
                        <span>
                        <label class="switch">
                        <input id={todolist.id} 
                         type="checkbox"
                         data-testid="outStatus"
                         checked={todolist.compeleted} 
                         onChange={()=>handletoggle(todolist.id)}
                        />
                        <span class="slider round"></span>
                        </label>
                        </span> 
                      
                        
                    
                    </h5>
                    
                    <div className='row mx-2 align-content-between'>
                    <div className='text-left col-sm-10' data-testid="discOutput" >{todolist.discription}</div>
                    <div className='col-sm-2 d-flex justify-content-between'>
                    <button  id={todolist.id} data-testid="btnedit" className='actionbtn bi bi-brush' onClick={handleedit} ></button>
                    <button  id={todolist.id} className='actionbtn bi bi-trash' onClick={handleDelete} ></button>
                    </div>
                   
                    </div>
                    

                    </div>
                   
                )):null}
            </div>

            </div>
           
        </div>
       
    )
}