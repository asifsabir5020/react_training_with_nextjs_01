'use client'

import { classes, grades } from '@/constants'
import styles from './styles.module.css'
import { Select } from '../ui/form/select'
import { Input } from '../ui/form/input'
import { useState } from 'react'

const initialState = {
    name: '',
    fatherName: '',
    bForm: '',
    lastClass: '',
    lastGrade: '',
    admissionClass: ''
}

export const StudentAdmissionForm = (props) => {
    const { setStudents } = props
    const [formData, setFormData] = useState(initialState)

    const handleDataSave = () => {
        setStudents(preState => ([...preState, formData]))
        setFormData(initialState)
    }

    return (
        <div className={styles.container}>
            <form>
                <div className={styles.formContent}>
                    <div className={styles.personalInfoSection}>
                        <div className={styles.imageSection}>
                            <img src="student-image.jpg" className={styles.image} />
                        </div>
                        <div className={styles.infoSection}>
                            <Input
                                label="Name"
                                placeholder="Enter Student Name"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({...preState, name: value}))
                                }}
                                variant="vertical"
                                value={formData.name}
                            />
                            <Input
                                label="Father Name"
                                placeholder="Enter Father Name"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({...preState, fatherName: value}))
                                }}
                                variant="vertical"
                                value={formData.fatherName}
                            />
                            <Input
                                label="B-Form"
                                placeholder="Enter B-Form"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({...preState, bForm: value}))
                                }}
                                variant="vertical"
                                value={formData.bForm}
                            />
                        </div>
                    </div>
                    <div className={styles.academicInfoSection}>
                        <Select
                            label="Last Class"
                            list={classes}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({...preState, lastClass: value}))
                            }}
                            value={formData.lastClass}
                        />
                        <Select
                            label="Last Grade"
                            list={grades}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({...preState, lastGrade: value}))
                            }}
                            value={formData.lastGrade}
                        />
                        <Select
                            label="Admission Class"
                            list={classes}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({...preState, admissionClass: value}))
                            }}
                            value={formData.admissionClass}
                        />
                    </div>
                    <div className={styles.submitSection}>
                            <button type='button' onClick={handleDataSave}>
                                Save
                            </button>
                    </div>
                    <div className={styles.formData}>
                        {JSON.stringify(formData)}
                    </div>
                </div>
            </form>
        </div>
    )
}