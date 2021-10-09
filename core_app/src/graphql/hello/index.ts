import { objectType } from 'nexus';

export const Hello = objectType({
    name: 'Hello',
    definition(t) {
        t.string('msg', { deprecation: 'message your code-first eiei' });
    },
});
