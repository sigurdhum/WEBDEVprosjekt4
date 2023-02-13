import React from 'react';
import '../css/modal.css';
import { MovieComponentInterface } from '../interfaces/MoveieInterface';
import { Button } from './ButtonComponent';
import { ReviewHolder } from './ReviewHolderComp';
import { TagComponent } from './TagComponent';

//function for modal card
export function MovieModalComp({_id, title, rating, year , length, lengthString, language, age, tags, bildeURL, description}: MovieComponentInterface) { 
    
    return (
        <div data-cy='movie-modal' className='modalCard'>
            <div  className='modalCardHolder'>
                <div className='movieCard_img modal_img' >
                    <img src={bildeURL} alt="Plakaten til ..." />
                </div>
                <div data-cy = 'movie-modal-reviews' className='modal_movieCard_info'>
                    <h1 data-cy='movie-modal-title' className='movieCardTitle modalTitle'>
                        {title}
                    </h1>
                    <h2>
                        Kort og godt
                    </h2>
                    <div id='modal_movie_stats'>
                        <p id='year'>{year}</p>
                        <p id='length'>{lengthString}</p>
                        <p id='language'>{language}</p>
                        <p id='age'> 15</p>
                    </div>
                    <h2 className='movieCardInfo'>Informasjon</h2>
                    <p id='beskrivelse'> {description} </p>
                    <h2>Sjangere</h2>
                    <TagComponent tags={tags} className="tagsHolder"/>
                </div>
            </div>
            <ReviewHolder id={_id}/>
        </div>

    );
}
