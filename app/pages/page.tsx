"use client";

import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Table } from "antd";
import Heading from "../components/heading";
import usePageStore from "../stores/pages";
import PageContent from "../components/page-content";
import PageActions from "../components/page-actions";
import { Page } from "../types";

type PageTableRow = Omit<Page, "id"> & { key: string };
type TableColumn = {
  title: string;
  dataIndex: string;
  key: string | number;
};

const PagePage = () => {
  const router = useRouter();
  const pageState = usePageStore();

  const [pages, setPages] = useState<PageTableRow[]>();
  const [columns] = useState<TableColumn[]>([
    { dataIndex: "name", key: "name", title: "Page name" },
    { dataIndex: "description", key: "description", title: "Page description" },
  ]);

  useEffect(() => {
    setPages(
      pageState.pages.map((page) => {
        const pageTableRow: PageTableRow = {
          key: page.id,
          title: page.title,
          description: page.description,
        };

        return pageTableRow;
      })
    );
  }, pageState.pages);

  const onNewPageClick = (e: MouseEvent<HTMLElement>): void => {
    router.push("/pages/new");
  };

  return (
    <div>
      <Heading size="large">Pages</Heading>
      <PageContent>
        <PageActions>
          <Button type="primary" onClick={onNewPageClick}>
            Create new page
          </Button>
        </PageActions>
        <Table dataSource={pages} columns={columns}></Table>
      </PageContent>
    </div>
  );
};

export default PagePage;
