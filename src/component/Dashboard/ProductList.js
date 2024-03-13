import React, { Fragment } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { products } from "../../data/productData";

const ProductList = () => {
  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 200,
      flex: 0.5,
      renderCell: (params) => {
        const cellClassName =
          params.row.stock === 0 ? "redColor" : "greenColor";

        return <div className={cellClassName}>{params.value}</div>;
      },
    },

    {
      field: "name",
      headerName: "Name",
      maxWidth: 350,
      flex: 1,
      renderCell: (params) => {
        const cellClassName =
          params.row.stock === 0 ? "redColor" : "greenColor";

        return <div className={cellClassName}>{params.value}</div>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      renderCell: (params) => {
        const cellClassName =
          params.row.stock === 0 ? "redColor" : "greenColor";

        return <div className={cellClassName}>{params.value}</div>;
      },
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
      renderCell: (params) => {
        const cellClassName =
          params.row.stock === 0 ? "redColor" : "greenColor";

        return <div className={cellClassName}>{params.value}</div>;
      },
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
    stock: "Stock",
    price: "Price",
    name: "Product Name",
  });
  products &&
    products.forEach((item, index) => {
      rows.push({
        id: item._id,
        stock: item.stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

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

export default ProductList;
