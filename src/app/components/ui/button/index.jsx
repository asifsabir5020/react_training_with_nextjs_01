'use client'

import styles from './styles.module.css'

export const Button = ({ title, onClick = () => null, disabled, icon }) => {
    const buttonStyles = icon ? styles.iconButton : styles.button
    return (
        <button
            onClick={onClick}
            type='button'
            className={buttonStyles}
            disabled={disabled}
        >
            {title}
        </button>
    )
}