import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import '../../App.css'
import {changeDate} from '../../Store/actions/index'
import Nav from '../Nav/Nav'

class CalendarView extends Component {
    updateDateHandler = (date) => {
        console.log('working', date)
        this.props.updateDate(date)
    }
    addApptHandler = (event) => {
        event.preventDefault()
        this.props.history.push({pathname: '/newappointment'})
    }
    render() {
        return (
            <div id='App' className='App'>
                <Nav/>
                <div className='calContainer'>
                    <Calendar id='cal' onChange={event => this.updateDateHandler(event)}/>
                </div>
                <div className='apptContainer'>
                    <button id='apptButton' onClick={event => this.addApptHandler(event)}>Add Appointment</button>
                </div> 
            </div>
           
        )
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
            return dispatch(changeDate(date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)