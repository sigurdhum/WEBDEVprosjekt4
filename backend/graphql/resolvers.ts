import mongoose, { Types } from 'mongoose';
import { movieSchema } from './schemas';

const Movie = mongoose.model('Movie', movieSchema);


export const resolvers = {
    Query: {
        getAllMovies: async () => {
            return await Movie.find()
                .sort({ release_year: 'desc' })
                .exec();
        },
        getGenreList: async () => {
            console.log(await Movie
                .distinct('genre')
                .exec())
            return await Movie
                .distinct('genre')
                .exec();
        },
        getOneMovieByID: async (parent: any, args: { _id: string }) => {
            const ObjectId = new mongoose.Types.ObjectId(args._id);
            return await Movie.findById(ObjectId);

        },
        getMoviesWithFilterPaginated: async (parent: any, args:any) => {
            return await (Movie.find({title: {$regex: args.searchName, $options: 'i'}, genre: args.genre == "" || args.genre == "Alle" ? {$exists: true} : args.genre}))
                .sort({release_year: args.sortDirection, _id: -1})
                .skip(parseInt(args.offset.toString()))
                .limit(parseInt(args.limit.toString()))
        },
       
    },
    Mutation: {
        //brukt i InputReview
        addReview: async (parent: any, args: { _id: string, review_text: String }) => {
            const ObjectId = new mongoose.Types.ObjectId(args._id);
            return await Movie.findOneAndUpdate({ _id: ObjectId }, { $push: { reviews: args.review_text } }, { new: true });

        },

    }
}
