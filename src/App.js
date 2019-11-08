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
      toggleBasket: false

    };
  }

  
  
  //fetching data from server and storing to state itemsFromServer
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(json => this.setState({ itemsFromServer: json }))
    }
   
    
toggleBasketHandler = () => {
  console.log("asd")
  const isOpen = this.state.toggleBasket
  this.setState({toggleBasket: !isOpen})
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
  choosenItem.count = Number(e.target.dataset.count) === 0 ? 1 : e.target.dataset.count  

  //if order basket is not empty and if exist item like selected item, replace them with new item
  if (orders ? orders.find(item => item.id === itemId) : null) (
      orders.map(item => {
        if(item.id === item.Id) ( item = choosenItem )
      })
    )
  //if selected item doesnt exist in basket, add new item
    else {
    orders.push(choosenItem)
    this.setState({ orders: orders })
}
}
  
  
  
  
  
  
  
  
  render() {

    

    return (
      < div className="App" style={ { background: "#f1f1f1"}}>
        <Navigation toggleBasket={this.toggleBasketHandler}/>
        <Basket isOpen={this.state.toggleBasket}/>
        <Items items={this.state.itemsFromServer} addItem={this.addItemToState} />
      </div >
    );

  }
}

export default App;
