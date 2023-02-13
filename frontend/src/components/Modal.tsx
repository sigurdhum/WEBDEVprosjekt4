import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/modal.css';
import { ModalInterface } from '../interfaces/ModalInterface';
import { Button } from './ButtonComponent';
import { MovieModalComp } from './MovieModalComp';

//funksjon for å lage en modal funksjoner
export const Modal: FunctionComponent<ModalInterface> = ({
  isShown,
  hide,
  _id,
  title,
  rating,
  year,
  length,
  language,
  age,
  tags,
  bildeURL,
  description
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    //trykk esc for å lukke modalen
    if (event.key === 'Escape' && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);
  //console.log('denne blir aktivert');
  
  

  const modal = (
    <div>
      <div className='movieModal' onClick={() => hide()}  >
        
      </div>
      <MovieModalComp 
      length={0}
      title={title}
      rating={rating}
      year={year}
      lengthString={length}
      language={language}
      age={age}
      tags={tags}
      bildeURL={bildeURL} 
      _id={_id}
      description={description}
      />
      <button className='closeButton' onClick={() => hide()}>LUKK</button>
    </div>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
