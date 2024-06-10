import React from 'react'
import Styles from './TPLogin.module.css'

import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import HorizontalDivider from '../dividers/HorizontalDivider';

const TPLogin = () => {
    return (
        <div className={Styles.container}>

            <HorizontalDivider />

            <div className={Styles.buttons_container}>
                <button className={Styles.social_button}>
                    <FaGoogle />
                </button>

                <button className={Styles.social_button}>
                    <FaTwitter />
                </button>

                <button className={Styles.social_button}>
                    <FaFacebook />
                </button>
            </div>
        </div>
    )
}

export default TPLogin