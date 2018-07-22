import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Carousel, Icon } from 'antd';

import '../styles/home.scss';

@inject('appStore')
@observer
export default class Home extends React.Component {
	render() {
		const { number, increment, decrement } = this.props.appStore;
		return (
			<div className="otc-body-fullwidth">
				<Carousel autoplay>
					<a href="" className="slick-item">
						<div style={{'backgroundImage': `url("https://activities-1251297012.cos.ap-hongkong.myqcloud.com/banners/images/banner_cn.jpg")`}}></div>
					</a>
					<a href="" className="slick-item">
						<div style={{'backgroundImage': `url("https://activities-1251297012.cos.ap-hongkong.myqcloud.com/banners/images/banner_cn.jpg")`}}></div>
					</a>
					<a href="" className="slick-item">
						<div style={{'backgroundImage': `url("https://activities-1251297012.cos.ap-hongkong.myqcloud.com/banners/images/banner_cn.jpg")`}}></div>
					</a>
					<a href="" className="slick-item">
						<div style={{'backgroundImage': `url("https://activities-1251297012.cos.ap-hongkong.myqcloud.com/banners/images/banner_cn.jpg")`}}></div>
					</a>
				</Carousel>


				<div className="index-news-wrap">
					<div className="index-news">				
						<Icon type="sound" className="news-icon"/>
						<a href="">盛夏7月狂欢 CoinCola币币交易正式上线 0手续费<span>更多</span></a>
						<Icon type="close" className="news-close"/>
					</div>
				</div>

				<div className="bit-icons-wrap">
					<div className="bit-icon">
						<a href="https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/leonhardweese/2017/11/29/bitcoin-regulation-in-china-still-unclear-but-chinese-exchanges-thrive-overseas/&refURL=&referrer=#6445f5d16487" target="_blank" className="bit-icon01"></a>
						<a href="https://bitcoinexchangeguide.com/coincola/" target="_blank" className="bit-icon02"></a>
						<a href="https://news.bitcoin.com/china-monitors-booming-otc-bitcoin-market-shutting-exchanges/" target="_blank" className="bit-icon03"></a>
						<a href="http://www.bitcoininsider.org/category/coincola" target="_blank" className="bit-icon04"></a>
					</div>
				</div>

				<div className="index-panel-wrap trade-panel">
					<div className="index-panel">
						<h2 className="index-panel-title">双向交易 买卖自由 安全可靠</h2>
						<p className="index-panel-des">我们的故事从CoinCola开始。</p>
						<div className="trade-list">
							<div className="trade-item">
								<div className="trade-img">
									<img src={require("../assets/trade_img.jpg")}/>
								</div>
								<div className="trade-content">
									<h3>购买BTC</h3>
									<p>价格: 49230 CNY</p>
									<p>交易限额: 5000 - 113735 CNY</p>
									<p>付款方式: 银行转账</p>
									<a href="">购买</a>
								</div>
							</div>
							<div className="trade-item">
								<div className="trade-img">
									<img src={require("../assets/trade_img.jpg")}/>
								</div>
								<div className="trade-content">
									<h3>购买BTC</h3>
									<p>价格: 49230 CNY</p>
									<p>交易限额: 5000 - 113735 CNY</p>
									<p>付款方式: 银行转账</p>
									<a href="">购买</a>
								</div>
							</div>
							<div className="trade-item">
								<div className="trade-img">
									<img src={require("../assets/trade_img.jpg")}/>
								</div>
								<div className="trade-content">
									<h3>购买BTC</h3>
									<p>价格: 49230 CNY</p>
									<p>交易限额: 5000 - 113735 CNY</p>
									<p>付款方式: 银行转账</p>
									<a href="">购买</a>
								</div>
							</div>
							<div className="trade-item">
								<div className="trade-img">
									<img src={require("../assets/trade_img.jpg")}/>
								</div>
								<div className="trade-content">
									<h3>购买BTC</h3>
									<p>价格: 49230 CNY</p>
									<p>交易限额: 5000 - 113735 CNY</p>
									<p>付款方式: 银行转账</p>
									<a href="">购买</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="index-panel-wrap reason-panel">
					<div className="index-panel">
						<h2 className="index-panel-title">为什么要选择CoinCola？</h2>
						<p className="index-panel-des">我们让来自不同国家的人都可以方便快捷的交易数字货币</p>
						<div className="reason-list">
							<div className="reason-item">
								<Icon type="bank"/>
								<h3>买卖自由</h3>
								<p>支持多种数字货币的币币交易与场外交易，买卖自由，双向交易，快速方便</p>
							</div>
							<div className="reason-item">
								<Icon type="lock"/>
								<h3>安全可靠</h3>
								<p>冷存储、SSL、多重加密等银行级别安全技术，十年金融安全团队，多重保障资产安全</p>
							</div>
							<div className="reason-item">
								<Icon type="rocket"/>
								<h3>交易便捷</h3>
								<p>支持多终端交易，WEB、APP行情及时掌握，快速交易，贴心服务，全球市场，交易随时随地</p>
							</div>
						</div>
					</div>
				</div>

				<div className="index-panel-wrap app-panel">
					<div className="index-panel">
						<h2 className="index-panel-title">CoinCola，自由买卖安全可信赖的数字货币交易平台</h2>
						<p className="index-panel-des">可盈可乐隶属于香港CoinCola Limited,由专业的国际化团队研发与运营，专注于为全球用户提供便捷,可依赖的区块链服务。CoinCola汇聚全球用户，致力于打造世界级的区块链资产平台。</p>
					</div>
				</div>
			</div>
		)
	}
}