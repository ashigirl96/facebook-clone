import React from "react";
import Layout from "../components/Layout";
import { getSession, GetSessionOptions } from "next-auth/client";
import { Session } from "next-auth";
import Login from "./Login";

type Props = {
  session: Session;
};

const IndexPage: React.FC<Props> = ({ session }) => {
  if (!session) return <Login />;
  console.log(session);
  return (
    <Layout>
      <div />
    </Layout>
  );
};

export default IndexPage;

export async function getServerSideProps(context: GetSessionOptions) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
