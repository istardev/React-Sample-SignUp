import React from 'react';
import { ApolloProvider } from '@apollo/react-components';
import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm/index';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <InputForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
