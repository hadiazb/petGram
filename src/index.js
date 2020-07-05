import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

import { App } from "./App";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://hadiaz.hadiazb.vercel.app/graphql",
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearrer ${token} ` : '' ;
    operation.setContext({
      header: {
        authorization
      }
    })
  }, onError: error => {
    const { networkError} = error 
    if (networkError && networkError.result.code == 'ivalid_token') {
      window.sessionStorage.removeItem('token')
      window.localStorage.href = '/'
    }
  }
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
