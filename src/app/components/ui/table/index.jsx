'use client'

import { Button } from '../button'
import styles from './styles.module.css'

export const Table = ({ list, header, actions = [] }) => {
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
                                    {header.map((c, index) => {
                                        const titleId = c?.titleId || c?.id
                                        return (
                                            <>
                                                {c.id === 'actions' ? (
                                                    <td key={index} className={styles.actions}>
                                                        {actions.map((a, i) => {
                                                            return (
                                                                <Button
                                                                    key={`${row.id}-${i}`}
                                                                    title={a.label}
                                                                    onClick={() => a?.onClick(row.id)}
                                                                    icon
                                                                />
                                                            )
                                                        })}
                                                    </td>
                                                ) : (
                                                    <td key={index}>{row[titleId]}</td>
                                                )}

                                            </>
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