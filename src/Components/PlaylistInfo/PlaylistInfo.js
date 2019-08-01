import React from 'react';
import { connect } from 'react-redux';

// Files and Css
import { ListGroup, ListGroupItem } from 'reactstrap'

const PlaylistInfo = (props) => {
    const sumDurationMS = () => {
        let duration = 0;
        props.tracks.forEach(track => duration += track.duration_ms);
        return duration
    };

    const convertMStoM = (timeMS) => timeMS / 60000;

    const formatTime = () => {
        const minutes = convertMStoM(sumDurationMS());
        const remainder = minutes.toString().split('.');
        const seconds = 60 * parseFloat(remainder[1]);
        return `Playlist Time: ${remainder[0]}:${seconds.toString().slice(0, 2)}`
    };

    const averagePopularity = () => {
        let popularity = 0;
        props.tracks.forEach(track => popularity += track.popularity)
        return `Average Song Popularity: ${popularity / props.tracks.length}`
    };

    return (
        <ListGroup>
            <ListGroupItem>{props.tracks && formatTime()}</ListGroupItem>
            <ListGroupItem>{props.tracks && averagePopularity()}</ListGroupItem>
        </ListGroup>
    )
};

function mapStateToProps(state) {
    return {
        tracks: state.recommendedPlaylist
    }
}

export default connect(mapStateToProps, null)(PlaylistInfo)