import React from "react";
import { Filter } from "react-feather";

const CategoryForm = ({ categories, category, handleCategoryChange }) => {
  return (
    <div className="category-form">
      <form className="category-filter" onChange={handleCategoryChange}>
        <Filter />
        <label htmlFor="category">Filter Quotes:</label>
        <select id="category" name="category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CategoryForm;
