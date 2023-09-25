//"use client";

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { INCREMENT,DECREMENT } from '../redux/actions/types';
import {incrementAction,decrementAction,incrementActionBy} from '../redux/actions/counterAction';

export default function Counter() {

    const count=useSelector(state=>state.counter.count);
    const dispatch=useDispatch();
    const handle_inc=()=>{
        incrementAction(dispatch);//dispatch(incrementAction());
    }
    const handle_dec=()=>{
        decrementAction(dispatch);
    }
    const handle_inc_by=(vl)=>{
        incrementActionBy(vl,dispatch);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handle_inc}>increment</button>
        <button onClick={handle_dec}>decrement</button>
        <button onClick={()=>handle_inc_by(5)}>increment_by_5</button>
    </div>
    
  )
}































/*import React,{memo, useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions/counterAction';

export default function Counter() {
  const [count,setCount]=useState(0);
  
  const handle_inc=()=>{
    setCount(count+1);
    window.localStorage.setItem('count',count+1);
    dispatch({
        type:INCREMENT
    });

  }
  const handle_dec=()=>{
    setCount(count-1);
    dispatch({
        type:DECREMENT
    });
    
    window.localStorage.setItem('count',count-1);
  }
  const handle_refresh=()=>{
    setCount(Number(window.localStorage.getItem('count')));
  }
  const countState=useSelector(state=>state.count);
  const dispatch=useDispatch();
  console.log(countState);
  return (
    <div>

      <p>{countState}</p>
      <button onClick={handle_inc}>increment</button>
      <button onClick={handle_dec}>decrement</button>
      <button onClick={handle_refresh}>refresh</button>
    </div>
  )
}*/