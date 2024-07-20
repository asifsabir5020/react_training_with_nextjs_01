import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ul>
          <li>
            <Link href="/react">React</Link>
          </li>
          <li>
            <Link href="/nextjs">NextJs</Link>
          </li>
        </ul>
      </div>
      Welcome to React & Nextjs
    </main>
  );
}
