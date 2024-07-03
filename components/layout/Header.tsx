"use client";

import { Avatar, Button, Dropdown, Menu, MenuProps, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
import { BiFace } from "react-icons/bi";
import useAuth from "@/hooks/use-auth";
import { useStore } from "@/store";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {

    const { logout } = useAuth()
    const setShowSideBar = useStore((state:any) => state.setShowSideBar)
    const showSideBar = useStore((state:any) => state.showSideBar)

    const screenSize = useStore((state:any) => state.screenSize)
    
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Profile
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Account
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <button onClick={() => logout()}>
              Logout
            </button>
          ),
        }
      ];
    return (
        <div className="bg-slate-100 h-16 w-full flex items-center justify-between md:justify-end px-4">
            {
              screenSize.width <= 640 &&
              <GiHamburgerMenu onClick={() => setShowSideBar(true)}/>
            }
            <div>
                <Dropdown className="cursor-pointer" menu={{ items }}  trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}