/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import Home from "../assets/menu/home.svg";
import Recentplay from "../assets/menu/recentplay.svg";
import New from "../assets/menu/new.svg";
import TrendingNow from "../assets/menu/trending.svg";
import Updated from "../assets/menu/updated.svg";
import Originals from "../assets/menu/originals.svg";
import Multiplayer from "../assets/menu/multiplayer.svg";
import TwoPlayer from "../assets/menu/2players.svg";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    icon: Home,
    label: "Home",
  },
  {
    key: "recently_played",
    icon: Recentplay,
    label: "Recently played",
  },
  {
    key: "new",
    icon: New,
    label: "New",
  },
  {
    key: "trending_now",
    icon: TrendingNow,
    label: "Trending now",
  },
  {
    key: "updated",
    icon: Updated,
    label: "Updated",
  },
  {
    key: "originals",
    icon: Originals,
    label: "Originals",
  },
  {
    key: "multiplayer",
    icon: Multiplayer,
    label: "Multiplayer",
  },
  {
    key: "2Player",
    icon: TwoPlayer,
    label: "2 Player",
  },
];

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("home");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = (e: { key: string }) => {
    setSelectedKey(e.key);
  };

  return (
    <div className="w-[200px] h-screen">
      <Menu
        selectedKeys={[selectedKey]}
        onClick={handleClick}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        className="h-screen pt-4 pb-7.5"
        onMouseEnter={toggleCollapsed}
      >
        {items.map((item: any) => (
          <Menu.Item
            className={`h-[34px] bg-transparent border-l-[6px] rounded-none !pl-0 ${
              selectedKey === item.key
                ? "border-l-brand-60"
                : "border-l-transparent"
            }`}
            key={item.key}
            icon={<item.icon className="w-[60px] px-[19px] ml-[-6px]" />}
            style={{ paddingInline: "revert" }}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
