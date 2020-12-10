// import gql from 'graphql-tag';
import { gql } from "@apollo/client";

export default gql`
  query {
    clusterCollection {
      total
      nodes {
        id
        displayName
        partitionCollection
      }
    }
  }
`;
