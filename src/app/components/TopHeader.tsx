"use client";
import React, { useState } from "react";
import { Button } from "antd";

import MenuUnfoldOutlined from "../assets/menuUnfoldOutlined.svg";
import MenuFoldOutlined from "../assets/menuFoldOutlined.svg";
import Logo from "../assets/logo.svg";
import LogoText from "../assets/logoText.svg";
import Notification from "../assets/notification.svg";
import Like from "../assets/like.svg";

import Friends from "./Friends";
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-16 bg-[#212233]/90 backdrop-blur-sm shadow-md flex justify-between items-center flex-wrap z-12">
      <div className="flex flex-row pl-2 items-center pr-4">
        <Button
          onClick={toggleCollapsed}
          className="flex justify-center items-center text-[#EFF0F7] bg-transparent w-12 h-12 rounded-[30px] font-extrabold text-base box-border p-0 mr-1 transition-all duration-250 ease-in-out border-0 !hover:text-[#EFF0F7] !hover:bg-transparent"
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              style={{ fill: "currentColor", height: "24px", width: "24px" }}
            />
          ) : (
            <MenuFoldOutlined
              style={{ fill: "currentColor", height: "24px", width: "24px" }}
            />
          )}
        </Button>
        <div className="flex justify-start m-0 mx-2">
          <Logo className="fill-white h-[35px] mr-2" />
          <LogoText className="fill-white h-[35px] pt-[3px]" />
        </div>
      </div>
      <div></div>
      <div className="flex">
        <Friends />
        <Button className="rounded-[30px] border-0 w-[40px] h-[40px] p-0 mr-1 bg-white/10 text-[#eff0f7] hover:text-[#aaadbecc]">
          <Notification
            style={{ fill: "currentColor", height: "22px", width: "22px" }}
          />
        </Button>
        <Button className="rounded-[30px] border-0 w-[40px] h-[40px] p-0 mr-1 bg-white/10 text-[#eff0f7] hover:text-[#aaadbecc]">
          <Like
            style={{ fill: "currentColor", height: "22px", width: "22px" }}
          />
        </Button>
        <Button className="rounded-[30px] border-0 flex items-center font-extrabold text-[16px] py-[8px] px-[16px] h-[40px] bg-brand-100 text-white hover:bg-brand-80">
          Log in
        </Button>
      </div>
    </div>
  );
}
