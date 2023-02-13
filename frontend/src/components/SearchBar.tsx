import { makeVar } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import '../css/searchbar.css';


//function to make a searchBar
export function SearchBar() { 
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            searchVar(searchTerm);
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    return (
        <input 
        tabIndex={0}
        data-cy='search-bar'
        placeholder='Søk på filmer...'
        type='text'
        className='searchbar'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
       
    );
}
//searched value
export const searchVar = makeVar("");