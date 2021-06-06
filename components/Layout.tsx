import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Facebook" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    {/* Header */}
    <Header />

    <main className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </main>
    {children}
  </div>
);

export default Layout;
