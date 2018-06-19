import React, { Component } from 'react';
import Home from './Home'
import SignUp from './SignUp'
import { fire } from './config/Fire'
import { Spinner } from '@blueprintjs/core'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      loading: true
    }
  }

  componentDidMount(){

    this.authListener();
  }

    
  authListener = () => {
    fire.auth().onAuthStateChanged( (user) => {
      if(user) {
        this.setState({ user, loading: false })

      }else{
        this.setState({ user: null, loading: false })
      }
    })
  }

  render() {

    if(this.state.loading === true){
      return(
        <div style ={{ textAlign: 'center', marginTop: '50%', left: '50%' }}>
          <h3> loading.. </h3>
          <Spinner className = 'pt-intent-primary'/>
        </div>
      )
    }

    return (
      <div>
        {this.state.user ? ( <Home />) : ( <SignUp />) }
      </div>
    );
  }
}

export default App;
