import React from "react";
import { Layout, Avatar, Dropdown, Button } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";

const menuItems = [
  {
    key: "profile",
    icon: <SettingOutlined />,
    label: "Profile Settings",
  },
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

const toggleCollapsed = () => {
  // handle sidebar collapse here
};

const AdminHeader = () => (
  <Layout className="layout">
    <div
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/admin" className="ninjadash-logo top-menu" style={{ marginRight: 16 }}>
          {/* Place your logo here */}
          <span style={{ fontWeight: 700, fontSize: 18 }}>Admin Panel</span>
        </Link>
        
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* You can add more menu/search here if needed */}
        <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            style={{ backgroundColor: "#1890ff", cursor: "pointer", marginLeft: 16 }}
            icon={<UserOutlined />}
            size="large"
          />
        </Dropdown>
      </div>
    </div>
  </Layout>
);

export default AdminHeader;
