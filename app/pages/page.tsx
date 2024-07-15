"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, Table } from "antd";
import Heading from "../components/heading";
import usePageStore from "../stores/pages";
import PageContent from "../components/page-content";
import PageActions from "../components/page-actions";

const PagePage = () => {
  const router = useRouter();
  const pageState = usePageStore();

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
        <Table></Table>
      </PageContent>
    </div>
  );
};

export default PagePage;
