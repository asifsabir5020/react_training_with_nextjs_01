import { StudentAdmissionForm } from "./components/student-admission-form";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <StudentAdmissionForm />
    </main>
  );
}
