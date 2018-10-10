import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

client
  .query({
    query: gql`
      {
        rates {
          value
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export default client