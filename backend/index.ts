import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';
import { debug } from 'console';
dotenv.config();


const server = new ApolloServer({
    typeDefs,
    resolvers,  
});


mongoose.connect(
  process.env.ATLAS_URI!
)
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: process.env.PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch(err => console.log(err));