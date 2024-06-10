import React from 'react'
import Styles from './HorizontalDivider.module.css'

const HorizontalDivider = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.divider_horizontal}></div>
            <p className={Styles.divider_caption}>Continuar con</p>
            <div className={Styles.divider_horizontal}></div>
        </div>
    )
}

export default HorizontalDivider