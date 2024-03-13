import React from "react";
// import { Link } from 'react-router-dom'
// import { CgMouse } from 'react-icons/cg';
import "./Home.css";
// import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
// const product = {
//     name: 'Red Shirt',
//     images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//     price: 3000,
//     _id: "prwzProduct"
// }
import { productsPageData } from "../../data/productPageData";

const Home = () => {
  return (
    <>
      {/* <MetaData title="ECOMMERCE" /> */}
      {/* <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS HERE</h1>

                <Link type='button' to='/'>

                    Shop < CgMouse />

                </Link >

            </div > */}

      <div className="conteiner" id="contener">
        {productsPageData &&
          productsPageData.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
      </div>
    </>
  );
};

export default Home;
