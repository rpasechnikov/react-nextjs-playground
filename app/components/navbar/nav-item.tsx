import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface NavItemProps {
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <li className={styles.navItem}>{children}</li>;
};

export default NavItem;
