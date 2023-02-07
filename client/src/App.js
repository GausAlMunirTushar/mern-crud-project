import React, { Component, Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import Read from './Pages/Read';
import Create from './Pages/Create';
import Update from './Pages/Update';
export default class App extends Component {
	render() {
		return (

			<Fragment>
				<BrowserRouter>
				<Routes>
						<Route exact path="/" component={Read} />
						<Route exact path="/create" component={Create} />
						<Route exact path="/update" component={Update} />
				</Routes>
				</BrowserRouter>
			</Fragment>
		)
	}
}
