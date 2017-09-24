import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='sheppard-yonge_station'>Sheppard-Yonge Station</Link>
        {' '}
        <Link to='finch_station'>Finch Station</Link>
        {' '}
        <Link to='union_station'>Union Station</Link>
      </div>
    );
  }
}

export default Home;
