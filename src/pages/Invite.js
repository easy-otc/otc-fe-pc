import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/invite.scss';

import { Button, Input } from 'antd';

export default class Invite extends React.Component {
	render() {
		return (
			<div className="otc-body-fullwidth">
				<div className="invite-header"></div>
				<div className="invite-content">
					<div className="invite-info">
						<div className="invite-count">成功邀请 <span>0</span>人, 总收益折合 <span>0BTC</span></div>
						<div className="invite-link">
							<span>我的邀请链接： </span>
							<Input
								value="https://www.coincola.com/activities/invite" />
							<Button type="primary">复制链接</Button>
						</div>
					</div>
					<div className="invite-desc">
						<h2>邀请说明</h2>
						<p>1. 登陆可盈可乐，在“我的”→“邀请好友”可以分享图片或者链接到朋友圈或者微信好友；</p>
						<p>2. 好友成功通过您邀请链接注册并成功交易，您可以获得交易奖金，金额为交易额0.1%。费率优惠活动期间，奖金比例为费率的七分之一；</p>
						<p>3. 奖金以相应数字资产形式，在当笔交易完成之后即刻发送到您的CoinCola钱包中；</p>
						<p>4. 同一用户仅能被邀请一次；</p>
						<p>5. CoinCola保留对活动的解释权。</p>
						<br/>
						<p>举例：当您带来一个在CoinCola.com注册的用户，如果他成功交易一笔100 BTC 的交易，您可以从这个交易者的交易费中赚取0.1%，您挣得的总数是0.1 BTC。</p>
					</div>
				</div>
			</div>
		)
	}
}