import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import PostComposer from '../../components/PageComponents/HomeComponents/PostComposer/PostComposer'
import Post from '../../components/PageComponents/HomeComponents/Posts/Posts'
import Styles from './Home.module.css'

const Home = () => {
    return (
        <HomeLayout>
            <div className={Styles.posts_render}>

            <Post/>
            <Post/>
            <Post/>
            </div>

        </HomeLayout>
    )
}

export default Home