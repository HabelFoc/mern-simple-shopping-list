import React, { Component } from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

import PropTypes from 'prop-types';


class ItemModal extends Component{
	constructor(props){
		super(props);

		// binding context
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		// states
		this.state = {
			name: ''
		}
	
	}

	onSubmit(e){
		e.preventDefault();

		const newItem = {
			name: this.state.name
		}

		this.props.addItem(newItem);
		this.props.isModalOpen()
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	render(){
		return(
			<div>
				<Modal isOpen={this.props.modalState} toggle={this.props.isModalOpen}>
					<ModalHeader toggle={this.props.isModalOpen}>
						Add Item To Your Shopping List
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input 
								id="item"
								type="text"
								name="name"
								placeholder="Add shopping item"
								onChange={this.onChange}
								/>
								<Button
								color="dark"
								style={{marginTop: '2rem'}}
								block
								>
								Add Item
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}


// props validation
ItemModal.propTypes = {
	addItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	item: state.item
});


export default connect(mapStateToProps, { addItem })(ItemModal);