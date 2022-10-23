import type { NextPage } from "next";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/ui/title/Title";
import { Button } from "../components/ui/button/Button";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero>
        <Title as="h1" size="display">
          Hello!
        </Title>
        <Button>This is a button</Button>
      </Hero>
    </Layout>
  );
};

export default Home;
