import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import Login from './Containers/Login/Login'
import Calendar from './Containers/Calendar/Calendar'
import CreateAccount from './Containers/Login/createAccount'
import AddAppt from './Containers/AddAppt/AddAppt'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path="/" exact component={Login}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/createaccount" component={CreateAccount}/>
            <Route path="/newappointment" component={AddAppt}/>
        </div>
    );
  }
}


export default App
