import React, { useState } from "react";
import { connect } from "react-redux";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../styles/navbar.css";
import { setSidebar, getKeyword } from "../store/actions";

function Navbar(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.getKeyword(input);
    props.setSidebar();
    setInput("");
  };
  return (
    <AppBar className="navbar">
      <Toolbar>
        {!props.sidebar ? (
          <>
            <div className="navbar__logo" onClick={() => props.setSidebar()}>
              <FaAlignJustify />
              <Typography>Menu</Typography>
            </div>
            <div className="navbar__header">
              <h5>Today Times</h5>
              <p>{new Date().toDateString()}</p>
            </div>
          </>
        ) : (
          <>
            <div className="navbar__logo" onClick={() => props.setSidebar()}>
              <FaTimes />
              <Typography>Close</Typography>
            </div>
            <div className="navbar__input">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search Keyword"
                  value={input}
                  onChange={(evt) => setInput(evt.target.value)}
                />
              </form>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};
export default connect(mapStateToProps, { setSidebar, getKeyword })(Navbar);
