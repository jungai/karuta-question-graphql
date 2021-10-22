import 'dotenv/config';
import { app, startApolloServer } from 'core_app';

const port = process.env.PORT || 4000;

(async () => {
    const localServer = await startApolloServer(app);

    localServer.listen({ port }, () => console.log(`server start on port ${port}`));
})();
