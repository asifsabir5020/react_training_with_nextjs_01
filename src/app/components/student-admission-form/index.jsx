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

export const StudentAdmissionForm = () => {
    const [formData, setFormData] = useState(initialState)

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
                            />
                            <Input
                                label="Father Name"
                                placeholder="Enter Father Name"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({...preState, fatherName: value}))
                                }}
                                variant="vertical"
                            />
                            <Input
                                label="B-Form"
                                placeholder="Enter B-Form"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({...preState, bForm: value}))
                                }}
                                variant="vertical"
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
                        />
                        <Select
                            label="Last Grade"
                            list={grades}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({...preState, lastGrade: value}))
                            }}
                        />
                        <Select
                            label="Admission Class"
                            list={classes}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({...preState, admissionClass: value}))
                            }}
                        />
                    </div>
                    <div className={styles.formData}>
                        {JSON.stringify(formData)}
                    </div>
                </div>
            </form>
        </div>
    )
}