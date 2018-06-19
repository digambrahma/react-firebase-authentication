import React, { Component } from 'react'
import { fire } from './config/Fire'

class Navigation extends Component {

    

    sinOut = (e) => {
            e.preventDefault();
            fire.auth().signOut();
        }
    

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary" style ={{ boxShadow: '0 0.25rem 0.75rem rgba(0, 0, 0, .05)' }}>
                    <a className="navbar-brand" href="/" style = {{ color: '#ecf0f1', textShadow: '3px', fontWeight: '400', fontSize: '22px' }} >The Bodo Channel</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <a className="nav-link" style ={{ color: '#ffffff' }} href="/">Politics <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                            <a className="nav-link" style ={{ color: '#ffffff' }} href="/">Sports <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                            <a className="nav-link" style ={{ color: '#ffffff' }} href="/">Entertainment <span className="sr-only">(current)</span></a>
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick = {this.sinOut}>Sign out</button>
                        </form>
                    </div>
                </nav>
            
        ); 
    }
}

export default Navigation;
