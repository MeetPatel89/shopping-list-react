import React from 'react';
import './ShoppingItem.css';

export default class ShoppingItem extends React.Component {

    static defaultProps ={
        item: {}
    }

    render() {

        

        return (
            <li>
                <h2 style={{textDecoration: this.props.item.checked && "line-through"}}>{this.props.item.name}</h2>
                <button type="button" onClick={() => this.props.onCheckItem(this.props.item.name)}>Check</button>
                <button type="button" onClick={() => this.props.onDeleteItem(this.props.item.name)}>Delete</button>
            </li>
        )
    }
}