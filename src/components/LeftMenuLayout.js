import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/leftmenu.scss';

@withRouter
export default class LeftMenuLayout extends Component {
	render() {

		let { location: { pathname } } = this.props;
		let k = pathname.split('/')[1];

		return (
			<div className="otc-leftmenu">
				<h2>场外交易</h2>
				<div className="menu-list">
					<Link className={`${k === 'buy' ? 'active' : ''}`} to='/buy/BTC'>我要买入</Link>
					<Link className={`${k === 'sell' ? 'active' : ''}`} to='/sell/BTC'>我要出售</Link>
					<Link className={`${k === 'order' ? 'active' : ''}`} to='/order/processing'>订单管理</Link>
					<Link className={`${k === 'gg' ? 'active' : ''}`} to='/gg/buy'>广告管理</Link>
					<Link className={`${k === 'trust' ? 'active' : ''}`} to='/trust/my'>信任管理</Link>
					<div className="divider"></div>
					<Link className={`${k === 'advertise' ? 'active' : ''}`} to='/advertise/BTC'>发布广告</Link>
				</div>
			</div>
		)
	}
}