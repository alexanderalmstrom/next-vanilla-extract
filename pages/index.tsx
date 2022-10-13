import type { NextPage } from "next";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/ui/title/Title";
import { Button } from "../components/ui/button/Button";

const Home: NextPage = () => {
  return (
    <Layout>
      <Title type="h1">Hello</Title>
      <Button>Button</Button>
    </Layout>
  );
};

export default Home;
