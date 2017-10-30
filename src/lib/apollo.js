import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { gql } from 'react-apollo';

import { getAccessToken } from './facebook';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://dvkiin.xyz/graphql',
  }),
});

let facebookToken;

function getCachedAccessToken() {
  if (!facebookToken) {
    facebookToken = getAccessToken();
  }
  return facebookToken;
}

export const login = async () => client
  .mutate({
    mutation: gql`
      mutation login($accessToken: String!) {
        login(accessToken: $accessToken) {
          name
          avatar
        }
      }
    `,
    variables: {accessToken: getCachedAccessToken()},
  })
  .then(({data: {login}}) => login);

export const myGroups = async () => client
  .query({
    query: gql`
      query myGroups($accessToken: String!) {
        myGroups(accessToken: $accessToken) {
          id
          name
          users {
            id
            name
            avatar
          }
        }
      }
    `,
    variables: {accessToken: getCachedAccessToken()},
  })
  .then(({data: {myGroups}}) => myGroups);
