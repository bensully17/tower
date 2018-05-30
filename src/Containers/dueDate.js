import React, { Component } from 'react';
import './App.css'
import Nav from './Containers/Nav/Nav'
import { connect } from 'react-redux'
import {changeDueDate} from '../src/Store/actions/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className='Nav'/>
       <form>
         <label>Select Your Due Date</label>
         <input type='date' name='Due Date' value={this.props.dueDate} onChange={event => this.props.updateDate(event.target.value)}/>
         <button>Submit</button>
       </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => {
      return dispatch(changeDueDate(date))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
