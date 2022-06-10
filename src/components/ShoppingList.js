import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items , onAddToList }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keyword , setKeyword] = useState('')
  
  const [formData , setFormData] = useState({
    id: 0,
    name: '',
    category: 'Produce',
  })

  function handleNewNameChange(e) {
    setFormData({
      ...formData,
      name: e.target.value,
    })
    if (e.target.value.trim() !== ''){
      e.target.parentNode.parentNode.children[2].disabled = false
    } else {
      e.target.parentNode.parentNode.children[2].disabled = true
    }
  }

  function handleNewCategoryChange(e) {
    setFormData({
      ...formData,
      category: e.target.value
    })
  }

  function handleNewIdChange(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      id: uuid(),
    })
    onAddToList([
      ...items , formData
    ])
    e.target.reset()
    e.target.children[2].disabled = true
  }


  function handleKeywordChange(e) {
    setKeyword(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item)=>{
    return item.name.toLowerCase().includes(keyword.toLowerCase())
  }).filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      
      <ItemForm onSelect={handleNewCategoryChange} onInput={handleNewNameChange} onItemFormSubmit={handleNewIdChange}/>
      
      <Filter keyword={keyword} onSearchChange={handleKeywordChange} onCategoryChange={handleCategoryChange} />
      
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    
    </div>
  );
}

export default ShoppingList;
