import styles from "../styles/layout.module.css";

export default function Navbar() {
	return (
		<>
			<header className={styles.navbar} id="navbar">
				<div>Logo</div>
				<ul>
					<a href="">Homepage</a>
					<a href="">Blogs</a>
					<a href="">Sign Up</a>
					<a href="">Login</a>
				</ul>
			</header>
		</>
	);
}
