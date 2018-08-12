import React from 'react';

const items = [ "Manga", "T-shirt", "Shoes"];
const listItems = items.map((item) => <li>{item}</li> );

export class InventoryList extends React.Component {
    render() {
        return (
            <div className={ this.constructor.name }>
                <h2>Inventory</h2>
                <ul>{listItems}</ul>
            </div>
        );
    };
}; 