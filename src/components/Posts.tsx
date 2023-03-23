import styles from "../styles/home.module.css";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Posts() {
  const supabase = useSupabaseClient();

  return (
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
  );
}
