import React, { Component } from 'react';
import './Register.css';
import { signin } from '../../actions';

const Register=()=> {

   
  const [firstName,setFirstName] = React.useState("");
  const [lastName,setLastName] = React.useState("");
  const [username,setUsername] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [gender,setGender] = React.useState("");
  const [age,setAge] = React.useState(0);

    
  function signinOnclick() {
    const body ={
      "firstName":'',
    }
    signin()
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
                  <input type="text" placeholder="Full Name" />
                  <input type="mail" placeholder="E-mail Address" />
                </div>
                <div class="form-row">
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                </div>
                <div class="form-row">
                  <input type="text" placeholder="call" />
                  <select name="Specify gender">
                    <option value="gender">Specify gender</option>
                    <option value="10">Male</option>
                    <option value="10">Female</option>
                    <option value="10">Orther</option>
                  </select>
                  <input id="btSubmit" type="Button" value="Confirm"  onClick={() => {signinOnclick()}} />
                </div>
              </form>
            </div>
          </div>
        </section>

      </body>
    )
  
}

export default Register