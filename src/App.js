import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actionsObj from '../../state-management/actions';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  incrementCount() {
    this.props.actions.incrementCount();
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

App.propTypes = {
  actions: PropTypes.object,
  counter: PropTypes.object,
};
 
const mapStateToProps = (state) => {
  //const { counter } = state;
  return {
    counter : { count: 11},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      // counter: bindActionCreators(actionsObj.api, dispatch),
      counter: () => {
        console.log('incrementing')
      }
    },
  }
}

const AppRedux = connect(
 mapStateToProps,
 mapDispatchToProps
)(App);



export default AppRedux;
