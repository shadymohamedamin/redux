import React from 'react'
import './Header.css';
import { useSelector } from 'react-redux';
export default function Header() {
    const obj=useSelector(state=>state.user);

  return (
    <div className='header'>
        <p>academy</p>
        <p>{obj.name}</p>
        
    </div>
  )
}
