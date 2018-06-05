import React, { Component } from 'react';
import '../../App.css'
import Nav from '../../Containers/Nav/Nav'
import API_KEY from './api'

class Login extends Component {
    state = {
        email: '',
        pass: ''
    }

    API_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`

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
                alert(res.error.errors[0])
            }
            else {
                this.props.history.push({pathname: '/calendar'})
            }
        })
    }

    backtoLogin = (event) => {
        event.preventDefault()
        this.props.history.push({pathname: '/'})
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
                    <button onClick={event => this.loginHandler(event)}>Create New Account</button>
                    <button onClick={event => this.backtoLogin(event)}>Back to Login</button>
                </form>
            </div>
        );
    }
}


export default Login
