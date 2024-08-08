'use client'

import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

import { Table } from '../ui/table'
import styles from './styles.module.css'
import { Icon } from "../ui/icon";

export const StudentTable = ({ students, setSelectedStudent }) => {

    const handleEdit = id => {
        const student = students.find(el => el.id === id)
        setSelectedStudent(student)
    }

    const handleDelete = id => {
        console.log('id:#:', id)
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