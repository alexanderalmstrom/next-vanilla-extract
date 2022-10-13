import type { NextPage } from "next";
import { Button } from "../components/button/Button";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1>Hello</h1>
        <Button>Button</Button>
      </Layout>
    </>
  );
};

export default Home;
