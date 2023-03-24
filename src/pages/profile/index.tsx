import Account from "@/components/Account";
import Layout from "@/components/layout";
import { useSession } from "@supabase/auth-helpers-react";
import styles from "@/styles/profile.module.css";
import Redirect from "@/components/redirect";

export default function Profile() {
	const session = useSession();

	return (
		<>
			<Layout>
				<div className={styles.container}>{!session ? <Redirect slug="/" /> : <Account session={session}></Account>}</div>
			</Layout>
		</>
	);
}
