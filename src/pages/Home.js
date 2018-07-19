import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

@inject('appStore')
@observer
export default class Home extends React.Component {
	render() {
		const { number, increment, decrement } = this.props.appStore;
		return (
			<div>
				<h2>首页</h2> 
				<Link to='/detail'>详情页</Link>
				<div>
					<button onClick={increment}>+</button>
					<span>{number}</span>
					<button onClick={decrement}>-</button>
				</div>
			</div>
		)
	}
}