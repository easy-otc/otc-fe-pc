import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import LeftMenuLayout from '../components/LeftMenuLayout';
import CoinToolbar from '../components/CoinToolbar';
import CoinTable from '../components/CoinTable';

export default class Buy extends Component {


	// tab切换
	handleTabChange = k => {
		let { history } = this.props;
		history.push('/buy/'+k)
	}

	// 翻页
	handlePageChange = e => {
		console.log(e);
	}

	render() {

		let { location, match } = this.props;
		let coinType = match.params.type;


		const dataSource = [
			{
				key: '1',
				k1: 'gagalin',
				img: 'https://cdn.coincola.com/default/VI.jpg',
				k2: '547',
				jy: '2515',
				hp: '98%',
				k3: '银行转账',
				k4: '2000-100000',
				hb: 'CNY',
				k5: '48988 CNY',
			},
			{
				key: '2',
				k1: 'gagalin',
				img: 'https://cdn.coincola.com/default/VI.jpg',
				k2: '547',
				jy: '2515',
				hp: '98%',
				k3: '银行转账',
				k4: '2000-100000',
				hb: 'CNY',
				k5: '48988 CNY',
			},
			{
				key: '3',
				k1: 'gagalin',
				img: 'https://cdn.coincola.com/default/VI.jpg',
				k2: '547',
				jy: '2515',
				hp: '98%',
				k3: '银行转账',
				k4: '2000-100000',
				hb: 'CNY',
				k5: '48988 CNY',
			},
			{
				key: '4',
				k1: 'gagalin',
				img: 'https://cdn.coincola.com/default/VI.jpg',
				k2: '547',
				jy: '2515',
				hp: '98%',
				k3: '银行转账',
				k4: '2000-100000',
				hb: 'CNY',
				k5: '48988 CNY',
			},
		]

		return (
			<div className="otc-body clearfix">
				<div className="otc-gg">
					<a href="">
						<img src="https://activities-test-1251297012.cos.ap-hongkong.myqcloud.com/ad-fee-benefits/banners/long-zh-CN.png"/>
					</a>
				</div>
				<div className="otc-flex">
					<LeftMenuLayout />
					<div className="otc-rightpanel">
						<CoinToolbar
							handleTabChange={this.handleTabChange}
							tabs={['BTC', 'ETH', 'USDT', 'BCH', 'LTC']} />
						<CoinTable
							listType='buy'
							coinType={coinType}
							handlePageChange={this.handlePageChange}
							dataSource={dataSource} />
					</div>
				</div>
			</div>
		)
	}
}