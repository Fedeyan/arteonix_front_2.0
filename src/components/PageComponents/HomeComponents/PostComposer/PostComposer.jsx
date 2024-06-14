import React from 'react'
import Styles from './PostComposer.module.css'
import { FaImage, FaPaperclip } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdMood } from 'react-icons/md'
const profilePic = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
const PostComposer = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.top_side}>
                <img className={Styles.profile_pic} src={profilePic} alt="" />
                <button className={Styles.create_post_button}>¿En qué estas pensando?</button>
            </div>
            <div className={Styles.bot_side}>
                <FaImage size={25} className={Styles.bot_side_item} />
                <FaPaperclip size={25} className={Styles.bot_side_item} />
                <HiLocationMarker size={25} className={Styles.bot_side_item} />
                <MdMood size={25} className={Styles.bot_side_item} />
                <button className={Styles.fake_share_button}>Compartir</button>
            </div>
        </div>
    )
}

export default PostComposer