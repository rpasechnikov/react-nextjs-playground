import { Table } from "antd";
import Heading from "../components/heading";
import PageContent from "../components/page-content";
import PageActions from "../components/page-actions";
import NewPageButton from "./new-page-button";

import db from "@/lib/db";

type TableColumn = {
  title: string;
  dataIndex: string;
  key: string | number;
};

const PagePage = async () => {
  const pages = await db.page.findMany();

  const columns: TableColumn[] = [
    { dataIndex: "title", key: "title", title: "Page title" },
    { dataIndex: "description", key: "description", title: "Page description" },
  ];

  return (
    <div>
      <Heading size="large">Pages</Heading>
      <PageContent>
        <PageActions>
          <NewPageButton />
        </PageActions>
        <Table dataSource={pages} columns={columns}></Table>
      </PageContent>
    </div>
  );
};

export default PagePage;
