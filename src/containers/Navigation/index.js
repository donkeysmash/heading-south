import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li className="nav-item">
          <Link className="link-component" to='/'>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <div>Stations</div>
          <div className="dropdown-content">
            <Link className="link-component" to="sheppard-yonge_station">Sheppard-Yonge Station</Link>
            <Link className="link-component" to="finch_station">Finch Station</Link>
            <Link className="link-component" to="union_station">Union Station</Link>
            <Link className="link-component" to="seneca_college">Seneca</Link>
          </div>
        </li>
      </ul>
    );
  }
}

export default Navigation;
