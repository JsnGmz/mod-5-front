import React from 'react';
import { connect } from 'react-redux';

/* Files and Css */
import { ListGroup, ListGroupItem } from 'reactstrap';
import './TopGenresCard.scss';

const TopGenresCard = (props) => {
    const countGenres = () => {
        const genreTally = {};
        props.usersTopArtists.forEach((artist) => {
            artist.genres.forEach((genre) => {
                if (Object.keys(genreTally).includes(genre)) {
                    genreTally[genre]++
                } else{
                    genreTally[genre] = 1
                }
            });
        });
        return genreTally
    };

    const sortGenres = () => {
        const sortedGenres = {};
        const genres = countGenres();
        const values = Object.values(genres).sort((a, b) => a - b).reverse();
        values.forEach((value) => {
            for(let k in  genres) {
                if (genres[k] === value) {
                    sortedGenres[k] = value
                }
            }
        });
        return sortedGenres
    };

    const topXGenres = (num) => {
        const sortedGenres = sortGenres();
        const sortedGenresKeys = Object.keys(sortedGenres);
        return sortedGenresKeys.slice(0, num).map(k => <ListGroupItem onClick={() => handleClick(k)} key={`${k} count`}>{k}: {sortedGenres[k]}</ListGroupItem>)
    };

    const handleClick = (k) => {
      fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}/spotify/recommendations/${k}`)
          .then(r => r.json()).then(data => props.setRecommendedPlaylist(data.tracks)).then(props.history.push(`/recommended/playlist/${k}`))
    };

    return (
        <ListGroup>
            {topXGenres(20)}
        </ListGroup>
    )

};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        usersTopArtists: state.usersTopArtists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRecommendedPlaylist: (tracks) => {
            dispatch({type: 'SET_RECOMMENDED_PLAYLIST', payload: tracks})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopGenresCard)