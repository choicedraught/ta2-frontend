import Auth from '@aws-amplify/auth';
import { withAuthenticator } from 'aws-amplify-react';
import { createStore, StoreProvider } from 'easy-peasy';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import awsconfig from './aws-exports';
import Comp from './components/Comp';
import CompRounds from './components/CompRounds';
import './components/css/buttonHolder.css';
import './components/css/tabStyles.css';
import DebugState from './components/DebugState';
import Header from './components/layout/Header';
import model from './model';



// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const store = createStore(model);

class App extends Component {
  render() {
    return (
        <StoreProvider store={store}>   
          <Router>
            <div className="App">
              <div className="container">
                <Header />
                <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
                <button onClick={checkUser}>Check User</button>
                <button onClick={signOut}>Sign Out</button>
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                {/* <PrivateRoute exact path="/availability" component={AvailabilityPage} /> */}
                <Route exact path="/" render={
                  props => (
                  <div>
                    <h3>Landing Page - Maybe news / updates?</h3>
                  </div>
                )} />
                <Route exact path="/availability" render={
                  props => (
                    <React.Fragment>
                      <div className='tabs'>
                        <Comp />
                      </div>
                      <div className='button-holder'>
                        <CompRounds />
                      </div>
                      <div>
                        <DebugState />
                      </div>
                    </React.Fragment>
                  )
                } />
              </div>
            </div>
          </Router>
        </StoreProvider>
    );
  }

}

export default withAuthenticator(App, {
  includeGreetings: true
});
