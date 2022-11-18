import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Register.css';
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
                  <input id="btSubmit" type="Button" value="Confirm" onClick={() => this.openModal()} />

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