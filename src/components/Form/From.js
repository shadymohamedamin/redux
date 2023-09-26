import React,{useState} from 'react'
import './Form.css'
import { addUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import insertUser from '../../redux/api';
export default function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const dispatch=useDispatch();
    const submit=(e)=>{
        e.preventDefault();
        insertUser({name,email},dispatch);
    }
  return (
    <form onSubmit={submit}>
        <div className='form-group'>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='enter name'/>
        </div>
        <div className='form-group'>
            <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='enter email'/>
        </div>
        <div className='form-group'>
            <input type='submit' placeholder='Add'/>
        </div>
        
    </form>
  )
}
