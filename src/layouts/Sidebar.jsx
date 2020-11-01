import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getArticles,
  getKeyword,
  setSidebar,
  clearArticles,
} from "../store/actions";

function Sidebar(props) {
  const [sel, setSel] = useState("U.S");
  const getArticles = () => {
    props.clearArticles();
    props.setSidebar();
    props.getArticles();
    setSel("U.S");
  };

  const getKeyword = (text) => {
    props.clearArticles();
    props.setSidebar();
    setSel(text);
  };
  return (
    <div
      className={`sidebar ${props.sidebar ? "sidebar__show" : "sidebar__hide"}`}
    >
      <Typography variant="h5" className="sidebar__title">
        Sections
      </Typography>
      <ul className="sidebar__list">
        <Link to="/">
          <li
            className={`sidebar__item ${sel === "U.S" ? "active" : ""}`}
            onClick={getArticles}
          >
            U.S
          </li>
        </Link>
        <Link to="/topics/cryptocurrency">
          <li
            className={`sidebar__item ${
              sel === "cryptocurrency" ? "active" : ""
            }`}
            onClick={() => getKeyword("Cryptocurrency")}
          >
            Cryptocurrency
          </li>
        </Link>
        <Link to="/topics/politics">
          <li
            className={`sidebar__item ${sel === "Politics" ? "active" : ""}`}
            onClick={() => getKeyword("Politics")}
          >
            Politics
          </li>
        </Link>
        <Link to="/topics/health">
          <li
            className={`sidebar__item ${sel === "Health" ? "active" : ""}`}
            onClick={() => getKeyword("Health")}
          >
            Health
          </li>
        </Link>
        <Link to="/topics/finance">
          <li
            className={`sidebar__item ${sel === "Finance" ? "active" : ""}`}
            onClick={() => getKeyword("Finance")}
          >
            {" "}
            Finance
          </li>
        </Link>
        <Link to="/topics/technology">
          <li
            className={`sidebar__item ${sel === "Technology" ? "active" : ""}`}
            onClick={() => getKeyword("Technology")}
          >
            {" "}
            Technology
          </li>
        </Link>
        <Link to="/topics/Lifestyle">
          <li
            className={`sidebar__item ${sel === "Lifestyle" ? "active" : ""}`}
            onClick={() => getKeyword("Lifestyle")}
          >
            {" "}
            Lifestyle
          </li>
        </Link>
        <Link to="/topics/fashion">
          <li
            className={`sidebar__item ${sel === "Fashion" ? "active" : ""}`}
            onClick={() => getKeyword("Fashion")}
          >
            {" "}
            Fashion
          </li>
        </Link>
        <Link to="/topics/sport">
          <li
            className={`sidebar__item ${sel === "Sports" ? "active" : ""}`}
            onClick={() => getKeyword("Sports")}
          >
            {" "}
            Sports
          </li>
        </Link>
        <Link to="/topics/science">
          <li
            className={`sidebar__item ${sel === "Science" ? "active" : ""}`}
            onClick={() => getKeyword("Science")}
          >
            {" "}
            Science
          </li>
        </Link>
        <Link to="/topics/business">
          <li
            className={`sidebar__item ${sel === "Business" ? "active" : ""}`}
            onClick={() => getKeyword("Business")}
          >
            {" "}
            Business
          </li>
        </Link>
        <Link to="/topics/entertainment">
          <li
            className={`sidebar__item ${
              sel === "Entertainment" ? "active" : ""
            }`}
            onClick={() => getKeyword("Entertainment")}
          >
            {" "}
            Entertainment
          </li>
        </Link>
        <Link to="/topics/history">
          <li
            className={`sidebar__item ${sel === "History" ? "active" : ""}`}
            onClick={() => getKeyword("History")}
          >
            {" "}
            History
          </li>
        </Link>
        <Link to="/topics/environment">
          <li
            className={`sidebar__item ${sel === "Environment" ? "active" : ""}`}
            onClick={() => getKeyword("Environment")}
          >
            {" "}
            Environment
          </li>
        </Link>
        <Link to="/topics/wildlife">
          <li
            className={`sidebar__item ${sel === "Wildlife" ? "active" : ""}`}
            onClick={() => getKeyword("Wildlife")}
          >
            {" "}
            Wildlife
          </li>
        </Link>
      </ul>
      <Typography variant="h5" className="sidebar__title">
        Join us
      </Typography>
      <ul className="sidebar__list">
        <li className="sidebar__item">Newsletters</li>
        <li className="sidebar__item">Subscribe</li>
      </ul>
      <Typography variant="h5" className="sidebar__title">
        Connect with us
      </Typography>
      <div className="sidebar__icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};
export default connect(mapStateToProps, {
  getArticles,
  getKeyword,
  setSidebar,
  clearArticles,
})(Sidebar);
