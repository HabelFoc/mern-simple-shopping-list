import React, { Component } from 'react';
import {
	Container,
	ListGroup,
	ListGroupItem,
	Button
  } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component{

	componentDidMount(){
		// call 'getItems' action
		this.props.getItems();
	}

	// Handle Adding Items
	onAddItem(){
		const name = prompt('Add Item');
		// call 'addItem' action with data passed
		this.props.addItem({id:uuid(), name});
	}

	// Handle Deleting Items
	onDeleteItem(id){
		// call 'deleteItem' action with specify id
		this.props.deleteItem({id});
	}


	render(){
		const { items } = this.props.item;
		return(
			<Container>
				<Button className="mb-3" block color="dark" onClick={this.onAddItem.bind(this)}>Add Item</Button>

				<ListGroup>
					<TransitionGroup className="shopping-list">
						{items.map(({ id, name }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
									className="remove-btn"
									color="danger"
									size="sm"
									onClick={this.onDeleteItem.bind(this, id)}
									>&times;</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
	item: state.item
});


export default connect(mapStateToProps, { getItems, addItem, deleteItem })(ShoppingList);