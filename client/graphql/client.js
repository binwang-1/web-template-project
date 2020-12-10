/**
 * TODO: use caicloud-apollo-client-preset or caicloud-graphql-boost instead.
 */
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from "apollo-link-http";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: `api/graphql`,
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

export default client;
