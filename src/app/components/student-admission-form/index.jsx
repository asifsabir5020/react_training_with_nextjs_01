'use client'

import { classes, grades } from '@/constants'
import styles from './styles.module.css'
import { Select } from '../ui/form/select'
import { Input } from '../ui/form/input'

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
                            <Input
                                label="Name"
                                placeholder="Enter Student Name"
                            />
                            <Input
                                label="Father Name"
                                placeholder="Enter Father Name"
                            />
                            <Input
                                label="B-Form"
                                placeholder="Enter B-Form"
                            />
                        </div>
                    </div>
                    <div className={styles.academicInfoSection}>
                        <Select
                            label="Last Class"
                            list={classes}
                            variant="vertical"
                        />
                        <Select
                            label="Last Grade"
                            list={grades}
                            variant="vertical"
                        />
                        <Select
                            label="Admission Class"
                            list={classes}
                            variant="vertical"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}