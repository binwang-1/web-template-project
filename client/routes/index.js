// Copyright 2018 caicloud authors. All rights reserved.

import Loadable from "react-loadable";
import { Spin } from "antd";

const ClusterListPage = Loadable({
  loader: () => import("../components/ClusterList"),
  loading: Spin,
});

const ClusterDetailPage = Loadable({
  loader: () => import("../components/ClusterDetail"),
  loading: Spin,
});

export default [
  {
    path: "/clusters",
    name: "Cluster Management",
    component: ClusterListPage,
    childRoutes: [
      {
        path: "/clusters/:name",
        name: "Cluster Detail",
        component: ClusterDetailPage,
      },
    ],
  },
  {
    path: "/form_demo",
    name: "Form Demo",
    component: Loadable({
      loader: () => import("../components/FormDemo"),
      loading: Spin,
    }),
  },
  {
    path: "/journal",
    name: "Journal",
    component: Loadable({
      loader: () => import("../components/Journal"),
      loading: Spin,
    }),
  },

];
