import React from 'react';
import { connect } from 'react-redux';

/* CSS */
import { ListGroup, ListGroupItem } from 'reactstrap'

const RecommendedPlaylist = (props) => {
    return (
        <h1>HOLA! {console.log(props.tracks)}</h1>
    )
};

function mapStateToProps(state) {
    return {
        tracks: state.recommendedPlaylist
    }
}

export default connect(mapStateToProps, null)(RecommendedPlaylist)