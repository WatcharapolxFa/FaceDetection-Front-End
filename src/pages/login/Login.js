import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Registers from '../register/Register.js';

export default class Logins extends Component {
    render() {
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
                                    
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div class="form-row">
                                    <input type="password" placeholder="Password" />
                                </div>

                                <div class="form-row">
                                    <input id='btRegister'type="Button" value="Registr"onClick={Registers} />
                                    <input id="btLogin"type="Button" value="Login" onClick={Registers} />
                                </div>

                            </form>
                        </div>
                    </div>
                    
                </section>

            </body>
        )
    }
}
