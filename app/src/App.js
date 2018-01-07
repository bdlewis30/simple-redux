import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
