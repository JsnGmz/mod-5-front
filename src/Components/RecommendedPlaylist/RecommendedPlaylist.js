import React, {Component} from 'react';
import { connect } from 'react-redux';
import TrackCard from "../TrackCard";
import PlaylistInfo from "../PlaylistInfo";

// CSS
import {Button, Col, Container, Row, Toast, ToastBody, ToastHeader} from 'reactstrap';
import './RecommendedPlaylist.scss';

class RecommendedPlaylist extends Component {
    state = {
        success: []
    };

    renderTrackCards = () => {
        return this.props.tracks.map((track) => {
            return <TrackCard trackName={track.name}  artistName={track.artists[0].name} explicit={track.explicit} key={track.id}/>
        });
    };

    renderPlaylistInfo = () => <PlaylistInfo />;

    generateRecommendation = () => {
        const pathArray = this.props.location.pathname.split('/');
        const genre = pathArray[pathArray.length - 1];
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/spotify/recommendations/${genre}`)
            .then(r => r.json()).then(data => this.props.setRecommendedPlaylist(data.tracks)).then(this.props.history.push(`/recommended/playlist/${genre}`))
    };

    renderToast = () => {
        console.log(this.state.success, this.state.success.length)
        return (
            <div className="p-3 bg-primary my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Success
                    </ToastHeader>
                    <ToastBody>
                        {`${this.state.success.length}'s songs added to your playlist.`}
                    </ToastBody>
                </Toast>
            </div>
        )
    };

    createPlaylist = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/spotify/playlist/new`, {
            method: 'POST',
        }).then(r => r.json()).then(playlistID => this.props.tracks.map((track) => {
            return fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/spotify/playlist/track/add`, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({uri: track.uri, playlist_id: playlistID['playlist_id']})
                }).then(r => r.json()).then(successMessage => {
                    console.log(successMessage.success)
                    return (
                        this.setState((prevState) =>  {
                            return {
                                success: [...prevState.success, successMessage]
                            }
                        })
                    )
                }).then(a => this.renderToast())
        }));
        this.generateRecommendation();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm='12' md='8'>
                        <h4>Playlist</h4>
                        {this.props.tracks && this.renderTrackCards()}
                    </Col>
                    <Col sm='12' md='4'>
                        <h4>Playlist Info</h4>
                        {this.renderPlaylistInfo()}
                        <br/>
                        <Button className='generate-button' onClick={this.generateRecommendation}>Generate New Recommendation</Button>
                        <br/>
                        <Button className='save-button' onClick={this.createPlaylist}>Save Playlist to Your Account</Button>
                    </Col>
                </Row>
            </Container>
        )
    }

}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        tracks: state.recommendedPlaylist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRecommendedPlaylist: (tracks) => {
            dispatch({ type: 'SET_RECOMMENDED_PLAYLIST', payload: tracks })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedPlaylist)