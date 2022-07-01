import { API_ROUTE } from "../config";
import styles from "../styles/Home.module.css";
import Meta from "../components/Meta";
import Layout from "../components/Layout";

export const getStaticProps = async (context) => {
  const res_news = await fetch(`${API_ROUTE}/announcements`);
  const news = await res_news.json();

  const res_events = await fetch(`${API_ROUTE}/events`);
  const events = await res_events.json();

  if (!news || !events) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news, events },
  };
};

export default function Home({ news, events }) {
  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <Layout news={news.data} events={events.data} />
      </main>
    </div>
  );
}
