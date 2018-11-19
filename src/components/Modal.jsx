import React, { Component } from 'react';
import { connect } from 'react-redux';

import img from './../deb_card.png';

import { showModal, updateInput, validateCard } from '../actions/paymentAction';

import './comp.css';

export class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validCard: ""
    }
  }

  closeModal = () => {
    this.props.showModal(false)
  }

  handleChange = (name, value) => {
    let existingData = this.props.data.inputObj;
    existingData[name] = value
    this.props.updateInput(existingData);
  }

  validateCard = (cardNum) => {
    this.props.validateCard(cardNum)
  }

  render() {
    return (
      <div>	
        {this.props.data.showModal ? (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head myModal">
                <p class="modal-card-title">Initiate Payment</p>
                <button class="delete" aria-label="close" onClick={() => {
                  this.closeModal()
                }}></button>
              </header>
              
              <section class="modal-card-body">
                <img src={img} className="cardImg" />
                
                <br />
                <h1 className="subtitle">Rs 999.00</h1>

                <div className="cardForm">
                  {/* name */}
                  <div class="field">
                    <div class="control">
                      <input class={`input`} name="name" type="text" placeholder="Card Holder Name" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                    </div>
                  </div>
                  {/* card No */}
                  <div class="field columns is-mobile">
                    <div class="control column">
                      <input class={`input ${this.state.validCard}`} name="cardNum" type="text" placeholder="Card Number" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                        this.validateCard(e.target.value)
                      }} />
                    </div>
                    <div className="column is-one-fifth">hi</div>
                  </div>
                  <div className="columns is-mobile">
                    {/* expiery date */}
                    <div class="field column">
                      <div class="control">
                        <input class={`input ${this.state.validCard}`} name="expiery" type="text" placeholder="MM/YY" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                      </div>
                    </div>
                    {/* cvv */}
                    <div class="field column">
                      <div class="control">
                        <input class={`input ${this.state.validCard}`} name="cvv" type="text" placeholder="CVV" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <footer class="modal-card-foot myModal">
                <button class="button myButton is-pulled-right">Proceed</button>
              </footer>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateInput: (inputObj) => dispatch(updateInput(inputObj)), 
  showModal: (show) => dispatch(showModal(show)),
  validateCard: (cardNum) => dispatch(validateCard(cardNum))
});

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
