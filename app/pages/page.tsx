"use client";

import Heading from "../components/heading";
import usePageStore from "../stores/pages";

const PagePage = () => {
  const pageState = usePageStore();

  return (
    <div>
      <Heading size="large">Pages</Heading>
      {pageState.pages.map((page) => (
        <span>{page.title}</span>
      ))}
    </div>
  );
};

export default PagePage;
