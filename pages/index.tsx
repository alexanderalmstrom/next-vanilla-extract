import type { NextPage } from "next";
import { Button } from "../components/button/Button";
import { Layout } from "../components/Layout";
import { Title } from "../components/title/Title";

const Home: NextPage = () => {
  return (
    <Layout>
      <Title type="h1">Hello</Title>
      <Button>Button</Button>
    </Layout>
  );
};

export default Home;
