import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import HeaderLayout from '../components/HeaderLayout';
import FooterLayout from '../components/FooterLayout';

export default class Container extends Component {
	render() {
		let { children } = this.props;
		return (
			<div className="otc-container">
				<HeaderLayout />
					<div className="otc-body">{children}</div>
				<FooterLayout />
			</div>
		)
	}
}