'use client'

import styles from './styles.module.css'

export const Button = ({ title, onClick = () => null, disabled }) => {

    return (
        <button
            onClick={onClick}
            type='button'
            className={styles.button}
            disabled={disabled}
        >
            {title}
        </button>
    )
}