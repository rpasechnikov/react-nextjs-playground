import { HeaderNavItem } from "@/app/types";
import styles from "./styles.module.scss";

const HeaderItem: React.FC<HeaderNavItem> = (props) => {
  const { name } = props;

  return <div className={styles.headerItem}>{name}</div>;
};

export default HeaderItem;
