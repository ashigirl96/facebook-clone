import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from "./Header";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Facebook' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    {/* Header */}
    <Header />

    <main>
    {/* Sidebar */}
    {/* Feed */}
    {/* Widgets */}
    </main>
    {children}
  </div>
)

export default Layout
