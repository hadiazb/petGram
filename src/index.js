import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

import { App } from "./App";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://hadiaz.hadiazb.vercel.app/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <Context.Provider value={{ isAuth: true }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
