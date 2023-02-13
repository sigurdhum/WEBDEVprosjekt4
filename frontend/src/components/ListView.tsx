import React, { useEffect } from 'react';
import clsx from 'clsx';
import '../css/list.css';
import { MovieComponent } from './MovieComponent';
import { LoadingMovieComponent } from './LoadingMovieComponent';
import { useRef } from 'react';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { useState } from 'react';
import {Waypoint} from 'react-waypoint';
import { filterVar } from './FilterList';
import { searchVar } from './SearchBar';
import { FIND_MOVIES } from '../api/API_FUNCTIONS';



let PEKER = 7;
const MOVIES_PER_PAGE = 7;

//funksjon for hele loisten med alle filmene filtrert og ufiltrert
export function ListView() {
    //function to refetch the movies
    const refresh = () => {
        setSortparam(sortparam == 1 ? -1 : 1);
        refetch();
    }

    // Henetet fra https://bobbyhadz.com/blog/react-capitalize-first-letter
    const capitalizeFirstLowercaseRest = (str:String) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const noResults = () => {
        return (
            <p>
                Det er ingen flere filmer.<br />
                Søk på noe annet enn <b>{capitalizeFirstLowercaseRest(searchValue)}</b> 
                {searchValue != "" ? " og " : ""} 
                {genreValue != "" ? <b>{genreValue}</b> : <b>Alle</b>}
            </p>
        );
    }

    
    
    const [sortparam, setSortparam] = useState(-1);
    const genreValue = useReactiveVar(filterVar);
    const searchValue = useReactiveVar(searchVar);
    const triggerRef = useRef<HTMLInputElement>(null);

    const {data, loading, fetchMore, refetch} = useQuery(FIND_MOVIES,
         { variables: 
            {offset: 0, limit: MOVIES_PER_PAGE, genre: genreValue, searchName: searchValue, sortDirection: sortparam} , notifyOnNetworkStatusChange: true});

    useEffect(() => {
        refetch({offset: 0, limit: MOVIES_PER_PAGE, genre: genreValue, searchName: searchValue, sortDirection: sortparam});
        PEKER = 7;
    }, [genreValue, searchValue, sortparam, refetch]);

    if((data == undefined) || (data.getMoviesWithFilterPaginated == undefined)) {
        return (
            <div className='listDiv'>
                <h2 className='title sortTitle'>
                    Sorter
                </h2>
                <div className='inline'>
                    <button id="sortbtn"
                        onClick={() => refresh()}
                    >Vis {sortparam == -1 ? "eldst" : "nyest"} </button>
                </div>
                <h2>
                    Ingen data å vise... er serveren oppe?
                </h2>
                <LoadingMovieComponent/>
            </div>);
    }else{
        return (
            <div className='listDiv'>
                <h2 className='title sortTitle'>
                    Sorter
                </h2>
                <div className='inline'>
                    <button id="sortbtn"
                        tabIndex={0}
                        onClick={() => refresh()}
                    >Vis {sortparam == -1 ? "eldst" : "nyest"} </button>
                </div>
                <h2 className='title'>
                    Filmer
                </h2>
                <div className='list' id='mainContent'>
                    {
                        data.getMoviesWithFilterPaginated.map((movie: any) => {
                            return (
                                <MovieComponent
                                    
                                    _id={movie._id}
                                    title={movie.title}
                                    tags={movie.genre}
                                    year={movie.release_year}
                                    key={movie.id}
                                    bildeURL={movie.bildeURL}
                                    age={movie.age}
                                    length={movie.length}
                                    language={movie.language}
                                    description={movie.description}
                                />
                            );
                        })    
                    }
                    
                    <div data-cy='scrollable-item' ref={triggerRef} id="hello" className={clsx('trigger', {visible: loading})} tabIndex={0}>
                            <React.Fragment key={"helo"}>
                                <Waypoint onEnter={()=> {
                                    fetchMore({
                                        variables: {
                                            offset: PEKER,
                                            limit: MOVIES_PER_PAGE+1
                                        },updateQuery: (prev, { fetchMoreResult }) => {
                                            PEKER += MOVIES_PER_PAGE+1;
                                            if (!fetchMoreResult) return prev;
                                            if (data.getMoviesWithFilterPaginated.length == 0) return;
                                            return {
                                                getMoviesWithFilterPaginated : [...prev.getMoviesWithFilterPaginated, ...fetchMoreResult.getMoviesWithFilterPaginated]
                                            }
                                        }
                                    })
                                }}>
                                    {
                                        loading ? <LoadingMovieComponent/> : noResults()
                                    }
                                </Waypoint>
                            </React.Fragment>
                    </div>
                </div>   
            </div>
        );
    }
    
};

