import { FC } from "react";
import Sidebar from "./Sidebar";
import Cursor from "../Elements/Cursor";
const Layout: FC = ({ children }) => {
  return (
    <div className="flex-column" id="site-layout">
      <Sidebar />
      <Cursor />
      <main id="site-body">{children}</main>
    </div>
  );
};

export default Layout;
