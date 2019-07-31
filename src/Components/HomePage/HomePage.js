/* Modules */
import React from 'react';
import { Container, Button, Card, CardBody, CardText} from 'reactstrap';
import { connect } from 'react-redux';

/* Files */
import './HomePage.scss';

const HomePage = (props)  => {
    const autoRedirect = () => {
        const userId = localStorage.getItem('user_id');
        userId && props.history.push('/profile');
    };

    return (
        <Container>
            {autoRedirect()}
            <Card className='auth-card'>
                <CardBody>
                    <CardText>To use this app you need to login with Spotify. Click the button below to do so.</CardText>
                    <a className='spotifyLink' href='http://localhost:3000/api/v1/session/new'><Button>Link Spotify Account</Button></a>
                </CardBody>
            </Card>
        </Container>
        )

};

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => {
            dispatch({ type: 'SET_CURRENT_USER', payload: user })
        }
    }
}

export default connect(null, mapDispatchToProps)(HomePage);