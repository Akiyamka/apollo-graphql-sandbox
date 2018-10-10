import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Currency = () => (
  <Query
    query={gql`
      {
        rates {
          value
          currency
        }
      }
  `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, value }) => (
        <div key={currency}>
          <p>{`${currency}: ${value}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Currency;
