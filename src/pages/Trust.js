import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LeftMenuLayout from '../components/LeftMenuLayout';

import { Tabs, Button, Table, Pagination } from 'antd';
const TabPane = Tabs.TabPane;

export default class Trust extends Component {


	// tab切换
	handleTabChange = k => {
		let { history } = this.props;
		history.push('/trust/'+k)
	}

	// 翻页
	handlePageChange = e => {
		console.log(e);
	}

	render() {

		let { location, match } = this.props;
		let orderType = match.params.type;

		// 交易伙伴订单编号类型交易金额交易数量创建时间交易状态交易操作

		const columns = [
			{
				title: '用户',
				dataIndex: 'k1',
			},
			{
				title: '交易次数',
				dataIndex: 'k2',
			},
			{
				title: '信任人数',
				dataIndex: 'k3',
			},
			{
				title: '好评度',
				dataIndex: 'k4',
			},
			{
				title: '历史交易',
				dataIndex: 'k5',
			},
			{
				title: '跟TA交易过',
				dataIndex: 'k6',
			}
		]

		const dataSource = []

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<LeftMenuLayout />
					<div className="otc-rightpanel">
						<Tabs
							tabBarGutter={5}
							onChange={ e => this.handleTabChange(e)}>
							<TabPane tab='我信任的' key='trusting'></TabPane>
							<TabPane tab='信任我的' key='trusted'></TabPane>
							<TabPane tab='我屏蔽的' key='shield'></TabPane>
						</Tabs>
						<Table
							columns={columns}
							dataSource={dataSource}
							pagination={false} />
						{
							dataSource && dataSource.length ?
							<Pagination
								onChange={this.handlePageChange}
								total={100} /> : null
						}
					</div>
				</div>
			</div>
		)
	}
}