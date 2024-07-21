import { Pool } from 'pg'
import styles from "./page.module.css";

const dbConnectionPool = async () => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
  })
  const createTableText = `
  CREATE TABLE tech_languages(
    title VARCHAR (50) UNIQUE NOT NULL
  );
`
  const response = await pool.query(createTableText)
  return response
}


export default async function Home() {
  const data = await dbConnectionPool()
  console.log('data:#:', data)
  return (
    <main className={styles.main}>
      Welcome to React & Nextjs
    </main>
  );
}
