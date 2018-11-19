import React, { Component } from 'react'

import './comp.css'

export default class VisaImg extends Component {
  render() {
		switch(this.props.cardType) {
			case 'visa':
				return (
					<div className="">
						<img alt="visa" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg"  width="57" height="34" border="0" />
					</div>
				)
			
			case 'mastercard':
				return (
					<div className="">
						<img alt="mastercard" src="http://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_2.gif" width="57" height="34" border="0" />
					</div>
				)

			case 'maestro':
					return (
						<div>
							<img alt="maestro" width="57" height="34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Maestro_1992_logo.svg/2000px-Maestro_1992_logo.svg.png" />
						</div>
					)

			case 'jcb':
				return (
					<div>
						<img alt="jcb" width="57" height="34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png" />
					</div>
				)

			case 'discover':
				return (
					<div>
						<img alt="discover" width="57" height="34" src="https://www.odyssey.org.au/wp-content/plugins/give/assets/dist/images/discover.svg" />
					</div>
				)

			default:
				return (
					<div className="">
						{this.props.cardType}
					</div>
				)
		}
    
  }
}
