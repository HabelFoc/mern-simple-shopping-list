import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';


// Getting Items
export const getItems = () => {
	return {
		type: GET_ITEMS
	}
}


// Adding item
export const addItem = ({ id, name }) => {
	return {
		type: ADD_ITEM,
		payload: { id, name }
	}
}


// Deleting item
export const deleteItem = ({ id }) => {
	return {
		type: DELETE_ITEM,
		payload: { id }
	}
}