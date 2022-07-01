import { API_ROUTE } from "../config";
import styles from "../styles/Home.module.css";
import Meta from "../components/Meta";
import Layout from "../components/Layout";

export const getStaticProps = async (context) => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const news = await res.json();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news },
  };
};

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <Layout news={news.data} />
      </main>
    </div>
  );
}
