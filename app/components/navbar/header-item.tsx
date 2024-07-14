import { HeaderNavItem } from "@/app/types";
import styles from "./styles.module.scss";

const HeaderItem: React.FC<HeaderNavItem> = (props) => {
  const { content } = props;

  return <div className={styles.headerItem}>{content}</div>;
};

export default HeaderItem;
