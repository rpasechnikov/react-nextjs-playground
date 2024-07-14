import { ReactElement } from "react";

type NavItemBase = {
  children?: NavItem[];
};

export type NavItem = HeaderNavItem | LinkNavItem;

export type HeaderNavItem = NavItemBase & {
  content: string | ReactElement;
  type: "header";
};

export type LinkNavItem = NavItemBase & {
  name: string;
  type: "link";
  href: string;
};
