import React, { FC } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import Header from "./Header"
import Footer from "./Footer"


const Layout: FC = ({ children }) => {
    const router = useRouter();

    const metaData = {
        
    }
    return (
        <div className="flex-column" id="site-layout">
        <Header />
        <main id="site-body">{children}</main>
        <Footer />
        </div>
    );
}