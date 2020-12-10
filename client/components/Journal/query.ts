import { gql } from "@apollo/client";

export default gql`
  query getServerResources(
    $cid: String!
    $partition: String!
    $kind: String!
    $name: String!
    $originKind: String
  ) {
    getServerResources(
      cid: $cid
      partition: $partition
      kind: $kind
      name: $name
      originKind: $originKind
    )
  }
`;
