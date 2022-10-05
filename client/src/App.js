import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/navbar';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

// Construct our main GraphQL API endpoint
const httpLink = 
createHttpLink({
  uri: 'http://localhost:3001/graphql',
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
            <Router>
              <Navbar />
              <Routes>
                {/* signup/login routes */}
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                {/* landing page */}
                <Route path='/' element={<Home />} />
              </Routes>
            </Router>
      </ApolloProvider>
  );
}

export default App;