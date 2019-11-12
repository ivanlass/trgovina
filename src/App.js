import React from 'react';
import './App.css';
import Items from './Layout/Items/Items'
import Navigation from "./Components/Navigation/Navigation"
import Basket from "./Components/Basket/Basket"


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsFromServer: [],
			orders: [],
			toggleBasket: false,
			total: 0,
		};
	}
	
	
	
	//fetching data from server and storing to state itemsFromServer
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => this.setState({ itemsFromServer: json }))
	}
	
	
	toggleBasketHandler = () => {
		const isOpen = this.state.toggleBasket
		this.setState({ toggleBasket: !isOpen })
	}


	findDate = () => {
		console.log("asd")
	}

	
	
	
	// Adding item to basket or replacing existing item with new item
	addItemToState = e => {
		e.preventDefault()
		// selected item id
		const itemId = Number(e.currentTarget.id);
		//items from server
		const storeItems = [...this.state.itemsFromServer];
		// complete basket array
		const orders = this.state.orders
		// selected item object
		const choosenItem = storeItems.find(item => item.id === itemId)
		// adding quantity in selected item object
		choosenItem.count = e.target.value == undefined ? Number(e.target.dataset.count) : Number(e.target.value)
		//if order basket is not empty and if exist item like selected item, replace them with new item
		if (orders ? orders.find(item => item.id === itemId) : null) (
			orders.map(item => {
				if (item.id === item.Id) (item = choosenItem)
			})
			)
			//if selected item doesnt exist in basket, add new item
			else {
				orders.push(choosenItem)
				this.setState({ orders: orders })
			}
			//block for counting new total value and adding to state
			let total = this.state.total
			total = 0
			let newOrders = this.state.orders
			newOrders.map(order => (
				total += order.id * order.count
				))
				this.setState({ total: total })
	}
			
			
	// deleting item from orders array
	deleteItem = e => {
		// item id you want to delete
		const itemId = Number(e.currentTarget.id)
		// complete basket array
		let orders = this.state.orders
		// index of deleted item
		let indexOfNumber = ""
		// find index of item you want to delete and store value to indexOfNumber
		for (let index = 0; index < orders.length; index++) {
			if (orders[index].id === itemId) (
				indexOfNumber = index
				)
		}
		// delete item
		orders.splice(indexOfNumber, 1)
		this.setState({ orders: orders })
		//block for counting new total value and adding to state
		let total = this.state.total
		total = 0
		let newOrders = this.state.orders
		newOrders.map(order => (
			total += order.id * order.count
			))
			this.setState({ total: total })
	}
					
					
					
					
					
					
					
					
					
					
	render() {
		
		return (
			<div className="App" style={{ background: "#f1f1f1" }} >
			<Navigation
			toggleBasket={this.toggleBasketHandler}
			itemNumber={this.state.orders.length} />
			<Basket
			findDate = {this.findDate}
			total={this.state.total}
			deleteItem={this.deleteItem}
			addItem={this.addItemToState}
			orders={this.state.orders}
			isOpen={this.state.toggleBasket}
			toggleBasketHandler={this.toggleBasketHandler} />
			<Items
			items={this.state.itemsFromServer}
			addItem={this.addItemToState} />
			</div >
			);
			
	}
}

export default App;
					