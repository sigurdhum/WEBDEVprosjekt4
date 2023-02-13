import React from 'react';
import '../css/Button.css';

//array with the chosen filters
const chosenFilters: string[] = [];

 
interface ButtonComponentProps {
    style? : string;
}
//function for se mer button
export function Button({style}: ButtonComponentProps) {
    return (
        <button className={style}>
            SE MER
        </button> 
    );
}


