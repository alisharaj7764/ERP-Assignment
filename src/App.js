import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import WebFont from "webfontloader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard.js";
import NotFound from "./component/layout/NotFound.js";
import ProductList from "./component/Dashboard/ProductList.js";
import OrderList from "./component/Dashboard/OrderList.js";
import NewProduct from "./component/Dashboard/NewProduct.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/orders" element={<OrderList />} />
          <Route exact path="/product" element={<NewProduct />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
