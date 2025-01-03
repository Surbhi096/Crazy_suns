"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";

import Users from "../assets/users.svg";
import BringYourFriends from "../assets/bringYourFriends.svg";
import "./index.css";

export default function Friends() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mr-1">
      <Button
        onClick={showDrawer}
        className="rounded-[30px] border-0 w-[40px] h-[40px] p-0 mr-1 bg-white/10 text-[#eff0f7] hover:text-[#aaadbecc]"
      >
        <Users
          style={{ fill: "currentColor", height: "22px", width: "22px" }}
        />
      </Button>
      <Drawer
        title="Friends"
        placement="right"
        onClose={onClose}
        open={open}
        classNames={{
          header: "text-center text-[#f9faff] z-20",
          wrapper: "mt-[69px] mr-[29px] w-[400px]",
          content: "bg-[rgb(26,27,40)] rounded-[8px] text-[#f9faff] h-[calc(100%_-_23px)]",
        }}
      >
        <div>
          <div
            className="w-[600px] h-[600px] top-[-236px] left-[-100px] absolute rounded-[940px] bg-[radial-gradient(50%_50%_at_50%_50%,rgb(86,6,150)_0%,rgba(26,27,40,0)_100%)] z-10
"
          />
          <div className="bg-[rgb(18,27,58)] w-full h-full absolute z-0 top-0 left-0" />
          <div className="absolute z-10 w-full flex flex-col justify-center items-center left-0">
            <div className="w-[227px] h-[227px]">
              <BringYourFriends width="227px" />
            </div>
            <div className="text-[24px] font-extrabold mt-[24px] leading-[135%]">
              Bring your friends!
            </div>
            <div className="text-[20px] text-[rgb(170,173,190)] text-center mt-2 mb-6 max-w-[300px]">
              Create a CrazySuns account to start inviting your friends.
            </div>
            <Button>Log in / Register</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
