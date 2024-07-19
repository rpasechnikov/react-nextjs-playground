"use client";

import { MouseEvent } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const NewPageButton = () => {
  const router = useRouter();

  const onNewPageClick = (e: MouseEvent<HTMLElement>): void => {
    router.push("/pages/new");
  };

  return (
    <Button type="primary" onClick={onNewPageClick}>
      Create new page
    </Button>
  );
};

export default NewPageButton;
