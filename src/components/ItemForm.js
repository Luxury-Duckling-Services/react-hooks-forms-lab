import React from "react";

function ItemForm( { onSelect, onInput , onItemFormSubmit  } ) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onInput} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" disabled={true}>Add to List</button>
    </form>
  );
}

export default ItemForm;
