import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import {changeDate} from '../../Store/actions/index'

class CalendarView extends Component {
    updateDateHandler = (date) => {
        console.log('working', date)
        this.props.updateDate(date)
    }
  render() {
    return (
        <Calendar id='cal' onChange={event => this.updateDateHandler(event)}/>
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