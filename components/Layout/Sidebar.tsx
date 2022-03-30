import React, { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <ProSidebar>
        <SidebarHeader>
          <div className="logotext">
            <Image src="/logo.png" alt="AS" width="100" height="100" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<FaList />}>Category</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
