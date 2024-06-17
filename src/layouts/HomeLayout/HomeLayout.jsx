import React from 'react'
import Styles from './HomeLayout.module.css'
import NavBar from '../../components/PageComponents/HomeComponents/NavBar/NavBar'
import TopBar from '../../components/PageComponents/HomeComponents/TopBar/TopBar'
import PostComposer from '../../components/PageComponents/HomeComponents/PostComposer/PostComposer'
import Adsbar from '../../components/PageComponents/HomeComponents/AdsBar/Adsbar'
import CommunityBar from '../../components/PageComponents/HomeComponents/CommunityBar/CommunityBar'

const HomeLayout = ({ children }) => {
    return (
        <div className={Styles.container}>
            <TopBar />
            <NavBar />
            <main className={Styles.main}>

                {/* section 1 */}
                <section className={Styles.feed}>
                    <PostComposer />
                    {children}
                </section>

                {/* section 2 */}
                <Adsbar />

                {/* section 3 */}
                <CommunityBar />
            </main>

        </div>
    )
}

export default HomeLayout