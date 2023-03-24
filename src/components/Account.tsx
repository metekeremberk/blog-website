import { useState, useEffect } from "react";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../utils/database.types";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
import styles from "@/styles/profile.module.css";

export default function Account({ session }: { session: Session }) {
	const supabase = useSupabaseClient<Database>();
	const user = useUser();
	const [loading, setLoading] = useState(true);
	const [full_name, setFull_name] = useState<Profiles["full_name"]>(null);
	const [website, setWebsite] = useState<Profiles["website"]>(null);
	const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

	useEffect(() => {
		getProfile();
	}, [session]);

	async function getProfile() {
		try {
			setLoading(true);
			if (!user) throw new Error("No user");

			let { data, error, status } = await supabase.from("profiles").select(`full_name, website, avatar_url`).eq("id", user.id).single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setFull_name(data.full_name);
				setWebsite(data.website);
				setAvatarUrl(data.avatar_url);
			}
		} catch (error) {
			alert("Error loading user data!");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function updateProfile({
		full_name,
		website,
		avatar_url,
	}: {
		full_name: Profiles["full_name"];
		website: Profiles["website"];
		avatar_url: Profiles["avatar_url"];
	}) {
		try {
			setLoading(true);
			if (!user) throw new Error("No user");

			const updates = {
				id: user.id,
				full_name,
				website,
				avatar_url,
				updated_at: new Date().toISOString(),
			};

			let { error } = await supabase.from("profiles").upsert(updates);
			if (error) throw error;
			alert("Profile updated!");
		} catch (error) {
			alert("Error updating the data!");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={styles.account_box}>
			<div className={styles.back_button}></div>
			<div className={styles.avatar}></div>
			<div className={styles.input}>
				<label htmlFor="email">Email</label>
				<input id="email" type="text" value={session.user.email} disabled />
			</div>
			<div className={styles.input}>
				<label htmlFor="full_name">Full Name</label>
				<input id="full_name" type="text" value={full_name || ""} onChange={(e) => setFull_name(e.target.value)} />
			</div>
			<div className={styles.input}>
				<label htmlFor="website">Website</label>
				<input id="website" type="website" value={website || ""} onChange={(e) => setWebsite(e.target.value)} />
			</div>

			<div className={styles.button}>
				<button onClick={() => updateProfile({ full_name, website, avatar_url })} disabled={loading}>
					{loading ? "Loading ..." : "Update"}
				</button>
			</div>

			<div className={styles.button}>
				<button onClick={() => supabase.auth.signOut()}>Sign Out</button>
			</div>
		</div>
	);
}
