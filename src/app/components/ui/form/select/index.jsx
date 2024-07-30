'use client'

import uiStyles from '../../ui.styles.module.css'
import styles from './styles.module.css'

export const Select = props => {
    const { label, options, variant, onChange = () => null, value, placeholder: providedPlaceholder } = props
    const fieldClass = variant === 'vertical' ? uiStyles.formFieldVertical : uiStyles.formField
    const placeholder = providedPlaceholder ? providedPlaceholder : 'Select Option'
    return (
        <div className={fieldClass}>
            <label className={uiStyles.fieldLabel}>
                {label}
            </label>
            <select value={value} onChange={onChange} className={styles.selectField}>
                <option key="000" value=''>{placeholder}</option>
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.id}>{option.title}</option>
                    )
                })}
            </select>
        </div>
    )
}