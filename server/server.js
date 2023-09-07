const express = require('express');
const path = require('path');
const {authMiddleware} = require('./utils/auth');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    })
  }

  app.use('/graphql', expressMiddleware(server
  , {context: authMiddleware}
  ));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening at port: ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphQL`)
    });
  });

}

startApolloServer();
// app.use(routes);