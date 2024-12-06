import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import DataTable from "./components/DataTable";
import CategoryList from "./components/CategoryList";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!category) return;
      try {
        const response = await fetch(`http://localhost:5000/api/data/${category}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="app-container bg-dark text-light">
      <h1 className="text-center py-4">Amazon Product Scraper</h1>
      <div className="row">
        <div className="col-md-3">
          <CategoryList setCategory={setCategory} selectedCategory={category} />
        </div>
        <div className="col-md-9">
          {category ? (
            <DataTable data={data} />
          ) : (
            <p className="text-center mt-4">Please select a category</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
