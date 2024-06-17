import React from 'react'
import Styles from './CommunityBar.module.css'
import CBSection from './CommunityBarComponents/CBSection'

const CommunityBar = () => {
    return (
        <section className={Styles.container}>
            <CBSection />
            <CBSection />

            <CBSection />

            <CBSection />

        </section>
    )
}

export default CommunityBar