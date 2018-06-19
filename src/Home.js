import React, { Component } from 'react'
import Navigation from './Navigation'
import Jumbotron from './Jumbotron'

class Home extends Component {
    render(){
        return(

            <div>
                <Navigation />
            <Jumbotron />
            </div>
        );
    }
}
export default Home;