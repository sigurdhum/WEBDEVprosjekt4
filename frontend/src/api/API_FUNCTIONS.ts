import { gql, useMutation, useQuery, } from "@apollo/client";

export const GET_GENRELIST = gql`
query GetGenreList {
    getGenreList
}`;

// brukt i InputReview
export const ADD_REVIEW = gql`
mutation Mutation($id: ID, $reviewText: String) {
  addReview(_id: $id, review_text: $reviewText) {
    reviews
  }
}
`;

// brukt i reviewHolder
export const GET_SINGLE_MOVIE = gql`
query GetOneMovieByID($id: String) {
  getOneMovieByID(_id: $id) {
    reviews
  }
}
`;


export const FIND_MOVIES = gql`
query findMoviesByGenre($offset: Int!, $limit: Int!, $genre: String!, $sortDirection: Int!, $searchName: String!) {
    getMoviesWithFilterPaginated(offset: $offset, limit: $limit, genre: $genre, sortDirection: $sortDirection, searchName : $searchName) {
        _id
        title
        release_year
        bildeURL
        length
        age
        genre
        description
        language
    }
}`;