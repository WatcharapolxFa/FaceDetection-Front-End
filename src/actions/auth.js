import axios from "axios";


const baseURLSignup = "http://localhost:1000/api/auth/signup";




const  login =(body)=>{
  
    
   
}

const signup =(body)=>{
    axios
    .post(baseURLSignup, body)
    .then((res)=>{
        console.log(res.data)
        return true
    })
    .catch((res)=>{
        console.log(res.data)
        return false
    })
    return true
}

export  {login,signup}