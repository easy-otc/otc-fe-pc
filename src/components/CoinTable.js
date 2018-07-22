import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/coin_table.scss';

import { Table, Button, Pagination, Tag } from 'antd';


export default class CoinTable extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		let { handlePageChange, dataSource, listType, coinType } = this.props;
		let {  } = this.state;

		const columns = [
			{
				title: '昵称',
				dataIndex: 'k1',
				render: (text, record) => {
					return (
						<div className="td-user clearfix">
							<div className="td-user-img">
								<span><img src="https://cdn.coincola.com/default/VI.jpg" alt=""/></span>
								<i></i>
							</div>
							<div className="td-user-txt">
								<h3>victorykorean89</h3>
								<Tag color="red">已实名</Tag>
							</div>
						</div>
					)
				}
			},
			{
				title: '信用',
				dataIndex: 'k2',
				render: (text, record) => {
					return (
						<div className="td-credit">
							<span>交易{record.jy}</span>
							<span>好评度{record.jy}</span>
							<span>信任{record.jy}</span>
						</div>
					)
				}
			},
			{
				title: '付款方式',
				dataIndex: 'k3',
			},
			{
				title: '限额',
				dataIndex: 'k4',
				render: (text, record) => <span>{text} {record.hb}</span>
			},
			{
				title: '价格',
				className: 'green',
				dataIndex: 'k5',
			},
			{
				title: '',
				width: 150,
				render: text => <Button type="primary"><Link to="/ggdetail/1">{listType === 'buy' ? '购买' : '出售'}{coinType}</Link></Button>
			},
		]

		return (
			<div className="coin-table">
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={false} />
				{
					dataSource && dataSource.length ?
					<Pagination
						onChange={handlePageChange}
						total={100} /> : null
				}
			</div>
		)
	}
}