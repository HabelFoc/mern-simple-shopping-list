import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; // redux wrapper
import store from './store';

// components
import TopNavbar from './components/TopNavbar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
				  	<TopNavbar />
				  	<ShoppingList />
			  </div>
			</Provider>
		);
	}
}

export default App;
