import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/wallet.scss';

import { Tabs, Icon, Input, Button, Form } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

export default class Wallet extends Component {


	render() {

		return (
			<div className="otc-body clearfix">
				<div className="wallet-top">
					<h2>总资产折合: <span>0.00000000 BTC</span>≈0.00CNY</h2>
					<p>币币资产折合: 0.00000000 BTC场外资产折合: 0.00000000 BTC</p>
					<p>币币账户与场外账户均可支持充币提币；币币账户与场外账户资产可自由划转</p>
				</div>
				<div className="wallet-content">
					<Tabs tabBarGutter={5}>
						<TabPane tab='场外交易账户' key='otc'></TabPane>
					</Tabs>

					<div className="wallet-list">
						<div className="wallet-list-header">
							<span className="bz">币种</span>
							<span className="ky">可用</span>
							<span className="dj">冻结</span>
							<span className="cz">操作</span>
						</div>
						<div className="wallet-list-content">
							<div className="wallet-item">
								<div className="wallet-item-header">
									<span className="bz">
										<Link to="/buy/BTC">BTC</Link>
									</span>
									<span className="ky">0.00000000</span>
									<span className="dj">0.00000000</span>
									<span className="cz">
										<span>充币</span>
										<span>提币</span>
										<span>资产划转</span>
										<Link to="/transdetail/BTC/all">交易明细</Link>
										<Link to="/sell/BTC">去交易</Link>
									</span>
								</div>
								<div className="wallet-item-content"></div>
							</div>
							<div className="wallet-item">
								<div className="wallet-item-header">
									<span className="bz">
										<Link to="/buy/BTC">BTC</Link>
									</span>
									<span className="ky">0.00000000</span>
									<span className="dj">0.00000000</span>
									<span className="cz">
										<span>充币</span>
										<span>提币</span>
										<span>资产划转</span>
										<Link to="/transdetail/BTC/all">交易明细</Link>
										<Link to="/sell/BTC">去交易</Link>
									</span>
								</div>
								<div className="wallet-item-content">
									<div className="wallet-action-panel wallet-action-cb">
										<h3>充币</h3>
										<div className="clearfix">
											<div className="wallet-action-left">
												<p>充值地址:</p>
												<div className="code-info">
													<b>13QagvT4vWK2oReDyeB87SnWinX1yZMJY7</b>
													<Icon type="qrcode" />
													<a href="javascript:;">地址管理</a>
												</div>
											</div>
											<div className="wallet-action-right">
												<p>温馨提示</p>
												<p>• BTC 地址只能充值 BTC 资产，任何充入 BTC 地址的非 BTC 资产将不可找回。</p>
												<p>• 使用BTC地址充值需要 1 个网络确认才能到账。</p>
												<p>• 最低存入金额为 0.01 BTC，我们不会处理少于该金额的 BTC 存入请求。</p>
												<p>• 在平台内相互转账是实时到账且免费的。</p>
											</div>
										</div>
									</div>

									<div className="wallet-action-panel wallet-action-tb">
										<h3>提币</h3>
										<div className="clearfix">
											<div className="wallet-action-left">
												<Form>
													<FormItem
														required
														label="提现地址">
														<Input 
															placeholder="请输入提现地址" />
													</FormItem>
													<FormItem
														required
														label="提币数量">
														<Input 
															placeholder="请输入提币数量" />
													</FormItem>
													<FormItem
														required
														label="支付密码">
														<Input 
															placeholder="请输入支付密码" />
													</FormItem>
													<FormItem
														label="备注">
														<Input 
															placeholder="请输入提现备注" />
													</FormItem>
												</Form>
												<Button type="primary">确认提现</Button>
											</div>
											<div className="wallet-action-right">
												<p>温馨提示</p>
												<p>• 最小提币数量为：0.01 BTC</p>
												<p>• BTC 网络转账费为： 0.0005 BTC，为保障转账速度，网络转账费会根据情况进行实时调整。</p>
												<p>• BTC 钱包只能向 BTC 地址发送资产，如果向非 BTC 地址发送资产将不可找回。</p>
												<p>• 提币先审核后再广播到网络，正在处理中代表平台正在审核中，处理完毕的可在交易明细中查看详情。</p>
												<p>• 在平台内相互转账是实时到账且免费的。</p>
											</div>
										</div>
									</div>

									<div className="wallet-action-panel wallet-action-zchz">
										<h3>资产划转</h3>
										<div className="clearfix">
											<div className="wallet-action-left">
												<Form>
													<FormItem
														required
														label="划转数量">
														<Input 
															placeholder="请输入划转数量" />
													</FormItem>
												</Form>
												<Button type="primary">立即划转</Button>
											</div>
											<div className="wallet-action-right">
												<p>温馨提示</p>
												<p>• 币币账户与场外账户资产可自由划转，划转是实时且免费的</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="wallet-item">
								<div className="wallet-item-header">
									<span className="bz">
										<Link to="/buy/BTC">BTC</Link>
									</span>
									<span className="ky">0.00000000</span>
									<span className="dj">0.00000000</span>
									<span className="cz">
										<span>充币</span>
										<span>提币</span>
										<span>资产划转</span>
										<Link to="/transdetail/BTC/all">交易明细</Link>
										<Link to="/sell/BTC">去交易</Link>
									</span>
								</div>
								<div className="wallet-item-content"></div>
							</div>
							<div className="wallet-item">
								<div className="wallet-item-header">
									<span className="bz">
										<Link to="/buy/BTC">BTC</Link>
									</span>
									<span className="ky">0.00000000</span>
									<span className="dj">0.00000000</span>
									<span className="cz">
										<span>充币</span>
										<span>提币</span>
										<span>资产划转</span>
										<Link to="/transdetail/BTC/all">交易明细</Link>
										<Link to="/sell/BTC">去交易</Link>
									</span>
								</div>
								<div className="wallet-item-content"></div>
							</div>
							<div className="wallet-item">
								<div className="wallet-item-header">
									<span className="bz">
										<Link to="/buy/BTC">BTC</Link>
									</span>
									<span className="ky">0.00000000</span>
									<span className="dj">0.00000000</span>
									<span className="cz">
										<span>充币</span>
										<span>提币</span>
										<span>资产划转</span>
										<Link to="/transdetail/BTC/all">交易明细</Link>
										<Link to="/sell/BTC">去交易</Link>
									</span>
								</div>
								<div className="wallet-item-content"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}