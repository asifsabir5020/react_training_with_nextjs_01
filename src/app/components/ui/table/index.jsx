'use client'

import styles from './styles.module.css'

export const Table = ({ list, header }) => {
    if (header.length === 0) return null
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        {header.map((h, index) => {
                            return (
                                <th key={index}>{h.value}</th>
                            )
                        })}
                    </tr>
                </thead>
                {(list.length === 0) ? (
                    <tbody>
                        <tr colSpan={header.length}>
                            <td>There is No Data!</td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody className={styles.tbody}>
                        {list.map((row, index) => {
                            return (
                                <tr key={index} className={styles.tr}>
                                    {header.map((h, index) => {
                                        return (
                                            <td key={index}>{row[h.id]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                )}

            </table>
        </div>
    )
}