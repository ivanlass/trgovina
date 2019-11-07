import React from 'react';
import './App.css';
import Items from './Layout/Items/Items'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsFromServer: [],
      orders: []

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ itemsFromServer: json }))
  }


  itemCount = (e) => {

  }


  addItemToState = e => {
    e.preventDefault()
    const itemId = Number(e.currentTarget.id);
    const storeItems = [...this.state.itemsFromServer];
    const orders = this.state.orders
    const choosenItem = storeItems.find(item => item.id === itemId)
    if (orders ? orders.find(item => item.id === itemId) : null) (

      console.log(e.target)
    )
    else {
      orders.push(choosenItem)
      this.setState({ orders: orders })
    }

  }







  render() {

    return (
      < div className="App" >
        <Items items={this.state.itemsFromServer} addItem={this.addItemToState} itemCount={this.itemCount} />
      </div >
    );

  }
}

export default App;
