import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../styles/trans_detail.scss';

import { Tabs, Table } from 'antd';
const TabPane = Tabs.TabPane;

export default class Buy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			type: '',
			mode: '',
			animated: false,
		};
	}

	componentWillMount() {
		let { match } = this.props;
		let { type, mode } = match.params;
		this.setState({ type, mode })
	}

	componentDidMount() {
		this.setState({ animated: true })
	}

	// tab切换
	handleTabChange = (k, t) => {
		let { history } = this.props;
		this.setState({ [t] : k }, () => {
			let { type, mode } = this.state;
			history.push('/transdetail/'+type+'/'+mode)
		})

	}


	render() {

		const columns = [
			{
				title: '时间',
				dataIndex: 'k1',
			},
			{
				title: '类型',
				dataIndex: 'k2',
			},
			{
				title: '数量',
				dataIndex: 'k3',
			},
			{
				title: '说明',
				dataIndex: 'k4',
			},
		]

		const dataSource = [
		]

		const modeList = [
			{
				title: '全部',
				mode: 'all',
			},
			{
				title: '网络转入',
				mode: 'network-in',
			},
			{
				title: '网络转出',
				mode: 'network-out',
			},
			{
				title: '交易买入',
				mode: 'trade-in',
			},
			{
				title: '交易卖出',
				mode: 'trade-out',
			},
			{
				title: '平台转入',
				mode: 'platform-in',
			},
			{
				title: '平台转出',
				mode: 'platform-out',
			},
			{
				title: '手续费',
				mode: 'fee',
			},
			{
				title: '提成奖励',
				mode: 'trade-reward',
			},
			{
				title: '活动奖励',
				mode: 'activity-reward',
			},
			{
				title: '资产划转',
				mode: 'asset-transfer',
			},
			{
				title: '活动消费',
				mode: 'activity-consumption',
			},
		]

		let { type, mode, animated } = this.state;

		return (
			<div className="otc-body clearfix">
				<h2 className="trans-header">场外交易明细</h2>
				<div className="trans-cointabs">
					<Tabs
						animated={animated}
						defaultActiveKey={type}
						tabBarGutter={5}
						onChange={ e => this.handleTabChange(e, 'type')}>
						{
							['BTC', 'ETH', 'USDT', 'BCH', 'LTC'].map(item => <TabPane tab={item} key={item}></TabPane>)
						}
					</Tabs>
				</div>
				<div className="trans-table">				
					<Tabs
						animated={animated}
						defaultActiveKey={mode}
						tabBarGutter={5}
						onChange={ e => this.handleTabChange(e, 'mode')}>
						{

							modeList.map(item => <TabPane tab={item.title} key={item.mode}></TabPane>)
						}
					</Tabs>
					<Table
						columns={columns}
						dataSource={dataSource}
						pagination={false}/>
				</div>
			</div>
		)
	}
}