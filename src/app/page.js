import { Student } from "./components/student";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Student />
    </main>
  );
}
