//"use client";
import React,{useState} from 'react'
import Counter from './components/Counter';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import From from './components/Form/From';
import './App.css'
//import { Provider } from 'react-redux';
//import {store} from './redux/store';
export default function App() {
  /*const [name,setName]=useState("shady");
  const [email,setEmail]=useState("");
  const [f,setF]=useState(false);
  const submit=(e)=>{
    e.preventDefault();
    setF(true);
  }*/
  
  return (
    <div>
      <Header />
      <div className='main'>
        <Sidebar />
        <From/>
      </div>
    
    </div>
  )
}
