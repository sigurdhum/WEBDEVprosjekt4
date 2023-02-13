import {gql} from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: String
    title: String
    release_year: Int
    genre: [String]
    reviews:[String]
    description: String
    bildeURL: String
    length: Int
    age: Int
    language: String
  }
  input MovieInput {
    title: String
    release_year: Int
    genre: [String]
    reviews:[String]
    description: String
  },
  input ReviewInput {
    _id: String
    review: String
  },
  type Query {
    getAllMovies: [Movie]
    getOneMovieByID(_id: String): Movie
    getGenreList: [String]
    getMoviesWithFilterPaginated(offset: Int!, limit: Int!, genre: String, sortDirection: Int!, searchName: String): [Movie]
  },
  type Mutation {
    addReview(_id: ID, review_text: String): Movie
  }
`;


/**
 * Input: "Create"
 * Queries: "Read"
 * Mutations: "Update" og "Delete"
 */