import React from 'react';

export default class AddItemForm extends React.Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="broccoli"
                    aria-label="Shopping list item"
                />
                <button type='submit' onClick={(e) => this.props.onAddItem(e)}>Add Item</button>
            </form>
        )
    }
}