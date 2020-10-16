import React from 'react';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';


export default class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  
  }

  handleAddItem = (e) => {
    console.log(this);
    e.preventDefault();
    let addItem = e.currentTarget.previousElementSibling.value;
    this.setState(prevState => {
      prevState.shoppingItems.push({name: addItem, checked: false})
      return {
        shoppingItems: prevState.shoppingItems
      }
    })
  }

  handleDeleteItem = (itemName) => {
    
    
    this.setState(prevState => {
      const updatedShoppingItems =  prevState.shoppingItems.filter(item => {
        return item.name !== itemName
      })
      return {
        shoppingItems: updatedShoppingItems
      }
    })
  }

  handleCheckItem = (itemName) => {
    
    
    this.setState(prevState => {
      const updatedShoppingItems = prevState.shoppingItems.map(item => {
        return (
          item.name === itemName ?
          Object.assign(item, {checked: !item.checked}) :
          item
        )
      })
      return {
        shoppingItems: updatedShoppingItems
      }
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm
            onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
            items={this.state.shoppingItems}
            onDeleteItem={this.handleDeleteItem}
            onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}