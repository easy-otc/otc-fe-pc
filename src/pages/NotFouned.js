import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/not_found.scss';

export default class NotFouned extends React.Component {
	render() {
		return (
			<div className="otc-body not-found-wrap">
				<div className="not-found">
					<h3>404</h3>
					<Link to="/buy/BTC">去交易市场看看</Link>
					<Link to="/buy/BTC">后退</Link>
				</div>
			</div>
		)
	}
}