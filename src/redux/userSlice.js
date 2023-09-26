import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        name:"",
        email:"",
        loading:false,
        error:false,
    },
    reducers:{
        /*addUser:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
        },*/
        load:(state)=>{
            state.loading=true;
        },
        success:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
        },
        error:(state)=>{
            state.loading=false;
            state.error=true;
        }
    }
});

export const {addUser,load,success,error}=userSlice.actions;

export default userSlice.reducer;