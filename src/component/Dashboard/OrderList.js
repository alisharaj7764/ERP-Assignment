import React, { Fragment } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "./Sidebar";

import { orders } from "../../data/orderData";

const OrderList = () => {
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    {
      field: "customer",
      headerName: "customer",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,

      renderCell: (params) => {
        const cellClassName =
          params.row.status === "Delivered" ? "greenColor" : "redColor";

        return <div className={cellClassName}>{params.value}</div>;
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 100,
      flex: 0.4,
    },

    {
      field: "date",
      headerName: "Date",
      type: "number",
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "action",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link>
              <EditIcon />
            </Link>
            <Button>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  let rows = [];
  rows.push({
    id: "Id",
    itemsQty: "Quantity",
    date: "Date",
    status: "Order Status",
    customer: "Customer",
  });
  orders &&
    orders.forEach((item, index) => {
      rows.push({
        id: item._id,
        itemsQty: item.quantity,
        date: item.date,
        status: item.orderStatus,
        customer: item.customer,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            pageSizeOptions={`[5, 10, 25]`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
