import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';

export const QuestionType = new GraphQLObjectType({
    name: 'Question',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'unique id for each question',
        },
        question: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'karuta question',
        },
    },
});
