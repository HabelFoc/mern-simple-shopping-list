import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

// Initial state
const initialState = {};

// Apply middlewares
const middlewares = [reduxThunk];

// create store
const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(...middlewares)
);


export default store;