/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//CSS
import './App.scss';

// Personal Components
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Callback from './Components/Callback';

const App = (props) => {
  return (
      <Router>
          {props.currentUser ? <Navbar /> : null}
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/spotify/callback' component={Callback}/>
      </Router>
  );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(App);
