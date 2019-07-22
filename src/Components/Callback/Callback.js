/* Modules */
import { connect } from 'react-redux';

const Callback = (props) => {
    const spotifyUriCode = props.location.search.split('?code=')[1];
    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({spotifyUriCode})
    }).then(r => r.json().then(user => props.setUser(user)).then(props.history.push('/profile')));
    return null
};

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => {
            dispatch({ type: 'SET_CURRENT_USER', payload: user })
        }
    }
}

export default connect(null, mapDispatchToProps)(Callback);