"use client";

import { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  HomeOutlined,
  TrophyOutlined,
  FireOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SignInForm from "../user/SignInForm";
import UserOTPVerifyForm from "../user/UserOTPVerifyForm";

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
];

const HeaderMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [authDropdownVisible, setAuthDropdownVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authMode, setAuthMode] = useState("signin"); // "signin" or "signup"
  const [isOtp, setIsOtp] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setAuthDropdownVisible((prev) => !prev);
  };

  const handleAuthSubmit = (phoneNumber) => {
    // Handle phone number authentication here
    setAuthDropdownVisible(false);
    setPhoneNumber(phoneNumber);
  };

  // Close auth dropdown when clicking outside
  useEffect(() => {
    if (!authDropdownVisible) return;
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".auth-dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setAuthDropdownVisible(false);
      }
      const dropdownOTP = document.querySelector(".otp-dropdown");
      if (dropdownOTP && !dropdownOTP.contains(event.target)) {
        setIsOtp(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [authDropdownVisible]);

  const handleOtp = (phoneNumber) => {
    setIsOtp(true);
    setAuthDropdownVisible(false);
    setPhoneNumber(phoneNumber);
  };

  return (
    <Header className="homepage-header">
      <div className="header-container">
        <div className="logo">KhelBro</div>

        {!isMobile && (
          <>
            <Menu
              className="desktop-menu animated-menu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={menuItems}
            />
            <div className="auth-buttons" style={{ position: "relative" }}>
              <Button
                type="text"
                className="signin-btn"
                onClick={() => handleAuthClick("signin")}
              >
                Sign In
              </Button>
              <Button
                type="primary"
                className="signup-btn"
                onClick={() => handleAuthClick("signup")}
              >
                Sign Up
              </Button>
              {authDropdownVisible && (
                <div
                  className="auth-dropdown"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: 0,
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: 16,
                    borderRadius: 8,
                    zIndex: 1000,
                    minWidth: 220,
                  }}
                >
                  <SignInForm
                    authMode={authMode}
                    isOtp={(phoneNumber) => handleOtp(phoneNumber)}
                  />
                </div>
              )}
              {isOtp && (
                <div
                  className="otp-dropdown"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: 0,
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: 16,
                    borderRadius: 8,
                    zIndex: 1000,
                    minWidth: 220,
                  }}
                >
                  <UserOTPVerifyForm phoneNumber={phoneNumber} />
                </div>
              )}
            </div>
          </>
        )}

        {isMobile && (
          <Button
            icon={<MenuOutlined />}
            className="mobile-menu-btn"
            type="text"
            onClick={() => setDrawerVisible(true)}
          />
        )}
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          onClick={() => setDrawerVisible(false)}
        />
        <div className="drawer-auth" style={{ marginTop: 16 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <Button
              type="text"
              className="signin-btn"
              onClick={() => setAuthMode("signin")}
            >
              Sign In
            </Button>
            <Button
              type="primary"
              className="signup-btn"
              onClick={() => setAuthMode("signup")}
            >
              Sign Up
            </Button>
          </div>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: 12,
              border: "1px solid #d9d9d9",
              borderRadius: 4,
            }}
          />
          <Button
            type="primary"
            block
            onClick={handleAuthSubmit}
            disabled={!phoneNumber}
          >
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      </Drawer>
    </Header>
  );
};

export default HeaderMenu;
