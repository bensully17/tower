import React, { Component } from 'react';
import '../../App.css'
import Nav from '../../Containers/Nav/Nav'
// import { connect } from 'react-redux'
require('dotenv').load()
// const API_KEY = process.env.AUTH_API



class Login extends Component {
    state = {
        email: '',
        pass: ''
    }

    // API_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`

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
        .then(res => console.log(res.error))
    }

    createAccountHandler = () => {

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
                    <button onClick={event => this.loginHandler(event)}>Submit</button>
                    <button onClick={this.createAccountHandler}>Create New Account</button>
                </form>
            </div>
        );
    }
}


export default Login
