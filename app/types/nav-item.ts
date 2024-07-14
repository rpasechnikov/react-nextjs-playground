type NavItemBase = {
  name: string;
  children?: NavItem[];
};

export type NavItem = HeaderNavItem | LinkNavItem;

export type HeaderNavItem = NavItemBase & {
  type: "header";
};
export type LinkNavItem = NavItemBase & {
  type: "link";
  href: string;
};
