import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/coin_toolbar.scss';

import { Tabs, Button, Select, Input } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const InputGroup = Input.Group;


export default class CoinToolbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchType: 'gg',
			showSearch: false
		};
	}

	render() {
		let { tabs, handleTabChange } = this.props;
		let { searchType, showSearch } = this.state;
		return (
			<div className="coin-toolbar">
				<Tabs
					tabBarGutter={5}
					onChange={ e => handleTabChange(e)}
					tabBarExtraContent={
						<Button
							onClick={() => this.setState({ showSearch: !showSearch })}
							icon="search">
							中国, 全部货币, 现金存款
						</Button>
					}>
					{
						tabs.map(item => <TabPane tab={item} key={item}></TabPane>)
					}
				</Tabs>
				<div className={`coin-search ${showSearch ? '' : 'hide'}`}>
					<InputGroup compact>
						<Select 
							value={searchType}
							onChange={v => this.setState({ searchType: v })}>
							<Option value="gg">搜广告</Option>
							<Option value="user">搜用户</Option>
						</Select>
						{
							searchType === 'gg' && 
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择国家">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						}
						{
							searchType === 'gg' && 
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择货币">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						}
						{
							searchType === 'gg' && 
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择付款方式">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						}
						{
							searchType === 'user' && 
							<Input style={{ width: 600 }} placeholder="请输入用户名" />
						}
						<Button type="primary">搜索</Button>
					</InputGroup>
				</div>
			</div>
		)
	}
}