import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Answer } from '@prisma/client';
import { Context } from '../../../context';

export const AnswerType = new GraphQLObjectType<Answer, Context>({
    name: 'Answer',
    description: 'Answer for karuta question',
    fields: {
        answer: {
            type: new GraphQLNonNull(GraphQLString),
        },
        question: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});
