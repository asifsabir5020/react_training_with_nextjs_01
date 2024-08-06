'use client'

import { v4 as uuidv4 } from 'uuid';
import { classes, grades } from '@/constants'
import styles from './styles.module.css'
import { Select } from '../ui/form/select'
import { Input } from '../ui/form/input'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const initialState = {
    name: '',
    fatherName: '',
    bForm: '',
    lastClass: '',
    lastGrade: '',
    admissionClass: ''
}

export const StudentAdmissionForm = (props) => {
    const { setStudents, selectedStudent } = props
    const [formData, setFormData] = useState(initialState)

    const isSaveButtonDisabled = (
        !formData.name ||
        !formData.fatherName ||
        !formData.bForm ||
        !formData.lastClass ||
        !formData.lastGrade ||
        !formData.admissionClass
    )
    
    useEffect(() => {
        setFormData(selectedStudent)
    },[selectedStudent])
    
    const handleDataSave = () => {
        if (isSaveButtonDisabled) {
            alert("Please fill Student Information completely!")
            return
        }
        const payloadToSave = {
            ...formData,
            id: uuidv4(),
            lastClass: classes.find(el => el.id == formData.lastClass).title,
            lastGrade: (formData.lastGrade).toUpperCase(),
            admissionClass: classes.find(el => el.id == formData.admissionClass).title
        }

        setStudents(preState => ([...preState, payloadToSave]))
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
                                    setFormData(preState => ({ ...preState, name: value }))
                                }}
                                variant="vertical"
                                value={formData.name}
                            />
                            <Input
                                label="Father Name"
                                placeholder="Enter Father Name"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({ ...preState, fatherName: value }))
                                }}
                                variant="vertical"
                                value={formData.fatherName}
                            />
                            <Input
                                label="B-Form"
                                placeholder="Enter B-Form"
                                onChange={e => {
                                    const value = e.target.value
                                    setFormData(preState => ({ ...preState, bForm: value }))
                                }}
                                variant="vertical"
                                value={formData.bForm}
                            />
                        </div>
                    </div>
                    <div className={styles.academicInfoSection}>
                        <Select
                            label="Last Class"
                            options={classes}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({ ...preState, lastClass: value }))
                            }}
                            value={formData.lastClass}
                            placeholder="Select Class"
                        />
                        <Select
                            label="Last Grade"
                            options={grades}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({ ...preState, lastGrade: value }))
                            }}
                            value={formData.lastGrade}
                            placeholder="Select Grade"
                        />
                        <Select
                            label="Admission Class"
                            options={classes}
                            variant="vertical"
                            onChange={e => {
                                const value = e.target.value
                                setFormData(preState => ({ ...preState, admissionClass: value }))
                            }}
                            value={formData.admissionClass}
                            placeholder="Select Class"
                        />
                    </div>
                    <div className={styles.submitSection}>
                        <Button
                            title={'Save'}
                            onClick={handleDataSave}
                            disabled={isSaveButtonDisabled}
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