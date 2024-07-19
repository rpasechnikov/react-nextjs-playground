"use client";

import Link from "next/link";
import useNavigation from "../../hooks/useNavigation";
import HeaderItem from "./header-item";
import LinkItem from "./link-item";

import styles from "./styles.module.scss";
import NavItemComponent from "./nav-item";
import { NavItem } from "@/app/types";

const Navbar = () => {
  const navItems = useNavigation();

  const getNavItem = (index: number, navItem: NavItem) => {
    return (
      <NavItemComponent key={index}>
        {(navItem.type === "header" && <HeaderItem {...navItem} />) ||
          (navItem.type === "link" && <LinkItem {...navItem} />)}
      </NavItemComponent>
    );
  };

  return (
    <>
      <ul className={styles.nav}>
        {navItems.map((navItem, index) => getNavItem(index, navItem))}
      </ul>
    </>
  );
};

export default Navbar;
