import { GraphQLNonNull, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { AnswerType } from '../answer';
import { Character } from '@prisma/client';
import { Context } from '../../../context';

export const CharacterType = new GraphQLObjectType<Character, Context>({
    name: 'Character',
    description: 'Anime Character',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        answer: {
            type: new GraphQLList(AnswerType),
            resolve: async (parent, _args, ctx) => {
                const rawValue = await ctx.prisma.answer.findMany({
                    where: { cId: parent.id },
                    include: { question: true },
                });
                const data = rawValue.map((val) => ({ ...val, question: val.question.question }));

                return data;
            },
        },
    },
});
