import React from 'react';
import '../css/movieCard.css';
import { Button } from './ButtonComponent';
import { TagComponent } from './TagComponent';

//function for a loadin movie, when loading data

export function LoadingMovieComponent() {
    return (
        <div className='movieCard' >
            <div className='movieCard_img loading'>
            </div>
            <div className='movieCard_info'>
                <h2 className='movieCardTitle loading' >
                    XXXXXXXXXXXXXXX
                </h2>
                <div id='movie_stats'>
                    <p id='year' className='loading'> XXXX </p>
                    <p id='length' className='loading'> XX XXXXX </p>
                    <p id='language' className='loading'> XXXXXXX </p>
                    <p id='age' className='loading'> XX</p>
                </div>
                <p id="loading"> XXXXXXXXXX XXXXX </p>
                <p id="loading"> XXXXXXXXX XXXXX XXXXX XXXXXXX XXXXX XXXXXX </p>
                <TagComponent tags={["halla", "balla"]} className="tagsHolder loading"/>
                <Button style={"mobile loading"}></Button>
            </div>
        </div>
    );
}
