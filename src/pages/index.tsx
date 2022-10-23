import type { NextPage } from "next";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/ui/title/Title";
import { Button } from "../components/ui/button/Button";
import Hero from "../components/hero/Hero";
import { useCallback, useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Hej",
  "Aloha",
  "Hola",
  "Bonjour",
  "Guten tag",
  "Konnichiwa",
  "Olá",
  "Ciao",
];

const Home: NextPage = () => {
  const [greeting, setGreeting] = useState("");

  const generateRandomGreeting = useCallback(
    () => setGreeting(greetings[Math.floor(Math.random() * greetings.length)]),
    []
  );

  useEffect(() => {
    generateRandomGreeting();
  }, []);

  return (
    <Layout>
      <Hero>
        <Title as="h1" size="display">
          {greeting}!
        </Title>
        <Button onClick={generateRandomGreeting}>
          Do not click this button
        </Button>
      </Hero>
    </Layout>
  );
};

export default Home;
