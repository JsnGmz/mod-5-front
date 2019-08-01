/* Modules */
import React, { Fragment } from 'react';

/* CSS */
import { Card, CardBody, CardText, Badge } from 'reactstrap';
import './TrackCard.scss'

const TrackCard = (props) => {
    return (
        <Fragment>
            <Card className='recommend-card'>
                <CardBody>
                    <CardText>{props.trackName} | {props.artistName} {props.explicit && <Badge color='dark' pill>explicit</Badge>}</CardText>
                </CardBody>
            </Card>
            <br/>

        </Fragment>
    )
};

export default TrackCard