/* Modules */
import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardDeck } from 'reactstrap';


/* Files */
import './Profile.scss';
import ArtistCard from './../ArtistCard';
import TopGenresCard from './../TopGenresCard';

class Profile extends Component {
    componentDidUpdate() {
        if (this.props.usersTopArtists.length === 0) {
            fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/spotify/top/artists`)
                .then(r => r.json()).then(artists => this.props.setUsersTopArtists(artists.items))
        }
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='profile-wrapper'>
                        <Col sm='12' md='4'>
                            <Card className='profile-img-card'>
                                <CardImg src={
                                            this.props.currentUser.profile_img_url
                                                ?
                                            this.props.currentUser.profile_img_url
                                                :
                                            'https://i1.wp.com/frfars.org/wp-content/uploads/2018/12/place-holder-for-profile-picture-4.png?ssl=1'
                                        }
                                    alt={ this.props.currentUser.display_name ? this.props.currentUser.display_name : 'placeholder profile picture' }
                                />
                                <CardBody>
                                    <CardText>
                                        Username: {this.props.currentUser.display_name}
                                    </CardText>
                                    <CardText>
                                        URL: <a href={this.props.currentUser.spotify_url} target='_blank' rel='noopener noreferrer'>{this.props.currentUser.display_name}'s profile</a>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <br/>
                            <TopGenresCard />
                        </Col>
                        <Col sm='12' md='8'>
                            <Row>
                                <CardDeck>
                                    {this.props.usersTopArtists.slice(0, 3).map(artist => <Col sm='12' md='4' key={artist.name}><ArtistCard artist={artist} key={artist.name}/></Col>)}
                                </CardDeck>
                            </Row>

                            <br/>

                            <Row>
                                <CardDeck>
                                    {this.props.usersTopArtists.slice(4, 7).map(artist => <Col sm='12' md='4' key={artist.name}><ArtistCard artist={artist} key={artist.name}/></Col>)}
                                </CardDeck>
                            </Row>

                            <br/>

                            <Row>
                                <CardDeck>
                                    {this.props.usersTopArtists.slice(8, 11).map(artist => <Col sm='12' md='4' key={artist.name}><ArtistCard artist={artist} key={artist.name}/></Col>)}
                                </CardDeck>
                            </Row>

                            <br/>

                            <Row>
                                <CardDeck>
                                    {this.props.usersTopArtists.slice(12, 15).map(artist => <Col sm='12' md='4' key={artist.name}><ArtistCard artist={artist} key={artist.name}/></Col>)}
                                </CardDeck>
                            </Row>

                            <br/>

                            <Row>
                                <CardDeck>
                                    {this.props.usersTopArtists.slice(16, 19).map(artist => <Col sm='12' md='4' key={artist.name}><ArtistCard artist={artist} key={artist.name}/></Col>)}
                                </CardDeck>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: {...state.currentUser},
        usersTopArtists: state.usersTopArtists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUsersTopArtists: (artists) => {
            dispatch({type: 'SET_TOP_ARTISTS', payload: artists})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
