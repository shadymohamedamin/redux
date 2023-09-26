import axios from 'axios';
import { error, load, success } from './userSlice';
const insertUser=async(user,dispatch)=>{
    console.log(user.name);
    dispatch(load());
    try{
        
        const result=await axios.post("http://localhost:5000/api/users",user);
        dispatch(success(result.data));
    }
    catch(err){
        dispatch(error());
    }
    /*const [obj,setObj]=useState({});
    setObj(user);
    fetch("http://localhost:5000/api/users",{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
    })
    .then(res=>res.json()).then(res=>console.log(res))
    .catch(err=>console.log(err));*/
}
export default insertUser;