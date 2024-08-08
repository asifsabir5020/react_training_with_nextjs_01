'use client'

import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Table } from '../ui/table'
import styles from './styles.module.css'

export const StudentTable = ({ students, setStudents, setSelectedStudent }) => {

    const handleEdit = id => {
        const student = students.find(el => el.id === id)
        setSelectedStudent(student)
    }

    const handleDelete = id => {
        setStudents(students.filter(s => s.id !== id))
    }

    return (
        <div className={styles.container}>
            <Table
                list={students}
                header={[
                    { id: 'name', value: 'Name' },
                    { id: 'fatherName', value: 'Father Name' },
                    { id: 'bForm', value: 'B Form' },
                    { id: 'lastClass', titleId: 'lastClassTitle', value: 'Last Class' },
                    { id: 'lastGrade', titleId: 'lastGradeTitle', value: 'Last Grade' },
                    { id: 'admissionClass', titleId: 'admissionClassTitle', value: 'Admission Class' },
                    { id: 'actions', value: 'Actions' }
                ]}
                actions={[
                    {
                        label: <FaRegPenToSquare />,
                        onClick: handleEdit,
                    },
                    {
                        label: <FaRegTrashCan />,
                        onClick: handleDelete,
                    }
                ]}
            />
        </div>
    )
}