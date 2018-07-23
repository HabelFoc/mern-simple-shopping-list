import React, { Component } from 'react';
import {
	Container,
	ListGroup,
	ListGroupItem,
	Button
  } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

// actions
import { getItems, deleteItem } from '../actions/itemActions';

// custom components
import ItemModal from './ItemModal';

import PropTypes from 'prop-types';

class ShoppingList extends Component{
	state = {
		modal: false
	}

	componentDidMount(){
		// call 'getItems' action
		this.props.getItems();
	}

	// Handle Deleting Items
	onDeleteItem(id){
		// call 'deleteItem' action with specify id
		this.props.deleteItem(id);
	}

	isModalOpen(){
		this.setState({
			modal: !this.state.modal
		});
	}


	render(){
		const { items } = this.props.item;
		return(
			<Container>
				<ItemModal isModalOpen={this.isModalOpen.bind(this)} modalState={this.state.modal} />
				<Button className="mb-3" color="dark" onClick={this.isModalOpen.bind(this)}>Add Item</Button>
				
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{items.map(({ _id, name }) => (
							<CSSTransition key={_id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
									className="remove-btn"
									color="danger"
									size="sm"
									onClick={this.onDeleteItem.bind(this, _id)}
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
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
	item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);