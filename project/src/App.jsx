import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader.jsx";
import "./App.css";
import API from './API.tsx';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageData, setPageData] = useState([]);
const [loading,setIsloading]=useState(false)
const [error,setError]=useState(null)
  const handleChange = (event) => {
    setRowsPerPage(Number(event.target.value));

    setPage(1); // Reset to the first page when rows per page changes
  };

  useEffect(() => {

    (async () => {
    try {
      setIsloading(true)
      const response = await API.getData();
      setData(response.data);
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(1000);
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
      setError('Error fetching data')
    }
    })();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = page * rowsPerPage;
      setPageData(data.slice(startIndex, endIndex));
    }
  }, [data, page, rowsPerPage]);
if(loading){
  return(
    <SkeletonLoader/>
  )
}
if(error){
  return(
    <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{error}</h1>
  )
}

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 style={{ textAlign: "center", color: "#007BFF" }}>SaaS Demo</h1>
    <div style={{height:'600px'}}>

<table
      className="table"
      >
        <thead>
          <tr>
            {['Serial Number', 'Percentage', 'Price USD'].map((header) => (
              <th
                key={header}
                className="tableHeading"
              
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map((row, index) => (
            <tr
              key={row['s.no']}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.2s",
                //  lineHeight:'20px'
              }}
              className="tabHover"
            >
              <td style={{ padding: "16px", color: "#555"  }}>{row['s.no']+1}</td>
              <td style={{ padding: "16px", color: "#555"   }}>{`${row['percentage.funded']}%`}</td>
              <td style={{ padding: "16px", color: "#555"   }}>{`$${row['amt.pledged']}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="pagination-button"
        >
          &laquo; Prev
        </button>
        <span style={{ fontSize: "14px", margin: "0 10px" }}>
          Page {page} of {Math.ceil(data.length / rowsPerPage)}
        </span>
        <button
          disabled={page >= Math.ceil(data.length / rowsPerPage)}
          onClick={() => setPage(page + 1)}
          className="pagination-button"
        >
          Next &raquo;
        </button>
        <label style={{ marginLeft: "15px", fontSize: "14px" }}>
          Rows per page:
          <select
            value={rowsPerPage}
            onChange={handleChange}
            style={{
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginLeft: "5px",
            }}
          >
            {[5, 10].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default App;
