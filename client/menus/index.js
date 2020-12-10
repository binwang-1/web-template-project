export default {
  // resources_center: {
  //   group: 'demo-web',
  //   children: {
  //     'cluster': {
  //       text: 'cluster',
  //       to: '/clusters',
  //     }
  //   },
  // },
  manager_center: {
    group: "demo-web",
    children: {
      platform_configs: {
        text: "日志查询",
        to: "/journal",
      },
      license: {
        text: "表单",
        to: "/form_demo",
      },
      event_log: {},
    },
  },
};
