import styles from "../styles/layout.module.css";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";

export default function Navbar() {
	const session = useSession();

	return (
		<>
			<header className={styles.navbar} id="navbar">
				<div className={styles.logo}>Logo</div>
				<ul>
					<Link href="/">Homepage</Link>
					<Link href="/blog">Blogs</Link>
					{!session ? <Link href="/auth">Sign in</Link> : <Link href="/profile">Profile</Link>}
				</ul>
			</header>
		</>
	);
}
