import { Link } from "react-router-dom";

import { useState } from "react";

import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [showCollapsedMenu, setshowCollapsedMenu] = useState(false);

  const toggleMenu = () => {
    setshowCollapsedMenu(!showCollapsedMenu);
  };
  const show = showCollapsedMenu ? "show" : "";

  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <h2>ERP</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={"collapse navbar-collapse " + show}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto navul">
            <li className="">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/product-page">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className=" my-2 my-lg-0 d-flex" onSubmit={searchSubmitHandler}>
            <input
              className="col-lg"
              type="text"
              placeholder="Search a Product ..."
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input className="btn " type="submit" value="search" />
          </form>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                {" "}
                <AccountCircleIcon />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
