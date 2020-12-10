import React, { useState, useEffect } from "react";

import { Select, TreeSelect, Input } from "antd";
import { TimeRangeSelect, Icon } from "snowy";
import { Log } from "snowy";

import { client } from "../../graphql";
import query from './query'
import { useQuery } from "@apollo/client";


const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

export default function Journal() {
  const [time, setTime] = useState("-24h");
  const [treeData, setTreeData] = useState([]);
  const [treeValue, setTreeValue] = useState([]);

  const tProps = {
    treeData,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: "POD/容器 筛选",
    maxTagCount: 1,
    value: treeValue,
    onChange: (v) => {
      setTreeValue(v)
    }
  };

  const journalFormItemStyle = {
    style: {
      height: "40px",
      paddingTop: "4px",
      width: "200px",
      marginRight: "10px",
    },
  };

  const { data } = useQuery(query, {
    client: client,
    variables: {
      cid: "compass-stack",
      kind: "apps",
      name: "monitoring-metrics-server",
      originKind: "Release",
      partition: "kube-system"
    }
  });

  useEffect(() => {
    if (!data || !data.getServerResources || !data.getServerResources.pods) {
      setTreeData([])
    } else {
      const pods = data.getServerResources.pods
      let children = pods.map(v => {
        let name = v.metadata.name
        return {
          title: name,
          value: name,
          key: name,
          ...(v.spec && v.spec.containers && v.spec.containers.length && {
            children: v.spec.containers.map(val => {
              let subName = val.metadata.name
              let subKey = name + '-' + subName
              return {
                title: subName,
                value: subKey,
                key: subKey,
              }
            })
          })
        }
      })
      if (pods.length) {
        setTreeData([{
          title: "全部 POD/容器",
          value: "all",
          key: "all",
          children
        }])
        setTreeValue(['all'])
      } else {
        setTreeData([])
      }
    }
  }, [data])

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Select placeholder="请选择集群" {...journalFormItemStyle}>
            <Option value="compass-stack">compass-stack</Option>
          </Select>
          <Select placeholder="请选择分区" {...journalFormItemStyle}>
            <Option value="compass-stack">compass-stack</Option>
          </Select>
          <Select placeholder="请选择服务" {...journalFormItemStyle}>
            <Option value="compass-stack">compass-stack</Option>
          </Select>
          <TreeSelect {...tProps} {...journalFormItemStyle} />
          <Input
            suffix={<Icon type="search" />}
            placeholder="输入关键词搜索"
            {...journalFormItemStyle}
          />
          <TimeRangeSelect
            onChange={(v) => setTime(v)}
            value={time}
            {...journalFormItemStyle}
          />
        </div>
        <Log
          onDownload={() => {
            console.log(123);
          }}
        />
      </div>
    </>
  );
}
