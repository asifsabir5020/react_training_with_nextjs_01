'use client'

import styles from './styles.module.css'

export const StudentAdmissionForm = () => {
    return (
        <div className={styles.container}>
            <form>
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
            </form>
        </div>
    )
}