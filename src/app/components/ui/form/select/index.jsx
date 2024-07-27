'use client'

import uiStyles from '../../ui.styles.module.css'
import styles from './styles.module.css'

export const Select = props => {
    const { label, list, variant, onChange = () => null } = props
    const fieldClass = variant === 'vertical' ? uiStyles.formFieldVertical : uiStyles.formField
    return (
        <div className={fieldClass}>
            <label className={uiStyles.fieldLabel}>
                {label}
            </label>
            <select  onChange={onChange} className={styles.selectField}>
                <option key="000" disabled>Select Grade</option>
                {list.map(g => {
                    return (
                        <option key={g.id}>{g.title}</option>
                    )
                })}
            </select>
        </div>
    )
}