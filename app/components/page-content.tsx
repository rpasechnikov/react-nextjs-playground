import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

/** Represents generic page content */
const PageContent: React.FC<PageContentProps> = (props) => {
  const { children } = props;
  return <div className="mt-5">{children}</div>;
};

export default PageContent;
