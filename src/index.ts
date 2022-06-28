import express from "express";
import dotnev from "dotenv";
import { ApolloServer } from "apollo-server-express";

dotnev.config();

(async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();

  const GQLServer = new ApolloServer({});
  await GQLServer.start();

  GQLServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
})();
