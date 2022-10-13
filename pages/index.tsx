import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Title } from "../components/title/Title";
import { Button } from "../components/button/Button";

const Home: NextPage = () => {
  return (
    <Layout>
      <Title type="h1">Hello</Title>
      <Button>Button</Button>
    </Layout>
  );
};

export default Home;
