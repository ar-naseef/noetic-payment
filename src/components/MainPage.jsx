import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showModal } from '../actions/paymentAction';

import './comp.css';

export class MainPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			loading: ""
		}
	}

  render() {
    return (
      <div>
        <h1 className="title myHeading">
					Noetic Payments
				</h1>
				<div className={`button is-medium myButton ${this.state.loading}`} onClick={(e) => {
					this.setState({
						loading: "is-loading"
					})
					setTimeout(() => {
						this.props.showModal(true)
						this.setState({
							loading: ""
						})
					}, 500)
				}}>
					Pay Now
				</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: (show) => dispatch(showModal(show))
});

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
