import React, { useState } from "react";

import { Button, Steps, Tabs, message } from "antd";
import { Form } from "snowy/pro";

const { Step } = Steps;
const { TabPane } = Tabs;
const { Field } = Form;

function step(props) {
  return (
    <div>
      <Steps
        style={{ width: "400px" }}
        size="small"
        current={props.current}
        onChange={props.onStepChange}
      >
        <Step title="步骤一" />
        <Step title="步骤二" />
      </Steps>
    </div>
  );
}

const divider = (
  <div
    style={{
      height: 0,
      margin: "16px -24px",
      borderTop: "1px solid #DEE1E7",
    }}
  ></div>
);

function form(props) {
  return (
    <Form
      affixButtons={true}
      initialValues={{
        title1: "caicloud.rar",
      }}
      onSubmit={props.onSubmit}
      render={(p) => (
        <form>
          {step({
            current: props.current,
            onStepChange: props.onStepChange,
          })}
          {divider}
          {props.current === 0 && (
            <>
              <Field
                required
                label="名称名称名称名称名称名称名称名称名称名称"
                name="name"
                component="input"
                labelTooltip="这是名称"
                tips="支持中文和特殊符号，长度限制 2-32 个字符。"
              />
              <Field
                label="描述"
                name="description"
                component="textArea"
                labelTooltip="这是备注"
                placeholder="请输入备注"
              />
              <Field label="标题" name="title1" component="input" />
            </>
          )}
          {props.current === 1 && (
            <>
              <Field label="标题" name="title2" component="input" />
              <Field
                label="标题标题标题标题标题"
                name="title3"
                component="input"
              />
              <Field label="标题" name="title4" component="input" />
              <Field
                label="标题标题标题标题标题"
                name="title5"
                component="input"
              />
            </>
          )}
          {divider}
          <div style={{ height: "48px" }}>
            <div>
              <Button
                className="c-btn-form"
                disabled={props.current === 0}
                onClick={props.onPrev}
              >
                上一步
              </Button>
              <Button
                type="primary"
                className="c-btn-form"
                onClick={p.handleSubmit}
              >
                完成
              </Button>
              <Button
                type="primary"
                className="c-btn-form"
                disabled={props.current === props.maxStep}
                onClick={props.onNext}
              >
                下一步
              </Button>
              <Button
                className="c-btn-form c-btn-gray"
                onClick={props.onCancel}
              >
                取消
              </Button>
            </div>
          </div>
        </form>
      )}
    />
  );
}

export default function FormDemo() {
  const [current, setCurrent] = useState(0);
  const maxStep = 1;
  return (
    <>
      <Tabs defaultActiveKey="2">
        <TabPane tab="使用主机搭建集群" key="1">
          Tab 1
        </TabPane>
        <TabPane tab="托管集群" key="2">
          {form({
            current,
            maxStep,
            onStepChange: (curr) => {
              setCurrent(curr);
            },
            onPrev: () => {
              setCurrent(Math.max(0, current - 1));
            },
            onNext: () => {
              setCurrent(Math.min(maxStep, current + 1));
            },
            onSubmit: (v) => {
              message.info(JSON.stringify(v));
            },
            onCancel: () => {
              message.info("onCancel");
            },
          })}
        </TabPane>
      </Tabs>
    </>
  );
}
