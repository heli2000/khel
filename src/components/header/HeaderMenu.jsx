import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  HomeOutlined,
  TrophyOutlined,
  FireOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HeaderMenu = () => {
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <TrophyOutlined />,
      label: "Tournaments",
    },
    {
      key: "3",
      icon: <FireOutlined />,
      label: "Trending",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Profile",
    },
  ];

  return (
    <Header className="homepage-header">
      <div className="logo">KhelBro</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Header>
  );
};

export default HeaderMenu;
