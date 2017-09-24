import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StopItem extends Component {
  render() {
    console.log(this.props);
    return (
      <p> {this.props.name} </p>
    );
  }
}

// const StopItem = ({ name, uri, routes, parentPath }) => (
//   <div>
//     <Link to={`${parentPath}/${uri}`}>{name}</Link>
//   </div>
// );

export default StopItem;
