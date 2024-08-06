'use client'

import { Table } from '../ui/table'
import styles from './styles.module.css'

export const StudentTable = ({ students }) => {
    console.log('students:#:', students)
    return (
        <div className={styles.container}>
            <Table
                list={students}
                header={[
                    {id: 'name', value: 'Name'},
                    {id: 'fatherName', value: 'Father Name'},
                    {id: 'bForm', value: 'B Form'},
                    {id: 'lastClass', value: 'Last Class'},
                    {id: 'lastGrade', value: 'Last Grade'},
                    {id: 'admissionClass', value: 'Admission Class'}
                ]}
            />
        </div>
    )
}