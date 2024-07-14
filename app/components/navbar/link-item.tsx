import { LinkNavItem } from "@/app/types";
import styles from "./styles.module.scss";
import Link from "next/link";

const LinkItem: React.FC<LinkNavItem> = (props) => {
  const { name, href } = props;

  return (
    <Link className={styles.linkItem} href={href}>
      {name}
    </Link>
  );
};

export default LinkItem;
