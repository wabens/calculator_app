import React, { Component } from 'react';
import { connect } from 'react-redux';


class History extends Component() {
  render() {
    return (
      <ul>
        {this.props.reduxState.historyReducer.map(
          expression => <li>{expression.solution}</li>
        )}
      </ul>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(History);
