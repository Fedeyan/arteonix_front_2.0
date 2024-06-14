import React from 'react'
import Styles from './NavBarSectionItem.module.css'

const NavBarSectionItem = ({ text, Icon, image }) => {
    console.log(image)
    return (
        <li className={Styles.list_item}>
            {Icon && <Icon />}
            {image && <img className={Styles.list_img} src={image} />}
            {text && text}</li>
    )
}

export default NavBarSectionItem