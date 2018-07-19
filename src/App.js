import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import stores from './stores/index.js';

import Home from './pages/Home';
import Detail from './pages/Detail';

window._____APP_STATE_____ = stores;

const App = () => {
	return (
		<Provider {...stores}>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/detail' component={Detail} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App