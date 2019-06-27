import React, { Component } from 'react';
import { connect } from 'react-redux';


class HistoryList extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'GET_HISTORY',
    })
  }
  render() {
    return (
      <section className='history-section'>
        <ul>
          {this.props.reduxState.historyReducer.map(
            expression =>
            <li>
              <div className='expression-row'>
                <h3>
                  {expression.operand1 + ' ' + expression.operator + ' ' + expression.operand2 + ' ' + '=' + ' ' + expression.solution}
                </h3>
              </div>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(HistoryList);
