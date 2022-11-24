import React, { Component } from 'react';
import './Login.css';
import { login } from '../../actions';
import Registers from '../register/Register.js';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [noti, setNoti] = React.useState(true);
    const baseURLSignin = "https://server-facedetection.herokuapp.com/api/auth/signin";

    const navigate = useNavigate();

    async function loginOnclick() {


        const body = {
            "username": username,
            "password": password,
        }

        axios
            .post(baseURLSignin, body)
            .then((res) => {
                localStorage.setItem("token", res.data.accessToken)
                navigate('/home');
                setNoti(true)
            })
            .catch((res) => {
                console.log(res.data)
                setNoti(false)
            })

    }

    return (
        <body>
            <section class="banner">
                <div class="card-container">
                    <div class="card-img">
                        <img src="" alt="" />
                    </div>

                    <div class="card-content">
                        <h3>Login</h3>

                        <form>

                            <div class="form-row">

                                <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Username" />
                            </div>
                            <div class="form-row">
                                <input className='PasswordBor' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                            </div>

                            <div class="form-row">
                                <input id='btRegister' type="Button" value="Register" onClick={() => { navigate('/register') }} />
                                <input id="btLogin" type="Button" value="Login" onClick={() => { loginOnclick() }} />
                            </div>

                        </form>
                    </div>
                </div>
                {!noti ? (<h6 className='notiRed'> Password or Username Incorrect</h6>) : (<div></div>)}

            </section>

        </body>
    )

}

export default Login
