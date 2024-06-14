import React from 'react'
import Styles from './NavBarSection.module.css'
import NavBarSectionItem from '../NavBarItem/NavBarSectionItem'
import { HorizontalDividerPlain } from '../../../../dividers/HorizontalDivider'

const NavBarSection = ({ title, itemsData, showDivider }) => {
    console.log(itemsData)
    return (
        <>
            {title && <h5 className={Styles.section_title}>{title}</h5>}
            <ul className={Styles.NavBarSection}>
                {itemsData && Array.isArray(itemsData) && itemsData.map((item) => {

                    console.log(item)
                    return <NavBarSectionItem key={item.id} image={item.image} Icon={item.Icon} text={item.text} />

                })}
            </ul>
            {showDivider && <HorizontalDividerPlain />}
        </>
    )
}

export default NavBarSection