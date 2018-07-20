import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import '../styles/footer.scss';

export default class FooterLayout extends Component {
	render() {
		return (
			<div className="otc-footer-wrap">
				<div className="otc-footer clearfix">
					<div className="footer-left">
						<p>©2016 - 2018 CoinCola All Rights Reserved</p>
					</div>
					<div className="footer-right">
						<Link to="/">关于我们</Link>
						<Link to="/">费率说明</Link>
						<Link to="/">常见问题</Link>
					</div>
				</div>
			</div>
		)
	}
}