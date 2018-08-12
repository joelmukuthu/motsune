import React from 'react';
import { InventoryList } from './Inventory';

export class AddItem extends React.Component {
    handleClick(e) {
        let itemName = itemName;
        InventoryList.items.push(itemName); 
    }

    render() {
        return (
            <div 
                className={ this.constructor.name }>
                <input 
                id="inputName"
                value={itemName}
                placeholder="Item name..." />
                <button 
                onClick={this.handleClick()} >
                    Add
                </button>
            </div>
        );
    };
};