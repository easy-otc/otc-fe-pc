import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'antd';

import { inject, observer } from 'mobx-react';

@inject('appStore')
@observer
export default class Home extends React.Component {
	render() {
		const { number, increment, decrement } = this.props.appStore;
		return (
			<div>
				<Button type="primary" onClick={increment}>+</Button>
				<Input value={number} style={{'width': 100}} />
				<Button type="primary" onClick={decrement}>-</Button>
			</div>
		)
	}
}