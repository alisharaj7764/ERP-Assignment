import React, { Fragment } from "react";
import "./sidebar.css";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <Link to="/">
          {/* <img alt="Ecommerce" />
           */}
          <h2 style={{ textAlign: "center" }}> ERP</h2>
        </Link>
        <Link to="/">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </Link>
        {/* <div className='ProductDropdown'> */}
        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
              </Link>

              <Link to="/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        {/* </div> */}
        <Link to="/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
