import React from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Line, Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { products } from "../../data/productData.js";
import { orders } from "../../data/orderData.js";

Chart.register(CategoryScale);

const Dashboard = () => {
  let outOfStock = 0;
  products &&
    products.forEach((item) => {
      if (item.stock === 0) outOfStock += 1;
    });
  let totalAmount = 15302024.58;
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount.toFixed(2)],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products && products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* <MetaData title="Dashboard - Admin Panel" /> */}
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/">
              <p>Users</p>
              <p>10</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
