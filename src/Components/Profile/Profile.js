/* Modules */
import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardBody, CardText } from 'reactstrap';


/* Files */
import './Profile.scss';

const Profile = (props) => {
    return (
        <Fragment>
            <Container>
                <Row className='profile-wrapper'>
                    <Col sm='12' md='6'>
                        <Card body inverse className='profile-img-card'>
                            <CardImg src={
                                        props.currentUser.profile_img_url
                                            ?
                                        props.currentUser.profile_img_url
                                            :
                                        'https://i1.wp.com/frfars.org/wp-content/uploads/2018/12/place-holder-for-profile-picture-4.png?ssl=1'
                                    }
                                alt={ props.currentUser.display_name ? props.currentUser.display_name : 'placeholder profile picture' }
                            />
                        </Card>
                    </Col>
                </Row>
                <Row className='account-info-wrapper'>
                    <Col sm='12' md='6'>
                        <Card className='account-info-card'>
                            <CardBody>
                                <CardText>
                                    Username: {props.currentUser.display_name}
                                </CardText>
                                <CardText>
                                    URL: <a href={props.currentUser.spotify_url} target='_blank' rel='noopener noreferrer'>{props.currentUser.display_name}'s profile</a>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: {...state.currentUser}
    }
}

export default connect(mapStateToProps, null)(Profile);


// currentUser:
// {…}
// display_name:
//     "tenrow"
// email:
//     "tenrow@gmail.com"
// id:
//     1
// password_digest:
//     null
// profile_img_url:
//     null
// spotify_id:
//     null
// spotify_url:
//     "https://open.spotify.com/user/tenrow"