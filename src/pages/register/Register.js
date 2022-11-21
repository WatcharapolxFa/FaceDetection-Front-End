import React from 'react';
import './Register.css';
import { signup } from '../../actions';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const baseURLSignup = "https://server-facedetection.herokuapp.com/api/auth/signup";
const Register=()=> {

  const navigate = useNavigate();
  const [fullName,setFullName] = React.useState("");
  const [username,setUsername] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [gender,setGender] = React.useState("");
  const [call,setCall] = React.useState("");
  const [noti,setNoti] = React.useState(true);

  
    
  function signupOnclick() {
    const body ={
      "fullName":fullName,
      "username":username,
      "email":email,
      "password":password,
      "gender":gender,
      "call":call
    }
    axios
    .post(baseURLSignup, body)
    .then((res)=>{
        console.log(res.data)
        setNoti(true)
        navigate('/');
    })
    .catch((res)=>{
        console.log(res.data)
        setNoti(false)
    })
    return true
  }

 
    return (

      <body>
        <section class="banner">
          <div class="card-container">
            <div class="card-img">
              <img src="" alt="" />
            </div>

            <div class="card-content">
              <h3>REGISTER</h3>
              <form>
                <div class="form-row">
                  <input value={fullName} onChange={(e)=>{setFullName(e.target.value)}} type="text" placeholder="Full Name" />
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="mail" placeholder="E-mail Address" />
                </div>
                <div class="form-row">
                  <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username" />
                  <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                </div>
                <div class="form-row">
                  <input value={call} onChange={(e)=>{setCall(e.target.value)}}  type="text" placeholder="call" />
                  <select value={gender} onChange={(e)=>{setGender(e.target.value)}} name="Specify gender">
                    <option value="gender">Specify gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Orther">Orther</option>
                  </select>
                  <input id="btSubmit" type="Button" value="Confirm"  onClick={() => {signupOnclick()}} />
                </div>
              </form>
            </div>
          </div>
          {!noti?(<h6 className='notiRed' >password must have lowercase uperCase and number</h6>):(<div></div>)}
          {!noti?(<h6 className='notiRed' >email not duplicate</h6>):(<div></div>)}
        </section>
      </body>
    )
  
}

export default Register