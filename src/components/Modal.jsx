import React, { Component } from 'react';
import { connect } from 'react-redux';

import img from './../deb_card.png';

import { showModal, updateInput, validateCard } from '../actions/paymentAction';

import './comp.css';

import VisaImg from './VisaImg';

export class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationError: ""
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

  validateAndProceed = (e) => {
    if (!this.props.data.inputObj.name) {
      this.setState({
        validationError: "Name cannot be blank"
      })
    } else if (!this.props.data.inputObj.cardNum) {
      this.setState({
        validationError: "Card number cannot be blank"
      })
    } else if (!this.props.data.inputObj.expiery) {
      this.setState({
        validationError: "exp date cannot be blank"
      })
    } else if (!this.props.data.inputObj.cvv) {
      this.setState({
        validationError: "CVV cannot be blank"
      })
    } else {
      let dValue = this.props.data.inputObj.expiery;
      let result = false;
      dValue = dValue.split('/');
      let pattern = /^\d{2}$/;
    
      if (dValue[0] < 1 || dValue[0] > 12)
          result = true;
    
      if (!pattern.test(dValue[0]) || !pattern.test(dValue[1]))
          result = true;
    
      if (dValue[2])
          result = true;
    
      if (result) {
        this.setState({
          validationError: "Please enter a valid date in MM/YY format."
        })
      }      
    }
  }

  render() {

    let validCard = ""
    if (this.props.data.inputObj.cardNum) {
      validCard = (this.props.data.cardData.isPotentiallyValid && this.props.data.cardData.isValid) ? 
        "is-success" : 
        (this.props.data.cardData.isPotentiallyValid || this.props.data.cardData.isValid) ? "is-info" : "is-danger"
    }

    return (
      <div>	
        {this.props.data.showModal ? (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head myModal">
                <p className="modal-card-title">Initiate Payment</p>
                <button className="delete" aria-label="close" onClick={() => {
                  this.closeModal()
                }}></button>
              </header>
              
              <section className="modal-card-body">
                <img src={img} className="cardImg" />
                
                <br />
                <h1 className="subtitle">Rs 999.00</h1>

                <div className="cardForm">
                  {/* name */}
                  <div className="field">
                    <div className="control">
                      <input className={`input`} name="name" type="text" placeholder="Card Holder Name" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                    </div>
                  </div>
                  {/* card No */}
                  <div className="field columns is-mobile" style={{
                    marginBottom: "0px"
                  }}>
                    <div className="control column">
                      <input className={`input ${validCard}`} name="cardNum" type="text" placeholder="Card Number" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                        this.validateCard(e.target.value)
                      }} />
                    </div>
                    {this.props.data.cardData.card ? (
                      <div className="column is-one-fifth cardLogo">
                      <VisaImg cardType={this.props.data.cardData.card.type} />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="columns is-mobile">
                    {/* expiery date */}
                    <div className="field column is-half">
                      <div className="control">
                        <input className={`input`} name="expiery" type="text" placeholder="MM/YY" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                      </div>
                    </div>
                    {/* cvv */}
                    <div className="field column">
                      <div className="control">
                        <input className={`input`} maxLength="3" name="cvv" type="text" placeholder="CVV" onChange={(e) => {
                        this.handleChange(e.target.name, e.target.value)
                      }} />
                      </div>
                    </div>
                    <div className="column is-one-fifth">
                      <img src="https://qph.fs.quoracdn.net/main-qimg-ba4f3021e3b5a31a944f4740ca9b0ee7" />
                    </div>
                  </div>
                </div>
              </section>

              <footer className="modal-card-foot myModal">
                <div className="is-pulled-right button myButton2" onClick={(e) => {
                  this.validateAndProceed(e);
                }}>Proceed</div>
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
