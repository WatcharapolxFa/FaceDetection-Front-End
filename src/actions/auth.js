import axios from "axios";

const baseURLPost = "http://localhost:1000/api/auth/signup";


const login =()=>{



}

const signin =()=>{
    console.log("asdas")
    axios
    .post(baseURLPost, {
        "firstName":"test",
        "lastName":"test",
        "username":"test49917111asdasaaasdassdaaasdassdasdasdasdasds",
        "email":"test49asasdasasdasdaasdasdasdassasdasasd9@gmail.com",
        "password":"Aa123456789",
        "gender":"male",
        "age":16
    })
}


export  {login,signin}