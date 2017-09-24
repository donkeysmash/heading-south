import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrainSchedule from '../components/TrainSchedule';
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
    return (
      <div>
        <Link to='/'>Home</Link>
        <TrainSchedule name={name} />
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
