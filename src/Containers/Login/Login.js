import React, { Component } from 'react'
import '../../App.css'
import Nav from '../../Containers/Nav/Nav'
import { connect } from 'react-redux'
import API_KEY from './api'
import { updateUID } from '../../Store/actions/index'

class Login extends Component {
    state = {
        email: '',
        pass: ''
    }

    API_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`

    loginHandler = (event) => {
        event.preventDefault()
        fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.pass,
                returnSecureToken: true
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                console.log(res.error)
                alert(res.error.message)
            }
            else {
                let uid = res.localId
                this.props.changeUID(uid)
                this.props.history.push({pathname: "/calendar"})
            }
        })
    }

    createAccountHandler = (event) => {
        event.preventDefault()
        this.props.history.push({pathname: "/createaccount"})

    }

    render() {
        return (
            <div className='App'>
                <Nav />
                <form>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='text' onChange={event => this.setState({email: event.target.value})} value={this.state.email}/>
                    <label htmlFor='pass'>Password:</label>
                    <input name='pass' type='password' onChange={event => this.setState({pass: event.target.value})} value={this.state.pass}/>
                    <button onClick={event => this.loginHandler(event)}>Login</button>
                    <button onClick={event => this.createAccountHandler(event)}>Create New Account</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        uid: state.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeUID: uid => {
            return dispatch(updateUID(uid))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
