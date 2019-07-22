/* Modules */
import React from 'react';
import { Container, Button, Card, CardBody, CardText} from 'reactstrap';

/* Files */
import './HomePage.scss';

const HomePage = ()  => {
    return (
        <Container>
            <Card className='auth-card'>
                <CardBody>
                    <CardText>To use this app you need to login with Spotify. Click the button below to do so.</CardText>
                    <a className='spotifyLink' href='http://localhost:3000/api/v1/session/new'><Button>Link Spotify Account</Button></a>
                </CardBody>
            </Card>
        </Container>
        )

};

export default HomePage