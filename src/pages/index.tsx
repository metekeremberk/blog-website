import styles from "../styles/home.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Blog website</title>
			</Head>
			<div className={styles.body}>
				<div className={styles.latest_post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
				<div className={styles.post}></div>
			</div>
		</Layout>
	);
}
