import React from "react";
// import { Query, withApollo } from 'react-apollo';

import { useQuery, gql } from "@apollo/client";

import { Spin } from "antd";
import { Link } from "react-router";
import query from "./query";
import { client } from "../../graphql";

export default function ClusterList({ children }) {
  // return <p>...</p>
  if (children) {
    return children;
  }

  const { loading, error, data } = useQuery(query, { client: client });
  console.log(loading, error, data);
  if (loading) {
    return <Spin />;
  }
  if (error) return <p>Error :(</p>;

  return (
    <>
      cluster list:
      <ol>
        {data.clusterCollection.nodes.map(({ name, phase }) => (
          <li key={name}>
            {name}, status: {phase} <Link to={`/clusters/${name}`}>detail</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
