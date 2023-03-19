import styles from "../styles/layout.module.css";

export default function Footer() {
	return (
		<>
			<footer className={styles.footer} id="footer">
				<div className={styles.footer_container}>
					<div className={styles.footer_container_top}>
						<div>
							<h1>Logo</h1>
							<h3>Description</h3>
						</div>
						<div>
							<a href="">Homepage</a>
							<a href="">Blogs</a>
							<a href="">Sign Up</a>
							<a href="">Login</a>
						</div>
					</div>
					<div className={styles.footer_container_line} />
					<div className={styles.footer_container_bottom}>
						<div>Trademark</div>
						<div>
							<a href="">Terms of Service</a>
							<a href="">Privacy Notice</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
