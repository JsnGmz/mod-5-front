import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

/* Files and Css */
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
        return sortedGenresKeys.slice(0, num).map(k => <ListGroupItem key={`${k} count`}>{k}: {sortedGenres[k]}</ListGroupItem>)
    };

    return (
        <ListGroup>
            {topXGenres(20)}
        </ListGroup>
    )

};

function mapStateToProps(state) {
    return {
        usersTopArtists: state.usersTopArtists
    }
}

export default connect(mapStateToProps, null)(TopGenresCard)