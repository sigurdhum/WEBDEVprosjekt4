import { gql, useQuery, useMutation } from '@apollo/client';
import React, { DetailedHTMLProps, FormHTMLAttributes, useRef, useState } from 'react';
import '../css/review.css';
import {ADD_REVIEW} from '../api/API_FUNCTIONS';
interface InputReviewProps {
    id: string;
    updatePage: () => void;
}

//function to make the input for the review
export function InputReview({id, updatePage}: InputReviewProps) { 
    const [reviewtext, setReviewText] = useState('');
    const [addReview] = useMutation(ADD_REVIEW, { variables: { 
        id,
        reviewText: reviewtext
        }
    });
    //const form = useRef<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>();
    //form.current.focus()
    function submit(){
        if(reviewtext.trim() == '' ){
            alert('Du må skrive noe i anmeldelsen');
            //e.preventDefault();
        }else{
        //e.preventDefault();
        addReview({});
        setReviewText('');
        updatePage();
        }
    }
    
    return (

        
        <div className='inputReview'>
            <input
            autoFocus={true}
            
            data-cy='review-textarea' 
            id='reviewInput'
            placeholder='Legg til en anmeldelse... '
            type={'text'}
            onChange={(e) => setReviewText(e.target.value)}
            value={reviewtext}
            />
            <button data-cy='review-submit' onClick={submit} >
                Send inn
            </button>
        </div>
      
        
    );
}

/**
 * TODO:
 * Akkurat nå trackes ikke hva som faktisk er i reviews, så siden må lastes på nytt for å hente.
 */