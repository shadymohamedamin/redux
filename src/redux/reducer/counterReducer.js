import { INCREMENT,DECREMENT,INCREMENT_BY } from "../actions/types";
const counterReducer=(state={count:0},action)=>{
    switch(action.type)
    {
        case INCREMENT:return {...state,count:state.count+1};
        case DECREMENT:return {...state,count:state.count-1};
        case INCREMENT_BY:return {...state,count:state.count+action.payload};
        default: return state;
    }
    /*if(action.type==INCREMENT)return {...state,count:state.count+1};
    else if(action.type==DECREMENT)return {...state,count:state.count-1};
    else return state;*/
}
export default counterReducer;
























/*import { INCREMENT,DECREMENT } from "../actions/counterAction";
const counterReducer=(state={count:0},action)=>{
    console.log(state);
    if(action.type==INCREMENT)return {...state,count:state.count+1};
    else if(action.type==DECREMENT)return {...state,count:state.count-1};
    else return state; 
}
export default counterReducer;*/
