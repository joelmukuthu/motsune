import React from 'react';
import { InventoryList } from './Inventory';

export class AddItem extends React.Component {
    state = {
        itemName: ''
    };

    handleChange = event => {
        this.setState({ itemName: event.target.value });
    }

    handleClick = () => {
        InventoryList.items.push(this.state.itemName); 
    }

    render() {
        return (
            <div 
                className={ this.constructor.name }>
                <input 
                id="inputName"
                value={this.state.itemName}
                placeholder="Item name..."
                onChange={this.handleChange} />
                <button 
                onClick={this.handleClick} >
                    Add
                </button>
            </div>
        );
    };
};
