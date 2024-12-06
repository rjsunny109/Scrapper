import React from "react";
import "../styles.css"; 
const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <table className="table table-bordered table-hover table-dark">
        <thead className="thead-light">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Rating</th>
            <th>Bought Last Month</th>
            <th>Link</th>
            <th>Scrape Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{item.title}</td>
                <td>{item.price || "N/A"}</td>
                <td>{item.rating || "N/A"}</td>
                <td>{item.bought_last_month || "N/A"}</td>
                <td>
                  {item.product_link ? (
                    <a
                      href={item.product_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Amazon
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{item.scrape_date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No data available for this category.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
