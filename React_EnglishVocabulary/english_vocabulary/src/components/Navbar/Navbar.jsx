import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn"> Train
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#"> My tasks </a>
          <a href="#"> Vocabulary </a>
          <a href="#"> Grammar </a>
          <a href="#"> Practise video </a>
          <a href="#"> Speaking </a>
        </div>
      </div>
      <div>
        <a href="#"> Online course </a>
        <a href="#"> Speaking club </a>
        <a href="#"> Online vebinars </a>
        <a href="#"> Blog </a>
      </div>
    </div>
    );
}

export default Navbar;