import styles from "../styles/home.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Blog website</title>
			</Head>
			<div className={styles.body}></div>
		</Layout>
	);
}
