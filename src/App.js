import React, { Component } from 'react';
import './App.css'
// import Nav from './Containers/Nav/Nav'
// import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Login from './Containers/Login/Login'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path="/" component={Login}/>
        </div>
    );
  }
}


export default App
