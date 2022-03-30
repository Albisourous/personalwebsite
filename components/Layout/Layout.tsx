import { FC } from "react";
import Sidebar from "./Sidebar";

const Layout: FC = ({ children }) => {
  return (
    <div className="flex-column" id="site-layout">
      <Sidebar />
      <main id="site-body">{children}</main>
    </div>
  );
};

export default Layout;
