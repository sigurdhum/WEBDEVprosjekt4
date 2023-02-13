import React from 'react';

import {MockedProvider} from '@apollo/react-testing';
import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MovieComponent} from '../../components/MovieComponent';
import { GET_ALL_MOVIES } from '../../api/API_FUNCTIONS';

const mockMovie= {
    _id: '1234',
    title: "Jurassic Park",
    genre: [
    "Action",
    "SciFi"
        ],
    release_year: 1993,
    reviews: [],
    description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    language: "English",
    length: 127,
    age: 12,
    bildeURL: "https://sfanytime-images-prod-http2.secure2.footprint.net/COVERM/44dccd99-6e24-4221-b38c-a30200e4ea13_COVERM_NO.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=379a61cb1cd3a17045b0e20841e27d45"
}

//snapshot
test('Snapshot MovieComponent', async () => {
    const tree = render(
        <MockedProvider>
    <MovieComponent 
        _id={mockMovie._id}
        title={mockMovie.title}
        tags={mockMovie.genre}
        year = {mockMovie.release_year}
        key={mockMovie._id}
        bildeURL={mockMovie.bildeURL}
        age={mockMovie.age}
        length={mockMovie.length}
        language={mockMovie.language}
        description={mockMovie.description} 
        />
    </MockedProvider>)
    expect(tree).toMatchSnapshot()
});

//unit test

test('renders movie component', () => {
    const mock = jest.spyOn(console, 'log').mockReturnValue();
    const {queryByTestId} = render(

    <MockedProvider >
        <MovieComponent  
            _id={mockMovie._id}
            title={mockMovie.title}
            tags={mockMovie.genre}
            year = {mockMovie.release_year}
            key={mockMovie._id}
            bildeURL={mockMovie.bildeURL}
            age={mockMovie.age}
            length={mockMovie.length}
            language={mockMovie.language}
            description={mockMovie.description} />
    </MockedProvider>
    );

    expect(queryByTestId("Jurassic Park")).toBeInTheDocument();
});





//'https://api.themoviedb.org/3/movie/550'