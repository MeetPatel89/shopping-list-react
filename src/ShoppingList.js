import React from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends React.Component {

    static defaultProps = {
        items: []
    }
    
    render() {
        const shoppingItems = this.props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          
          item={item}
          onDeleteItem={this.props.onDeleteItem}
          onCheckItem={this.props.onCheckItem}
        />)
        
        

        return (
            <ul>
                {shoppingItems}
            </ul>
        )
    }
}