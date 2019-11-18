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
      time: ""
    };
  }

  componentWillMount() {
    localStorage.getItem('orders') && this.setState({ orders: JSON.parse(localStorage.getItem('orders')) })
  }

  //fetching data from server and storing to state itemsFromServer
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ itemsFromServer: json }))

  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('orders', JSON.stringify(nextState.orders))
  }


  toggleBasketHandler = () => {
    const isOpen = this.state.toggleBasket
    this.setState({ toggleBasket: !isOpen })
  }


  submitPurchase = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.date)
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
    console.log(e.target.value == undefined)
    choosenItem.count = e.target.value == undefined ? Number(e.target.dataset.count) : Number(e.target.value)
    //if order basket is not empty and if exist item like selected item, replace them with new item
    if (orders && orders.find(item => item.id === itemId)) (
      orders.map(item => {
        if (item.id === itemId) {
          item = choosenItem
          this.setState({ orders: orders })

        }

      })
    )
    //if selected item doesnt exist in basket, add new item
    else {
      orders.push(choosenItem)
      this.setState({ orders: orders })

    }
    //block of code for counting new total value and adding to state
    let total = 0
    let newOrders = orders
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
    let total = 0
    let newOrders = orders
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
          submitPurchase={this.submitPurchase}
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
