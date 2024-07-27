'use client'

import styles from './styles.module.css'

export const StudentTable = ({ students }) => {
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>B Form</th>
                    <th>Last Class</th>
                    <th>Last Grade</th>
                    <th>Admission Class</th>
                </thead>
                <tbody>
                    {students.map((s, index) => {
                        return (
                            <tr key={index}>
                                <td>{s.name}</td>
                                <td>{s.fatherName}</td>
                                <td>{s.bForm}</td>
                                <td>{s.lastClass}</td>
                                <td>{s.lastGrade}</td>
                                <td>{s.admissionClass}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}