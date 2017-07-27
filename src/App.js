import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counter from './actions/counter';
import './App.css';

export class App extends React.Component {
  
  incrementCount() {
    this.props.actions.counter.incrementCount();
  }
  
  render() {
    return (
      <div>
        <div>{this.props.counter.count}</div>
        <button onClick={this.incrementCount.bind(this)} className="button-primary"> Click me </button>
      </div>
    )
  }
}

// state binding
const mapStateToProps = (state) => {
  const { counter } = state;
  return {
    counter,
  };
};

// dispatch-binding
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      counter: bindActionCreators(counter, dispatch),
      // incrementCount: () => {
      //   console.log('incrementing ...')
      // }
    },
  }
}

const AppRedux = connect(
 mapStateToProps,
 mapDispatchToProps
)(App);



export default AppRedux;
