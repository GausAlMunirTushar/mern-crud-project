import React, { Component, Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</BrowserRouter>
			</Fragment>
		)
	}
}
