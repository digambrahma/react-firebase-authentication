import React, { Component } from 'react'
import { fire, facebookprovider } from './config/Fire'
import { Toaster, Intent } from '@blueprintjs/core'
class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
        
    }
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
        
    }

    authWithFacebook = (e) => {
        e.preventDefault();
        fire.auth().signInWithPopup(facebookprovider)
        .then( result => {

        })
        .catch( error => {
            alert(error.message)
        })
    }

    // authWithEmailPassword = (e) => {
    //     e.preventDefault();
    //     fire.auth().fetchProvidersForEmail(this.state.email)
    //     .then((providers) => {
    //         if(providers.length === 0){
    //             //create user
    //             return fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         } else if(providers.indexOf("password") === -1){
    //             //password does not matches
    //             this.toaster.show({ intent: Intent.WARNING, message: "Try alternative login" })
    //         }else {
    //             //sign in with email/password
    //             return fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //         }
    //     })
    //     .then((user) => {
    //         if(user && user.email){
    //             this.loginform.reset();
    //         }
    //     })
    //     .catch((error) => {
    //         this.toaster.show({ intent: Intent.DANGER, message: error.message })
    //     })
    // }

    signIn = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            alert(error.message)
            
        })
    }

    signUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => {
            alert("Signed Up")
        })
        .catch( error => {
            alert(error.message)
        })
    }


    render(){
        return(
            <div className= 'text-center' style={{ width: '300px', margin: 'auto', marginTop: '200px'}}>

                <Toaster ref = { element => this.toaster = element }/>

                <form className="form-signin" ref = {(form) => this.loginform = form } onSubmit = {this.authWithEmailPassword}>

                    <h1 className="h3 mb-3 font-weight-normal"> Please Sign in </h1>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick = {this.authWithFacebook}>Log in with facebook</button>

                    <h5 className="h5 mb-3 font-weight-normal">or</h5>
                    
                    <label for="inputEmail" className="sr-only" >Email address</label>
                    <input type="email" value={this.state.email} onChange = {this.onEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" value={this.state.password} onChange = {this.onPasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                    
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>

                    <button className="btn btn-lg btn-outline-primary btn-block" type="submit" onClick = {this.signIn}>Sign in</button>
                    <button className="btn btn-lg btn-outline-success btn-block" type="submit" onClick = {this.signUp}>Sign up</button>
                   
                    <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
                </form>
            </div>
            
        );
    }
}

export default SignUp;