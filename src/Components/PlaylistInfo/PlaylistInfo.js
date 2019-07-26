import React from 'react';
import { connect } from 'react-redux';

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
        return `${remainder[0]}:${seconds.toString().slice(0, 2)}`
    };

    return (
        <div>
            {props.tracks && formatTime()}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        tracks: state.recommendedPlaylist
    }
}

export default connect(mapStateToProps, null)(PlaylistInfo)