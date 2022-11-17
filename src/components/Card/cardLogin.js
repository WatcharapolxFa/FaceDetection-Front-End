import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

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
                    <h2>BOOK YOUR TABLE NOW</h2>
                    <div class="card-container">
                        <div class="card-img">
                            <img src="" alt="" />
                        </div>

                        <div class="card-content">
                            <h3>Reservation</h3>
                            <form>
                                <div class="form-row">
                                    <select name="Course">
                                        <option value="Course-select">Course select</option>
                                        <option value="Omakaze">Omakase</option>
                                        <option value="Fine-Dinning">Fine-Dinning</option>
                                        <option value="Buffet">Buffet</option>
                                    </select>

                                    <select name="days">
                                        <option value="day-select">Select Day</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                    </select>

                                    <select name="hours">
                                        <option value="hour-select">Select Hour</option>
                                        <option value="10">16: 00</option>
                                        <option value="10">18: 00</option>
                                        <option value="10">20: 00</option>
                                        <option value="10">22: 00</option>
                                    </select>
                                </div>

                                <div class="form-row">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="mail" placeholder="E-mail Address" />
                                </div>

                                <div class="form-row">
                                    <input type="number" placeholder="How Many Persons?" min="1" />
                                    <input type="Button" value="BOOK TABLE" onClick={() => this.openModal()} />
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