import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<header className={styles.navbar} id="navbar">
				<div>Logo</div>
				<ul>
					<a href="">Homepage</a>
					<a href="">Blogs</a>
					<Link href="/auth">Auth</Link>
					{/* <a href="">Sign Up</a>
					<a href="">Login</a> */}
				</ul>
			</header>
		</>
	);
}
