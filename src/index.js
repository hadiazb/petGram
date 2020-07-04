import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { App } from "./App";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://hadiaz.hadiazb.vercel.app/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
