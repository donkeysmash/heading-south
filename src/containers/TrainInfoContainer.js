import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrainInfo from '../components/TrainInfo';
import { loadStationRequest } from '../redux/actions';

class TrainInfoContainer extends Component {
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
    const {refresh} = this.props;
    const name = this.props.match.params.name;
    debugger;
    return (
      <div>
        <Link to='/'>Home</Link>
        <TrainInfo name={name} />
        <button onClick={this.handleRefreshClick}>refresh</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.staions
});

const mapDispatchToProps = dispatch => ({
  refresh: bindActionCreators(loadStationRequest, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainInfoContainer);
