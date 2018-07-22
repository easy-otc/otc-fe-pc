import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LeftMenuLayout from '../components/LeftMenuLayout';

import { Tabs, Button, Table, Pagination } from 'antd';
const TabPane = Tabs.TabPane;

export default class Gg extends Component {


	// tab切换
	handleTabChange = k => {
		let { history } = this.props;
		history.push('/gg/'+k)
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
				title: '编号',
				dataIndex: 'k1',
			},
			{
				title: '广告类型',
				dataIndex: 'k2',
			},
			{
				title: '国家',
				dataIndex: 'k3',
			},
			{
				title: '价格',
				dataIndex: 'k4',
			},
			{
				title: '溢价比例',
				dataIndex: 'k5',
			},
			{
				title: '创建时间',
				dataIndex: 'k6',
			},
			{
				title: '状态',
				dataIndex: 'k7',
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
							<TabPane tab='购买广告' key='buy'></TabPane>
							<TabPane tab='出售广告' key='sel'></TabPane>
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