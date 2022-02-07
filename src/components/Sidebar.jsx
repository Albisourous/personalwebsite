import myLogo from "../images/sidebar.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function sidebarClick(e) {
  window.location = "/";
}

function CornerPiece(props) {
  return <div onClick={sidebarClick}>{props.value}</div>;
}

const Sidebar = () => {
  return (
    <div className="alignright">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<myLogo />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<myLogo />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
