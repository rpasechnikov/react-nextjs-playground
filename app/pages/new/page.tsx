"use client";

import Heading from "@/app/components/heading";
import PageContent from "@/app/components/page-content";
import usePageStore from "@/app/stores/pages";
import { NewPage } from "@/app/types";
import { Button, Form, FormProps, Input } from "antd";
import { useRouter } from "next/navigation";

const NewPagePage = () => {
  const pageState = usePageStore();
  const router = useRouter();

  const onFinish: FormProps<NewPage>["onFinish"] = async (values) => {
    const response = await fetch("/api/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      router.push("/pages");
    } else {
      console.log(">>> Failed to create a page due to: ", response.statusText);
    }
  };

  const onFinishFailed: FormProps<NewPage>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Heading size="large">New page</Heading>
      <PageContent>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<NewPage>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input page title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<NewPage>
            label="Description"
            name="description"
            rules={[{ message: "Please input page description!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </PageContent>
    </div>
  );
};

export default NewPagePage;
