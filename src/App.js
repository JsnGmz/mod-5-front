/* Modules */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//CSS
import './App.scss';

// Personal Components
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Callback from './Components/Callback';
import Profile from './Components/Profile';
import RecommendedPlaylist from "./Components/RecommendedPlaylist";

class App extends Component {
    componentDidMount() {
        const userID = localStorage.getItem('user_id');
        if (userID) {
            fetch('http://localhost:3000/api/v1/auto', {
                headers: {
                    'Authorization': userID
                }
            }).then(r => r.json()).then(user => this.props.setUser(user))
        }
    }

    render(){
        return (
            <Router>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/spotify/callback' component={Callback}/>
            <Route exact path='/profile' component={Profile} />
            <Route path='/recommended/playlist' component={RecommendedPlaylist} />
            </Router>
        );
    }
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => {
            dispatch({ type: 'SET_CURRENT_USER', payload: user })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
