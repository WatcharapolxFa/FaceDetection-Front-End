import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class All extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    render() {
        return (
            <body>
                <section class="banner">
                    <div class="card-container">
                        <div class="card-img">
                            <img src="../../../img/logo.png" alt="" />
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
                                    <input id='btRegister'type="Button" value="Registr"onClick={() => this.openModal()} />
                                    <input id="btLogin"type="Button" value="Login" onClick={() => this.openModal()} />
                                </div>

                            </form>
                        </div>
                    </div>
                    <Modal
                        visible={this.state.visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"

                    >
                        <div class="modalf" >
                            <h1>Thank you for your Booking!</h1>
                            <p>We will send you a confirmation E-mail very soon</p>
                            <input type="Button" value="Close" onClick={() => this.closeModal()} />
                        </div>
                    </Modal>
                </section>

            </body>
        )
    }
}