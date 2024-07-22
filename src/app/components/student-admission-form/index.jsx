'use client'

import { classes, grades } from '@/constants'
import styles from './styles.module.css'


export const StudentAdmissionForm = () => {
    return (
        <div className={styles.container}>
            <form>
                <div className={styles.formContent}>
                    <div className={styles.personalInfoSection}>
                        <div className={styles.imageSection}>
                            <img src="student-image.jpg" className={styles.image} />
                        </div>
                        <div className={styles.infoSection}>
                            <div className={styles.formField}>
                                <label className={styles.fieldLabel}>
                                    Name
                                </label>
                                <input
                                    className={styles.inputField}
                                    placeholder='Enter Student Name'
                                />
                            </div>
                            <div className={styles.formField}>
                                <label className={styles.fieldLabel}>
                                    Father Name
                                </label>
                                <input
                                    className={styles.inputField}
                                    placeholder='Enter Father Name'
                                />
                            </div>
                            <div className={styles.formField}>
                                <label className={styles.fieldLabel}>
                                    B-Form
                                </label>
                                <input
                                    className={styles.inputField}
                                    placeholder='Enter B-Form'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.academicInfoSection}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>
                                Last Class
                            </label>
                            <select className={styles.selectField}>
                                <option key="000" disabled>Select Class</option>
                                {classes.map(c => {
                                    return (
                                        <option key={c.id}>{c.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>
                                Last Grade
                            </label>
                            <select className={styles.selectField}>
                                <option key="000" disabled>Select Grade</option>
                                {grades.map(g => {
                                    return (
                                        <option key={g.id}>{g.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>
                                Admission Class
                            </label>
                            <select className={styles.selectField}>
                                <option key="000" disabled>Select Grade</option>
                                {classes.map(g => {
                                    return (
                                        <option key={g.id}>{g.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}