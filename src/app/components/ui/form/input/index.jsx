'use client'

import uiStyles from '../../ui.styles.module.css'
import styles from './styles.module.css'

export const Input = props => {
    const { label, placeholder, variant } = props
    const fieldClass = variant === 'vertical' ? uiStyles.formFieldVertical : uiStyles.formField
    return (
        <div className={fieldClass}>
            <label className={uiStyles.fieldLabel}>
                {label}
            </label>
            <input
                className={styles.inputField}
                placeholder={placeholder}
            />
        </div>
    )
}