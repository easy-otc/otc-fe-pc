import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LeftMenuLayout from '../components/LeftMenuLayout';

import { Tabs, Button, Select, Table, Pagination } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;


export default class Order extends Component {


	// tab切换
	handleTabChange = k => {
		let { history } = this.props;
		history.push('/order/'+k)
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
				title: '交易伙伴',
				dataIndex: 'k1',
			},
			{
				title: '订单编号',
				dataIndex: 'k2',
			},
			{
				title: '类型',
				dataIndex: 'k3',
			},
			{
				title: '交易金额',
				dataIndex: 'k4',
			},
			{
				title: '交易数量',
				dataIndex: 'k5',
			},
			{
				title: '创建时间',
				dataIndex: 'k6',
			},
			{
				title: '交易状态',
				dataIndex: 'k7',
			},
			{
				title: '交易操作',
				dataIndex: 'k8',
			},
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
							<TabPane tab='进行中' key='processing'></TabPane>
							<TabPane tab='已结束' key='finished'></TabPane>
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