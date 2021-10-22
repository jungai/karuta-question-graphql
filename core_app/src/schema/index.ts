import { GraphQLSchema } from 'graphql';
import { query } from '../graphql/query';

export const schema = new GraphQLSchema({
    query,
});
