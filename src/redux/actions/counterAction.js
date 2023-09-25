import React from 'react'
import { INCREMENT,DECREMENT ,INCREMENT_BY} from './types';
export const incrementAction=async(dispatch)=> {
  return dispatch({type:INCREMENT})
}

export const decrementAction=async(dispatch)=> {
    return dispatch({type:DECREMENT})
}

export const incrementActionBy=async(vl,dispatch)=> {
    return dispatch({type:INCREMENT_BY,payload:vl})
}


