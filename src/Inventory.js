import React from 'react';

export class InventoryList extends React.Component {
    render() {
        const items = [];
        const listItems = items.map((item) => <li>{item}</li> );
        if ( items.length !== 0 ) {
            return (
                <div 
                className={ this.constructor.name }>
                    <h2>Inventory</h2>
                    <ul>{listItems}</ul>
                </div>
            );
        } else {
            return (
                <div 
                className={ this.constructor.name }>
                    <p>Please add items.</p>
                </div>
            );
        }
    };
}; 