import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/leftmenu.scss';

@withRouter
export default class UserCenterMenu extends Component {
	render() {

		let { location: { pathname } } = this.props;
		let k = pathname.split('/')[1];

		return (
			<div className="otc-leftmenu">
				<h2>用户中心</h2>
				<div className="menu-list">
					<Link className={`${k === 'profile' ? 'active' : ''}`} to='/profile'>基本信息</Link>
					<Link className={`${k === 'verification' ? 'active' : ''}`} to='/verification'>身份验证</Link>
					<div className="divider"></div>
					<Link className={`${k === 'account' ? 'active' : ''}`} to='/account/options'>安全设置</Link>
				</div>
			</div>
		)
	}
}