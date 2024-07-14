"use client";

import Link from "next/link";
import useNavigation from "../../hooks/useNavigation";
import HeaderItem from "./header-item";
import LinkItem from "./link-item";

import styles from "./styles.module.scss";
import NavItem from "./nav-item";

const Navbar = () => {
  const navItems = useNavigation();

  <Link href="/dashboard">Dashboard</Link>;
  return (
    <ul className={styles.nav}>
      {navItems.map((navItem) => (
        <NavItem>
          {(navItem.type === "header" && <HeaderItem {...navItem} />) ||
            (navItem.type === "link" && <LinkItem {...navItem} />)}
        </NavItem>
      ))}
    </ul>
  );
};

export default Navbar;
