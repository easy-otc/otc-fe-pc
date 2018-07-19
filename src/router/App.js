import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import store, { history } from './redux/index';

import Home from './pages/Home';
import Detail from './pages/Detail';

const App = ({
	
}) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/detail' component={Detail} />
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
}

export default App