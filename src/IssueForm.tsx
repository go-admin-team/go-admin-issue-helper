import * as React from "react";
import { Form, Row, Col, Input, Select, Button, Radio } from "antd";
import { FormattedMessage } from "react-intl";
import { BugOutlined } from "@ant-design/icons";
import { state } from "reactive.macro";
import BugForm from "./BugForm";
import FeatureForm from "./FeatureForm";
import PreviewModal from "./PreviewModal";
import ReproModal from "./ReproModal";
import createPreview from "./createPreview";
import useSimilarIssues from "./hooks/useSimilarIssues";
import useVersions from "./hooks/useVersions";
import styles from "./IssueForm.module.scss";

const { Option } = Select;

const params: any = window.location.search
  .slice(1)
  .split("&")
  .reduce((acc, param) => {
    const [key, value] = param.split("=");
    return { ...acc, [key]: value };
  }, {}); // tslint:disable-line

if (!params.repo) {
  params.repo = "go-admin";
}

const IssueForm: React.FC<{}> = () => {
  let reproModal = state(false);

  const [form] = Form.useForm();

  const getContent = React.useCallback(
    (type: string) => createPreview(type, form.getFieldsValue()),
    [form]
  );

  const [content, setContent] = React.useState("");
  const [preview, setPreview] = React.useState(false);
  const triggerPreview = (newPreview: boolean) => {
    setContent(getContent(form.getFieldValue("type")));
    setPreview(newPreview);
  };

  const formRef = React.useRef<HTMLDivElement | null>(null);
  const { similarIssues, searchIssues } = useSimilarIssues();
  // const { repoVersions, fetchVersions } = useVersions();

  const bindModalHandler = React.useCallback(() => {
    formRef.current!.addEventListener("click", (e: Event) => {
      if ((e.target as any).getAttribute("href") === "#repro-modal") {
        e.preventDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        reproModal = true;
      }
    });
  }, []);

  // Load form data from localStorage
  const restoreValues = React.useCallback(
    (omitFields: Array<string> = []) => {
      const cache = localStorage.getItem("form");
      if (cache) {
        const values = JSON.parse(cache);
        const keys = Object.keys(values);

        // Remove unless fields
        omitFields.forEach(key => {
          delete values[key];
        });

        if (values.type) {
          form.setFieldsValue({
            type: values.type
          });
        }

        // Next frame (IE 9 not support RAF)
        setTimeout(() => {
          // Remove useless value
          const currentValues = form.getFieldsValue();
          keys.forEach(key => {
            if (!(key in currentValues)) {
              delete values[key];
            }
          });
          form.setFieldsValue(values);
        }, 100);
      }
    },
    [form]
  );

  // const handleRepoChange = React.useCallback(
  //   (repo: string) => {
  //     if (!repoVersions[repo]) {
  //       fetchVersions(repo);
  //     }
  //     form.setFieldsValue({
  //       version: repoVersions?.[repo]?.[0]
  //     });
  //   },
  //   [form, fetchVersions, repoVersions]
  // );

  const handleTypeChange = React.useCallback(() => {
    restoreValues(["type"]);
  }, [restoreValues]);

  const handleTitleBlur = React.useCallback(() => {
    const repo = form.getFieldValue("repo");
    const title = form.getFieldValue("title");
    searchIssues(repo, title);
  }, [form, searchIssues]);

  const handleCreate = React.useCallback(() => {
    const issueType = form.getFieldValue("type");
    const repo = form.getFieldValue("repo");
    const title = encodeURIComponent(form.getFieldValue("title")).replace(
      /%2B/gi,
      "+"
    );
    const withMarker = `${getContent(
      issueType
    )}\n\n<!-- generated by go-admin-issue-helper. DO NOT REMOVE -->`;
    const body = encodeURIComponent(withMarker).replace(/%2B/gi, "+");
    const label =
      issueType === "feature" ? "&labels=💡%20Feature%20Request" : "";

    localStorage.clear();

    window.open(
      `https://github.com/go-admin-team/${repo}/issues/new?title=${title}&body=${body}${label}`
    );
  }, [form, getContent]);

  React.useEffect(() => {
    // fetchVersions(params.repo);
    bindModalHandler();
    restoreValues();
  }, [bindModalHandler, restoreValues]);

  const repo = form.getFieldValue("repo");
  // const versions = repoVersions[repo] || [];

  const similarIssuesList = (
    <Form.Item className={styles.similar}>
      <h3>Similar Issues:</h3>
      <ul>
        {similarIssues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noreferrer noopener">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </Form.Item>
  );

  return (
    <div ref={formRef}>
      <Form
        form={form}
        layout="vertical"
        size="large"
        initialValues={{
          repo: params.repo,
          type: "bug"
          // version: versions[0]
        }}
        onFinish={() => {
          triggerPreview(true);
        }}
        onValuesChange={(_, values) => {
          let preForm = {};
          try {
            preForm = JSON.parse(localStorage.getItem("form") as string) || {};
          } catch (err) {
            // Do nothing
          }
          const cacheForm: any = {
            ...preForm
          };
          Object.keys(values).forEach(key => {
            if (values[key]) {
              cacheForm[key] = values[key];
            }
          });
          localStorage.setItem("form", JSON.stringify(cacheForm, null, 2));
        }}
      >
        <PreviewModal
          visible={preview}
          content={content}
          onCancel={() => {
            triggerPreview(false);
          }}
          onCreate={handleCreate}
        />
        <ReproModal
          visible={reproModal}
          onCancel={() => (reproModal = false)}
        />
        <Row>
          <Col span={11}>
            <Form.Item
              name="repo"
              label={
                <FormattedMessage
                  id="issue.repo"
                  defaultMessage="I am opening an issue for"
                />
              }
              extra={
                <FormattedMessage
                  id="issue.repoHelp"
                  defaultMessage="Please make sure to file the issue at appropriate repo."
                />
              }
            >
              <Select>
                <Option value="go-admin">go-admin</Option>
                <Option value="go-admin-ui">go-admin-ui</Option>
                <Option value="go-admin-core">go-admin-core</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12} offset={1}>
            <Form.Item
              name="type"
              label={
                <FormattedMessage id="issue.type" defaultMessage="This is a" />
              }
            >
              <Radio.Group
                onChange={handleTypeChange}
                className={styles.radioGroup}
              >
                <Radio.Button value="bug">
                  <FormattedMessage
                    id="issue.type.bug"
                    defaultMessage="Bug Report"
                  />
                </Radio.Button>
                <Radio.Button value="feature">
                  <FormattedMessage
                    id="issue.type.feature"
                    defaultMessage="Feature Request"
                  />
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="title"
          label={<FormattedMessage id="issue.title" defaultMessage="Title" />}
          rules={[{ required: true }]}
        >
          <Input onBlur={handleTitleBlur} />
        </Form.Item>
        {similarIssues.length > 0 && similarIssuesList}
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {() =>
            form.getFieldValue("type") === "feature" ? (
              <FeatureForm />
            ) : (
              <BugForm versions={[]} />
            )
          }
        </Form.Item>
        <Form.Item>
          <div className={styles.submitBtn}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              icon={<BugOutlined />}
            >
              <FormattedMessage id="issue.preview" defaultMessage="Preview" />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default IssueForm;
