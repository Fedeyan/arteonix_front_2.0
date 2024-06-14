import React from 'react'
import Styles from './HomeLayout.module.css'
import NavBar from '../../components/PageComponents/HomeComponents/NavBar/NavBar'
import TopBar from '../../components/PageComponents/HomeComponents/TopBar/TopBar'
import PostComposer from '../../components/PageComponents/HomeComponents/PostComposer/PostComposer'

const HomeLayout = ({ children }) => {
    return (
        <div className={Styles.container}>
            <TopBar />
            <NavBar />
            <main className={Styles.main}>
                <section className={Styles.feed}>
                    <PostComposer />

                    {children}
                </section>
                <section className={Styles.middle_bar}>ads bar</section>
                <div style={{ backgroundColor: "green", display: "flex", placeItems: "center", placeContent: "center" }}>Extrastuff</div>
            </main>

        </div>
    )
}

export default HomeLayout