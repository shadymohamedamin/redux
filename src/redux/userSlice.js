import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const addUser1=createAsyncThunk("/api/users",async(user)=>{
    const result=await axios.post("http://localhost:5000/api/users",user);
    return result.data;
})
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
        },
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
        }*/
    },
    extraReducers:{
        [addUser1.pending]:(state)=>{
            state.loading=true;
            state.error=false;
        },
        [addUser1.rejected]:(state)=>{
            state.loading=false;
            state.error=true;
        },
        [addUser1.fulfilled]:(state,action)=>{
            state.loading=false;
            state.error=false;
            state.name=action.payload.name;
            state.email=action.payload.email;
            
        }
    }
});

export const {addUser,load,success,error}=userSlice.actions;

export default userSlice.reducer;