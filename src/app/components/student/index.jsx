'use client'

import { useState } from "react";
import styles from './styles.module.css'
import { StudentAdmissionForm } from "../student-admission-form";
import { StudentTable } from "../student-table";

export const Student = () => {
    const [students, setStudents] = useState([])

    return (
        <div className={styles.container}>
            <StudentAdmissionForm setStudents={setStudents} />
            <StudentTable students={students}/>
        </div>
    )
}