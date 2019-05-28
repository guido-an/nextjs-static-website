import Link from "next/link";
import Layout from "../components/Layout";
const Index = () => (
  <Layout title="Home">
    <p>welcome to home </p>
    <Link href="/about">
      <a>go to about</a>
    </Link>
  </Layout>
);

export default Index;
