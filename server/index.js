const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });

console.log(MONGODB);
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDB Connected");
        app.listen({ port: 4000 }, () =>
            console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
        );
    }); 
