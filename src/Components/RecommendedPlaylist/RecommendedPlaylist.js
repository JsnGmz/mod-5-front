import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import TrackCard from "../TrackCard";
import PlaylistInfo from "../PlaylistInfo";

// CSS
import {Button, Col, Container, Row} from 'reactstrap'

const RecommendedPlaylist = (props) => {
    const renderTrackCards = () => {
        return props.tracks.map((track) => {
            return <TrackCard trackName={track.name}  artistName={track.artists[0].name} explicit={track.explicit} key={track.id}/>
        });
    };

    const renderPlaylistInfo = () => <PlaylistInfo />;

    return (
        <Container>
            <Row>
                <Col sm='12' md='8'>
                    {props.tracks && renderTrackCards()}
                </Col>
                <Col sm='12' md='4'>
                    <h4>Playlist Info</h4>
                    {renderPlaylistInfo()}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Generate New Recommendation</Button>
                </Col>
                <Col>
                    <Button>Save Playlist to Your Account</Button>
                </Col>
            </Row>
        </Container>
    )
};

function mapStateToProps(state) {
    return {
        tracks: state.recommendedPlaylist
    }
}

export default connect(mapStateToProps, null)(RecommendedPlaylist)

// 0:
// album: {album_type: "ALBUM", artists: Array(1), available_markets: Array(79), external_urls: {…}, href: "https://api.spotify.com/v1/albums/1CwTQl3oL06qrjTithl9lB", …}
// artists: Array(1)
// 0:
// external_urls:
//     spotify: "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"
// __proto__: Object
// href: "https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp"
// id: "69GGBxA162lTqCwzJG5jLp"
// name: "The Chainsmokers"
// type: "artist"
// uri: "spotify:artist:69GGBxA162lTqCwzJG5jLp"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// available_markets: []
// disc_number: 1
// duration_ms: 183750
// explicit: false
// external_ids: {isrc: "USDM31400016"}
// external_urls:
//     spotify: "https://open.spotify.com/track/0zkiQH567SDLqfWNBaU3hv"
// __proto__: Object
// href: "https://api.spotify.com/v1/tracks/0zkiQH567SDLqfWNBaU3hv"
// id: "0zkiQH567SDLqfWNBaU3hv"
// is_local: false
// name: "#SELFIE"
// popularity: 7
// preview_url: null
// track_number: 1
// type: "track"
// uri: "spotify:track:0zkiQH567SDLqfWNBaU3hv"