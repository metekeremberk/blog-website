import styles from "../styles/layout.module.css";
import Link from "next/link";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

import { Database } from "../utils/database.types";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Navbar() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  const [loading, setLoading] = useState(true);
  const [logged_in, setLogged_in] = useState(false);
  const [full_name, setFull_name] = useState<Profiles["full_name"]>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>("");
  console.log(user);

  useEffect(() => {
    if (session) {
      setLogged_in(true);
      getProfile();
    }
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFull_name(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className={styles.navbar} id="navbar">
        <div className={styles.logo}>Logo</div>
        <div className={styles.userCard}>
          {!logged_in ? (
            <></>
          ) : (
            <>
              <h2>{full_name}</h2>
            </>
          )}
        </div>
        <div>
          <ul>
            <a href="">Homepage</a>
            <a href="">Blogs</a>
            <Link href="/auth">Auth</Link>
            {/* <a href="">Sign Up</a>
					<a href="">Login</a> */}
          </ul>
        </div>
      </header>
    </>
  );
}
