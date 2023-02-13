import React from 'react';
import '../css/review.css';
import { InputReview } from './InputReview';
import {gql, useQuery} from '@apollo/client';
import { GET_SINGLE_MOVIE } from '../api/API_FUNCTIONS';

interface ReviewHolderProps {
    id: string;
    
}

// funksjon for liste med reviews
export function ReviewHolder({id}: ReviewHolderProps) {
    
    //callback funksjon som kjører refetch når reviews er lagt til.
    function updatePage(){
        console.log("updatePage nå!");
        refetch();
    }

    const { loading, error, data, refetch } = useQuery(GET_SINGLE_MOVIE, { variables: { id } });

    if ((loading || data == undefined ) || (data.getOneMovieByID.reviews.length == 0)) {
        return(<div className='reviewDiv'>
            <h2>Ingen Anmeldelser, legg til en!</h2>
            <InputReview id={id}
            updatePage={updatePage}
            ></InputReview>
        </div> )
    } else{
        return (
            <div  className='reviewDiv'>
                <h2>
                    Anmeldelser
                </h2>
                <InputReview id={id}
                updatePage={updatePage}
                ></InputReview>
                <div className='review' tabIndex={0}>
                    {
                        data.getOneMovieByID.reviews.map((reviews:any) => {
                            return (
                                    <p>{reviews}</p>
                                
                            )
                        }).reverse()
                    }
                </div>
            </div>
        );
    }
    
}