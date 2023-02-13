import { useReactiveVar } from '@apollo/client';
import React from 'react';
import '../css/filter.css';
import { FilterProps } from '../interfaces/Filterprops';
import { searchVar } from './SearchBar';

//function to make the filter buttons
export function FilterComponent(props: FilterProps) {
    const searchValue = useReactiveVar(searchVar);

    return (
        <label data-cy='genre-filter' className='filterButton' >
            <input
            defaultChecked ={ props.checked}
            type="radio"
            id={props.value}
            value={props.value}
            name = 'filter'    
            >
            </input>
            {props.name}
        </label>     
    );
}


