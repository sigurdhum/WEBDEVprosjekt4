import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import TestRenderer from 'react-test-renderer';


//import {GET_ALL_MOVIES} from '../..//queries';
import { cleanup, render, screen } from "@testing-library/react";
import { ListView } from "../../components/ListView";
import Data from '../../data.json';
import { MovieComponent } from "../../components/MovieComponent";
import { GET_ALL_MOVIES } from "../../api/API_FUNCTIONS";

const mockMovie = [{
    request:{
        query: GET_ALL_MOVIES,
    },
    result: {
        data:{
            getAllMovies: [
                {_id: '1234',
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
                },
                {
                _id: '12345',
                title: "The Purge",
                genre: [
                    "SciFi",
                    "Thriller"
                  ],
                release_year: 2013,
                reviews: [],
                description: "A wealthy family is held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legal.",
                language: "English",
                length: 85,
                age: 15,
                bildeURL: "https://sfanytime-images-prod-http2.secure2.footprint.net/COVERM/COVERM_46a980d3-97d8-4861-ade7-d1d8ce32a246_01.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=e5a5e89c3f3653b07787387e0e61c038"
                }
            ]
        }
    }
}]

//snapshot
test('Snapshot ListView', async () => {
    const tree = render(
        <MockedProvider mocks={mockMovie} addTypename = {false}>
            <ListView />
        </MockedProvider>)
    expect(tree).toMatchSnapshot()
});



afterEach(cleanup);

// fra dummydata
const filmer = Object.keys(Data.data).map((key,i) => Data.data[i]); // på movieform
//mocktest
describe ("Test ListView", () => {
    test("renders ListView", async () => {
        render(
                <MockedProvider mocks={mockMovie} addTypename = {false}>
                    <ListView />
                </MockedProvider>
        )
        
        expect(await screen.getByText("Jurassic Park")).toBeInTheDocument();
        expect(await screen.getByText("Action")).toBeInTheDocument();
    });
    
});










