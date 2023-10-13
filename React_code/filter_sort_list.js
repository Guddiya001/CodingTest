//Implement a feature that allows a user to filter and sort a list of items in a React component.

import React, { useState } from 'react';

const ItemList = () => {
  const initialItems = [
    { id: 1, name: 'Item A', price: 10 },
    { id: 2, name: 'Item B', price: 20 },
    { id: 3, name: 'Item C', price: 15 },
    // Add more items here
  ];

  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Function to handle sorting
  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setItems(sortedItems);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle filtering
  const handleFilter = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredItems = initialItems.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    setItems(filteredItems);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search items"
          value={searchTerm}
          onChange={handleFilter}
        />
      </div>

      <button onClick={handleSort}>
        {sortOrder === 'asc' ? 'Sort Asc' : 'Sort Desc'}
      </button>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
