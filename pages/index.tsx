import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { unsplash } from "../services/unsplash";
import { Layout } from "../components/Layout";
import { Title } from "../components/ui/title/Title";
import { Button } from "../components/ui/button/Button";

type Photo =
  | {
      id: string;
      width: number;
      height: number;
      urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        thumb: string;
      };
    }
  | undefined;

const Home: NextPage = () => {
  const [photo, setPhoto] = useState<any>(undefined);

  useEffect(() => {
    unsplash.photos
      .getRandom({})
      .then((result) => {
        if (result.type === "success") {
          setPhoto(result.response);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <Title type="h1">Hello</Title>
      <Button>Button</Button>
      {photo && (
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
        />
      )}
    </Layout>
  );
};

export default Home;
