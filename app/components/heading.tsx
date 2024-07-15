import { ReactNode } from "react";

type HeadingProps = {
  size: "large" | "medium" | "small";
  children: ReactNode;
};

const Heading: React.FC<HeadingProps> = (props) => {
  const { size, children } = props;

  if (size === "large") {
    return (
      <h1 className="text-3xl font-semibold text-center capitalize">
        {children}
      </h1>
    );
  }

  if (size === "medium") {
    return <h2 className="text-xl font-medium text-center">{children}</h2>;
  }

  if (size === "small") {
    return <h3 className="text-lg text-center">{children}</h3>;
  }

  return <>{children}</>;
};

export default Heading;
