import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import HeaderLayout from '../components/HeaderLayout';
import FooterLayout from '../components/FooterLayout';

@inject('appStore')
@withRouter
@observer
export default class Container extends Component {
	render() {
		let { children, ...others } = this.props;
		
		return (
			<div className="otc-container">
				<HeaderLayout {...others} />
				{children}
				<FooterLayout />
			</div>
		)
	}
}