import * as React from "react";
import { Form, Row, Col, Input, Select } from "antd";
import { FormattedMessage } from "react-intl";
import I18n from "./I18n";

const { Option } = Select;
const { TextArea } = Input;

interface Props {
  versions: string[];
}

const BugForm: React.FC<Props> = ({ versions }) => (
  <div>
    {/* ==================================== Environment ==================================== */}
    <Form.Item>
      <Row>
        <Col span={11}>
          {/* antd version */}
          <Form.Item
            name="version"
            label={
              <FormattedMessage id="issue.version" defaultMessage="Version" />
            }
            extra={
              <FormattedMessage
                id="issue.versionHelp"
                defaultMessage="Check if the issue is reproducible with the latest stable version."
              />
            }
          >
            {/* <Select showSearch>
              {versions.map(version => (
                <Option key={version} value={version}>
                  {version}
                </Option>
              ))}
            </Select> */}
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} offset={1}>
          {/* react version */}
          <Form.Item
            name="go"
            rules={[{ required: true }]}
            label={<FormattedMessage id="issue.go" defaultMessage="Go" />}
            extra={
              <FormattedMessage
                id="issue.goHelp"
                defaultMessage="go /react / vue version..."
              />
            }
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>

    <Form.Item>
      <Row>
        {/* System */}
        <Col span={11}>
          <Form.Item
            name="system"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.system" defaultMessage="System" />
            }
            extra={
              <FormattedMessage
                id="issue.systemHelp"
                defaultMessage="System version..."
              />
            }
          >
            <Input />
          </Form.Item>
        </Col>

        {/* Browser */}
        <Col span={12} offset={1}>
          <Form.Item
            name="browser"
            rules={[{ required: true }]}
            label={
              <FormattedMessage id="issue.browser" defaultMessage="Browser" />
            }
            extra={
              <FormattedMessage
                id="issue.browserHelp"
                defaultMessage="Browser version..."
              />
            }
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>

    {/* ==================================== Reproduce ==================================== */}
    <Form.Item
      name="reproduction"
      rules={[
        {
          required: true,
          validator: async (rule, value) => {
            if (!value || value.includes("new-issue.go-admin.dev")) {
              return Promise.reject("Please provide valid reproduction url");
            }
            return Promise.resolve();
          }
        }
      ]}
      label={
        <FormattedMessage
          id="issue.reproduction"
          defaultMessage="Link to minimal reproduction"
        />
      }
      extra={<I18n id="reproHelp" />}
    >
      <Input type="url" />
    </Form.Item>

    <Form.Item
      name="steps"
      rules={[{ required: true }]}
      label={
        <FormattedMessage id="issue.steps" defaultMessage="Step to reproduce" />
      }
      extra={<I18n id="stepsHelp" />}
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="expected"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.expected"
          defaultMessage="What is expected?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="actual"
      rules={[{ required: true }]}
      label={
        <FormattedMessage
          id="issue.actually"
          defaultMessage="What is actually happening?"
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item
      name="extra"
      label={
        <FormattedMessage
          id="issue.extra"
          defaultMessage="Any additional comments?(optional)"
        />
      }
      extra={
        <FormattedMessage
          id="issue.extraHelp"
          defaultMessage="e.g. some background/context of how you ran into this bug."
        />
      }
    >
      <TextArea autoSize={{ minRows: 2 }} />
    </Form.Item>
  </div>
);

export default BugForm;
