import React from 'react';
import '../css/movieCard.css';
import { MovieComponentInterface } from '../interfaces/MoveieInterface';
import { Button } from './ButtonComponent';
import { useModal } from './UseModal';
import { Modal } from './Modal'
import { TagComponent } from './TagComponent';


//function to return hour and minutes from the length of the movie
const getHourAndMinutes = (length: number) => {
    const hours = Math.floor(length / 60);
    const minutes = length % 60;
    if (hours == 1){
        return hours + " time " + minutes + " minutter";
    }
    return `${hours} timer ${minutes} min`;
}

//function for the movie cards
export function MovieComponent({_id, title, rating, year , length, language, age, tags, bildeURL, description}: MovieComponentInterface) { //TODO fiks at det ikke bare er any her
    const hourAndMins = getHourAndMinutes(length);
    const { isShown, toggle } = useModal();

    const handleKeyDown = (event: any) => {
        console.log('User pressed: ', event.key);
        if (event.key === 'Enter') {
            toggle();
        }else if(event.key === 't'){
            window.scrollTo(0,0);
        }
        else if(event.key === 'd'){
            window.scrollTo(0,document.body.scrollHeight);
        }
        

      };
    
    

    return (
        <>
        <div id='movie-card-list' className='movieCard' onClick={toggle} onKeyDown={handleKeyDown} key={_id} tabIndex={0}>
            <div className='movieCard_img'>
                <img src={bildeURL} alt={"Film-plakaten til "+title} title={"Film-plakaten til "+title}/>
            </div>
            <div className='movieCard_info'>
                <h2 className='movieCardTitle'>
                    {title}
                </h2>
                <div id='movie_stats'>
                    <p id='year'> {year} </p>
                    <p id='length'> {hourAndMins}</p>
                    <p id='language'> {language}</p>
                    <p id='age'> {age}</p>
                </div>
                <p id='description'>{description}</p>
                <TagComponent tags={tags} className="tagsHolder"/>
                <Button style={"mobile"}></Button>
            </div>
           
        </div>
        <Modal
                isShown={isShown}
                hide={toggle}
                modalContent={<p>hei</p>}
                _id={_id}
                tags={tags}
                title={title}
                rating={rating}
                year={year}
                length={hourAndMins}
                language={language}
                age={age}
                bildeURL={bildeURL}
                description={description}
        />
        </>
    );
}
