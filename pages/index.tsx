import type { NextPage } from "next";
import HomeLayout from "@src/app/containers/home/HomeLayout";
import Layout from "@src/app/components/Layout";
import DataProvider from "@src/app/containers/home/DataProvider";
const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <DataProvider>
        <HomeLayout />
      </DataProvider>
    </Layout>
  );
};

export default Home;
