import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './ArtistCard.scss';

const ArtistCard = (props) => {
    const openArtistPage = () => {
        window.open(props.artist.external_urls.spotify, '_blank');
    };

    const formatGenres = () => {
        return props.artist.genres.join(', ');
    };

    return (
        <Card className='h-100 artist-card' onClick={openArtistPage}>
            <CardImg className='artist-card-img' src={props.artist.images[1].url} alt={'Photo of ' + props.artist.name}/>
            <CardBody>
                <CardTitle>{props.artist.name}</CardTitle>
                <CardSubtitle>Num of Followers: {props.artist.followers.total}</CardSubtitle>
                <CardText>Genres: {formatGenres()}</CardText>
            </CardBody>
        </Card>
    )
};

export default ArtistCard

/*

artist:
{…}
external_urls:
{…}
spotify:
"https://open.spotify.com/artist/4sf4DrAOkheqktxTyKm7tO"
followers:
{…}
href:
null
total:
173180
genres:
Array[2]
0:
"otacore"
1:
"scorecore"
href:
"https://api.spotify.com/v1/artists/4sf4DrAOkheqktxTyKm7tO"
id:
"4sf4DrAOkheqktxTyKm7tO"
images:
Array[3]
0:
{…}
1:
{…}
height:
320
url:
"https://i.scdn.co/image/990db3a6c103fb74fe51e0d726aca59337d7eff3"
width:
320
2:
{…}
name:
"AmaLee"
popularity:
65
type:
"artist"
uri:
"spotify:artist:4sf4DrAOkheqktxTyKm7tO"
**/