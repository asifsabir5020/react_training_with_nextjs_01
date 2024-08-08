'use client'

import { useState } from "react";
import styles from './styles.module.css'
import { StudentAdmissionForm } from "../student-admission-form";
import { StudentTable } from "../student-table";

export const Student = () => {
    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState({})

    return (
        <div className={styles.container}>
            <StudentAdmissionForm
                students={students}
                setStudents={setStudents}
                selectedStudent={selectedStudent}
                setSelectedStudent={setSelectedStudent}
            />
            <StudentTable
                students={students}
                setSelectedStudent={setSelectedStudent}
            />
        </div>
    )
}