import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
	items: [
			{id: uuid(), name: 'Eggs'},
			{id: uuid(), name: 'Milk'},
			{id: uuid(), name: 'Steak'},
			{id: uuid(), name: 'Candy'}
		]
};


export default (state = initialState, action) => {
	switch(action.type){
		case GET_ITEMS:
			return { ...state };
		case ADD_ITEM:
			return { ...state, items: [...state.items, {id: action.payload.id, name: action.payload.name}] };
		case DELETE_ITEM:
			return { ...state, items: [...state.items.filter(({id}) => id !== action.payload.id)] };
		default:
			return state;
	}
}