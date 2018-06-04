import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import {changeDate} from '../../Store/actions/index'
import Nav from '../Nav/Nav'

class AddAppt extends Component {
    state = {
        appt: null,
        date: null,
        time: null,
        desc: null
    }

    addApptHandler = (event) => {
        event.preventDefault()        
        if (this.state.appt == null || this.state.date == null) {
            alert('You must insert a name and date for the appointment.')
        }
        else {
            let data = {
                "uid": this.props.userId,
                "name": this.state.appt,
                "date": this.state.date,
                "time": this.state.time,
                "description": this.state.desc
            }
            fetch('https://pregnancy-tracker-app.herokuapp.com/userAppts', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
        }

    }

    render() {
        return (
            <div id='App' className='App'>
                <Nav/>
                <form>
                    <label for='appt'>Appointment:</label>
                    <input name='appt' type='text' onChange={event => this.setState({appt: event.target.value})}/>
                    <label for='date'>Date:</label>
                    <input name='date' type='date' onChange={event => this.setState({date: event.target.value})}/>
                    <label for='time'>Time:</label>
                    <input name='time' type='time' onChange={event => this.setState({time: event.target.value})}/>
                    <label for='description'>Description:</label>
                    <textarea id='apptdesc' name='description' rows='7' columns='150' onChange={event => this.setState({desc: event.target.value})}/>
                    <input type='submit' value='Submit' onClick={event => this.addApptHandler(event)}/>
                </form> 
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDate: date => {
            return dispatch(changeDate(date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAppt)