import { GraphQLSchema } from 'graphql';
import { QueryType } from './schema/query';

export const schema: GraphQLSchema = new GraphQLSchema({
    query: QueryType,
});
