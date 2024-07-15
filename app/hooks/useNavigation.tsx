import React from "react";
import { NavItem } from "../types";

const useNavigation = () => {
  const [navItems] = React.useState<NavItem[]>([
    { type: "header", content: "React Online Store" },
    { type: "link", name: "Home", href: "/" },
    { type: "link", name: "Dashboard", href: "/dashboard" },
    { type: "link", name: "Pages", href: "/pages" },
    { type: "link", name: "Products", href: "/products" },
  ]);

  return navItems;
};

export default useNavigation;
