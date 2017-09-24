import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StopItem from '../components/StopItem';
import { loadStationRequest } from '../redux/actions';

class StationInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    this.props.refresh(this.props.match.params.name);
  }

  handleRefreshClick() {
    this.props.refresh(this.props.match.params.name);
  }

  render() {
    const name = this.props.match.params.name;
    const station = this.props.stations[name];
    if (!station) return null;
    const { requesting, success } = station;
    if (requesting) return ( <h3>Loading...</h3> );
    if (!success) return ( <h2>Loading failed :(</h2> );
    return (
      <div>
        <Link to='/'>Home</Link>
        {_.map(station.stops, (stop, key) => (
          <StopItem
            // parentPath={this.props.match.url}
            key={key}
            name={stop.name}
            // uri={stop.uri}
            routes={stop.routes} />
        ))}
        <button onClick={this.handleRefreshClick}>refresh</button>
      </div>
    );
  }
}

const mapStateToProps = ({ stations }) => ({
  stations
});

const mapDispatchToProps = dispatch => ({
  refresh: bindActionCreators(loadStationRequest, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationInfoContainer);
