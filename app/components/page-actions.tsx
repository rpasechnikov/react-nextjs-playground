import { Flex, Space } from "antd";
import { ReactNode } from "react";

type PageActionsProps = {
  children: ReactNode;
};

/** Represents page-wide operations/actions, which should go inside PageContent */
const PageActions: React.FC<PageActionsProps> = (props) => {
  const { children } = props;

  return (
    <Flex className="mb-2" justify="flex-end" gap="small">
      {children}
    </Flex>
  );
};

export default PageActions;
