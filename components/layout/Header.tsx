"use client";

import { Avatar, Box, Button, Grow, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState } from "react";
import { BiFace } from "react-icons/bi";

export default function Header() {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const list = [
        {
            id: "profile",
            title: "Profile"
        },
        {
            id: "account",
            title: "Account"
        },
        {
            id: "logout",
            title: "Logout"
        }
    ]

    return (
        <div className="p-4 bg-slate-100 w-full flex justify-end">
            
            <div>
                <Button 
                     id="avatar"
                    //  aria-controls={open ? 'demo-positioned-menu' : undefined}
                    //  aria-haspopup="true"
                    //  aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                >
                    <Avatar>H</Avatar>
                </Button>
                <Menu
                    id="avatar"
                    aria-labelledby="avatar"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {list.map((item, index) => (
                        <MenuItem key={index} onClick={handleClose}>{item.title}</MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}