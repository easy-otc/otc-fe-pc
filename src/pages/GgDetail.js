import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import '../styles/gg_detail.scss';

import { Input, Icon, Button } from 'antd';

export default class GgDetail extends Component {

	render() {

		return (
			<div className="otc-body clearfix">
				<div className="gg-left">
					<div className="gg-user clearfix">
						<div className="user-avator">
							<img src="https://cdn.coincola.com/default/RO.jpg"/>
						</div>
						<div className="user-info">
							<div className="user-name">
								<span>panpanwa</span>
								<Icon type="message" />
							</div>
							<div className="user-desc clearfix">
								<div><b>1000+</b><span>交易次数</span></div>
								<div><b>552</b><span>信任人数</span></div>
								<div><b>98%</b><span>好评度</span></div>
								<div><b>300+ BTC</b><span>历史成交</span></div>
							</div>
						</div>
					</div>

					<div className="gg-price">
						<ul>
							<li><b>报价:</b><span>49900 CNY/BTC</span></li>
							<li><b>交易限额:</b><span>2000-12726 CNY</span></li>
							<li><b>付款方式:</b><span>银行转账</span></li>
							<li><b>付款期限:</b><span>15 分钟</span></li>
						</ul>
						<h3>你想购买多少？ </h3>

						<div className="gg-input">
							<Input
								size="large"
								placeholder="输入你想购买的金额"/>
							<Icon type="swap" />
							<Input
								size="large"
								placeholder="输入你想购买的数量"/>
						</div>

						<div className="gg-btn">
							<Button type="primary" size="large">
								<Link to="/account/capital">创建交易需要设置资金密码</Link>
							</Button>
						</div>
					</div>

					<div className="gg-notice">
						<h3>交易须知</h3>
						<p>1.交易前请详细了解对方的交易信息。</p>
						<p>1.请通过平台进行沟通约定，并保存好相关聊天记录。</p>
						<p>2.如遇到交易纠纷，可通过申诉来解决问题。</p>
						<p>4.在您发起交易请求后，BTC 被锁定在托管中，受到 CoinCola 保护。如果您是买家，发起交易请求后，请在付款周期内付款并把交易标记为付款已完成。卖家在收到付款后将会放行处于托管中的 BTC。</p>
						<p>交易前请阅读《CoinCola服务条款》以及常见问题、交易指南等帮助文档。</p>
						<p>5.请注意欺诈风险，交易前请检查该用户收到的评价和相关信用信息，并对新近创建的账户多加留意。</p>
						<p>6.托管服务保护网上交易的买卖双方。在发生争议的情况下，我们将评估所提供的所有信息，并将托管的 BTC 放行给其合法所有者。</p>
					</div>

				</div>
				<div className="gg-right">
					<h2>广告留言</h2>
					<p>*拒绝黑钱 洗钱 汇款必须实名 ，不按照规定来的不放币。银行卡转账拒绝黑钱 洗钱 汇款必须实名 ，不按照规定来的不放币。银行卡转账拒绝黑钱 洗钱 汇款必须实名 ，不按照规定来的不放币。银行卡转账拒绝黑钱 洗钱 汇款必须实名 ，不按照规定来的不放币。银行卡转账拒绝黑钱 洗钱 汇款必须实名 ，不按照规定来的不放币。银行卡转账 </p>
					<span className="gg-report">
						<Icon type="exclamation-circle-o" />举报这则广告
					</span>
				</div>

			</div>
		)
	}
}