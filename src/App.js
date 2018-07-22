import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import stores from './stores/index.js';

import Container from './pages/Container';

import Home from './pages/Home';
import Invite from './pages/Invite';

import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Order from './pages/Order';
import Gg from './pages/Gg';
import Trust from './pages/Trust';
import Advertise from './pages/Advertise';

import GgDetail from './pages/GgDetail';

import Profile from './pages/Profile';
import Verification from './pages/Verification';
import Account from './pages/Account';
import CapitalPassword from './pages/CapitalPassword';
import CheckMail from './pages/CheckMail';
import CheckPhone from './pages/CheckPhone';
import ChangePassword from './pages/ChangePassword';
import CheckGoogle from './pages/CheckGoogle';

import Wallet from './pages/Wallet';
import TransDetail from './pages/TransDetail';

import Login from './pages/Login';
import Register from './pages/Register';
import RetrieveByPhone from './pages/RetrieveByPhone';
import RetrieveByMail from './pages/RetrieveByMail';

import NotFouned from './pages/NotFouned';

window._____APP_STATE_____ = stores;

const App = () => {
	return (
		<Provider {...stores}>
			<LocaleProvider locale={zhCN}>
				<Router>
					<Container>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/invite' component={Invite} />

							<Route exact path='/buy/:type' component={Buy} />
							<Route exact path='/sell/:type' component={Sell} />
							<Route exact path='/order/:type' component={Order} />
							<Route exact path='/gg/:type' component={Gg} />
							<Route exact path='/trust/:type' component={Trust} />
							<Route exact path='/advertise/:type' component={Advertise} />

							<Route exact path='/ggdetail/:id' component={GgDetail} />

							<Route exact path='/profile' component={Profile} />
							<Route exact path='/verification' component={Verification} />
							<Route exact path='/account/options' component={Account} />
							<Route exact path='/account/capital' component={CapitalPassword} />
							<Route exact path='/account/mail' component={CheckMail} />
							<Route exact path='/account/phone' component={CheckPhone} />
							<Route exact path='/account/password' component={ChangePassword} />
							<Route exact path='/account/google' component={CheckGoogle} />

							<Route exact path='/wallet/:type' component={Wallet} />
							<Route exact path='/transdetail/:type/:mode' component={TransDetail} />

							<Route exact path='/login' component={Login} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/retrieve/phone' component={RetrieveByPhone} />
							<Route exact path='/retrieve/mail' component={RetrieveByMail} />

							<Route exact path='*' component={NotFouned} />
						</Switch>
					</Container>
				</Router>
			</LocaleProvider>
		</Provider>
	)
}

export default App