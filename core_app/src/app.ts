import express, { Express } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import { schema } from './graphql';
import { context } from './context';

export function setupCor(e: Express) {
    return e.use(cors());
}

// upper this is express middleware
export const app = [setupCor].reduce((e, middleware) => middleware(e), express());

export async function startApolloServer(app: Express) {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context,
    });

    await server.start();
    server.applyMiddleware({ app, path: '/questions' });

    return httpServer;
}
