"use client";

import Heading from "@/app/components/heading";
import usePageStore from "@/app/stores/pages";

const NewPagePage = () => {
  const pageState = usePageStore();

  return (
    <div>
      <Heading size="large">New page</Heading>
    </div>
  );
};

export default NewPagePage;
