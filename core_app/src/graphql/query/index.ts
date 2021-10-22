import { GraphQLObjectType, GraphQLList } from 'graphql';
import { Context } from '../../context';
import { QuestionType } from '../question';

export const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        question: {
            type: new GraphQLList(QuestionType),
            resolve: (_parent, _args, ctx: Context) => {
                return ctx.prisma.question.findMany();
            },
        },
    },
});
