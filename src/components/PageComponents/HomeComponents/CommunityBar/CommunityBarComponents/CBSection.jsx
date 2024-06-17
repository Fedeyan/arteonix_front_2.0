import React from 'react'
import CBItem from './CBItem'
import styles from "./CBSection.module.css"
import { HorizontalDividerPlain } from '../../../../dividers/HorizontalDivider'

const numberOfItems = [1, 2, 3, 4, 5]

const CBSection = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Section title</h4>
            <ul className={styles.list}>
                {numberOfItems.map((item) => (
                    <CBItem />
                ))}
            </ul>


            <HorizontalDividerPlain />


        </div>
    )
}

export default CBSection
