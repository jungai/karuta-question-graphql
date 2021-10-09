import { makeSchema } from 'nexus';
import * as allTypes from '../graphql';
import path from 'path';

export const schema = makeSchema({
    types: allTypes,
    outputs: {
        schema: path.join(__dirname, '../../../generated/schema.graphql'),
        typegen: path.join(__dirname, '../../../generated/typings.ts'),
    },
});
