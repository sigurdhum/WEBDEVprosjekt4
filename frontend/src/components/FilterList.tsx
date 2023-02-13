import React, { FormEvent } from 'react';
import '../css/filter.css';
import { FilterComponent } from './FilterComponent';
import { makeVar, useQuery } from '@apollo/client';
import { GET_GENRELIST } from '../api/API_FUNCTIONS';

// function to make the filter container(for the filterbuttons)
export function FilterList() {

    const handleClick = (event: FormEvent<HTMLDivElement>) => {
        filterVar((event.target as HTMLInputElement).value);
    }

    //const {data,loading,error} = useQuery(GET_ALL_MOVIES);
    const {data,loading,error} = useQuery(GET_GENRELIST);
    let k = 3;
    
    if (loading) return <h2>Filter laster</h2>;
    
    if (data) {
    return (
        <div className='filterDiv'>
            <h2>
                Filter
            </h2>
            <div id='fuckFirefox'>
                Bruk en annen nettleser :D <a href="https://caniuse.com/css-has" target="_blank">(som støtter has selector)</a>
            </div>
            <div  className='filter' onChange={(e) => handleClick(e)}>
                <FilterComponent checked = {true}value={"Alle"} name={"Alle"} ></FilterComponent>
                {
                    data.getGenreList.map((genre: string) => {
                 
                        return <FilterComponent checked = {false}value={genre} name={genre} ></FilterComponent>
                    })
                }
            </div>
        </div>
    );}

    else {
        return <h2>Feil, er serven oppe? </h2>
    }
    
}
//filtervariable
export const filterVar = makeVar("");
