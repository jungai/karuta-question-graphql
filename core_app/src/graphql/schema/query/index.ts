import { GraphQLList, GraphQLObjectType } from 'graphql';
import { Context } from '../../../context';
import { QuestionType } from '../question';
import { CharacterType } from '../character';

// TODO: fix type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QueryType = new GraphQLObjectType<any, Context>({
    name: 'Query',
    fields: {
        question: {
            type: new GraphQLList(QuestionType),
            resolve: async (_parent, _args, ctx) => {
                const val = await ctx.prisma.question.findMany();

                return val;
            },
        },
        character: {
            type: new GraphQLList(CharacterType),
            resolve: async (_parent, _args, ctx) => {
                const val = await ctx.prisma.character.findMany();

                return val;
            },
        },
    },
});
