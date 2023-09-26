import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
export default function Sidebar(props) {
    const obj=useSelector(state=>state.user);
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>about</a>
            </li>
            <li>
                <a href='#'>contact</a>
            </li>
            <li>
                <a href='#'>blog</a>
            </li>
            <li>
                <a href='#'>hello {obj.name}</a>
            </li>
        </ul>
    </div>
  )
}
