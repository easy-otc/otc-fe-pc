import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LeftMenuLayout from '../components/LeftMenuLayout';
import AdvertiseForm from '../components/AdvertiseForm';

import { Tabs, Button, Table, Pagination } from 'antd';
const TabPane = Tabs.TabPane;

export default class Advertise extends Component {


	// tab切换
	handleTabChange = k => {
		let { history } = this.props;
		history.push('/advertise/'+k)
	}


	render() {

		let { location, match } = this.props;
		let coinType = match.params.type;

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<LeftMenuLayout />
					<div className="otc-rightpanel">
						<Tabs
							tabBarGutter={5}
							onChange={ e => this.handleTabChange(e)}>
							{
								['BTC', 'ETH', 'USDT', 'BCH', 'LTC'].map(item => <TabPane tab={item} key={item}></TabPane>)
							}
						</Tabs>
						<AdvertiseForm
							coinType={coinType} />
					</div>
				</div>
			</div>
		)
	}
}