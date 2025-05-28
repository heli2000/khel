"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    if (pathname.startsWith("/admin/dashboard")) {
      setSelectedKey(["2"]);
    } else if (pathname.startsWith("/admin/users")) {
      setSelectedKey(["3"]);
    } else if (pathname.startsWith("/admin/tournaments")) {
      setSelectedKey(["4"]);
    } else if (pathname === "/") {
      setSelectedKey(["1"]);
    }
  }, [pathname]);

  const menuItems = [
   
    { label: <Link href="/admin/dashboard">Dashboard</Link>, key: 2 },
    { label: <Link href="/admin/users">Users</Link>, key: 3 },
    { type: "divider" },
    { label: <Link href="/admin/tournaments">Tournaments</Link>, key: 4 },
  ];
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}