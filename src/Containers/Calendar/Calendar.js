import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import '../../App.css'
import {changeDate} from '../../Store/actions/index'
import Nav from '../Nav/Nav'
const moment = require('moment')

class CalendarView extends Component {
    state = {
        appointments: [],
        matchingAppts: []
    }
    componentDidMount() {
        fetch(`https://pregnancy-tracker-app.herokuapp.com/userAppts/${this.props.uid}`)
        .then(res => res.json())
        .then(res => this.setState({appointments: res}))
        .then(res => console.log(this.state))
    }

    findApptsHandler = () => {
        let year = this.props.date.getUTCFullYear()
        let month = this.props.date.getUTCMonth()
        let day = this.props.date.getUTCDate()
        let matchingAppointments = this.state.appointments.filter(appt => (moment(appt.date).get('date')+1) == day)
        this.setState({matchingAppts: matchingAppointments})
    }

    renderAppointments = () => {
        this.state.matchingAppts.forEach((appt) => {
            return(
                <div>
                    <h2>
                        {appt.name}
                    </h2>
                    <h3>
                        {appt.time}
                    </h3>
                    <p>
                        {appt.description}
                    </p>
                </div>
            )
        })
    }
    updateDateHandler = (date) => {
        return new Promise ((resolve, reject) => resolve(this.props.updateDate(date)))
        .then(() => {
            this.findApptsHandler()
        }
        )
        
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
                    <Calendar id='cal' onChange={event => this.updateDateHandler(event)} value={this.props.date}/>
                </div>
                <div>
                    {renderAppointments}
                </div>
                <div className='apptButtonContainer'>
                    <button id='apptButton' onClick={event => this.addApptHandler(event)}>Add Appointment</button>
                </div>
                <div>
                   
                </div>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.cal.date,
        uid: state.auth.uid
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