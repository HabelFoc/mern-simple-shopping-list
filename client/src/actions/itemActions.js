import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// Getting Items
export const getItems = () => {
	return async dispatch => {

		dispatch(getItemsLoading());

		try {
			await axios
			.get('/api/items')
			.then(res => dispatch({
				type: GET_ITEMS,
				payload: res.data
			}));
			console.log('fetch items success!')
		}catch(err){
			console.log('failed to fetch items...');
		}

	}	
}


// Adding item
export const addItem = (item) => {
	return async dispatch => {
		
		try {
			await axios
			.post('/api/items/add', item)
			.then(res => dispatch({
				type: ADD_ITEM,
				payload: res.data
			}));
			console.log('add item success!')

		}catch(err){
			console.log('adding item failed...');
		}

	}
}


// Deleting item
export const deleteItem = (_id) => {
	return async dispatch => {
		
		dispatch({
			type: DELETE_ITEM,
			payload: _id
		});

		try{
			await axios
			.delete(`/api/items/delete/${_id}`)
			.then(res => console.log('delete item success!'));

		}catch(err){
			console.log('deleting item failed...');
		}

	}
}


// Loading indicator
export const getItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}