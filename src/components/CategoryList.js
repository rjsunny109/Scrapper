import React, { useState, useEffect } from "react";
import "../styles.css"; 

const CategoryList = ({ setCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const result = await response.json();
        setCategories(result.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="category-list">
      <h5 className="text-center mb-3 text-light">Categories</h5>
      {loading ? (
        <p className="text-center text-light">Loading...</p>
      ) : (
        <ul className="list-group">
          {categories.map((category) => (
            <li
              key={category}
              className={`list-group-item ${
                category === selectedCategory ? "active" : ""
              }`}
              onClick={() => setCategory(category)}
              style={{ cursor: "pointer" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
