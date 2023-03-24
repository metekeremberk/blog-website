import Head from "next/head";
import Layout from "../components/layout";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Posts from "@/components/Posts";

export default function Home() {
	const session = useSession();
	const supabase = useSupabaseClient();

	return (
		<>
			<Layout>
				<Head>
					<title>Blog website</title>
				</Head>
				<Posts />
			</Layout>
		</>
	);
}
