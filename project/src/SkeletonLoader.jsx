import React, { useEffect, useState } from "react";
import "./App.css";

function SkeletonLoader() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 style={{ textAlign: "center", color: "#007BFF" }}>SaaS Demo</h1>

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
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                cursor: "pointer",
              }}
            >
              <td style={{ padding: "16px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "14px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                ></div>
              </td>
              <td style={{ padding: "16px" }}>
                <div
                  style={{
                    width: "100px",
                    height: "14px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                ></div>
              </td>
              <td style={{ padding: "16px" }}>
                <div
                  style={{
                    width: "80px",
                    height: "14px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -100px 0;
            }
            100% {
              background-position: 200px 0;
            }
          }

          tbody div {
            background: linear-gradient(
              90deg,
              #e0e0e0 25%,
              #f4f4f4 50%,
              #e0e0e0 75%
            );
            background-size: 200px 100%;
            animation: shimmer 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default SkeletonLoader;
