import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Question } from '@prisma/client';
import { Context } from '../../../context';

export const QuestionType = new GraphQLObjectType<Question, Context>({
    name: 'Question',
    description: 'Karuta Question',
    fields: {
        question: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});
