import React from 'react'
import Styles from './Post.module.css'
const profilePic = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
const postImage1 = "https://vectordiary.com/wp-content/uploads/2021/09/20-best-pixel-art-in-2021-featured-image.jpg"
const postImage2 = "https://www.artnews.com/wp-content/uploads/2022/04/thumbnail_Pencil.png?w=400"
const postImage3 = "https://img2.joyreactor.com/pics/post/gif-pixel-art-1490462.gif"


const Post = () => {
  return (
    <div className={Styles.post}>

      <div className={Styles.post__header}>

        <div className={Styles.post__author}>
          <img src={profilePic} alt="Author Image" />
          <span>Author Name</span>
          <span className={Styles.post__date}>Hace 2 horas</span>
        </div>

      </div>

      <div className={Styles.post__content}>
        <p>Acá va el contenido del post, por ejemplo un texto de ejemplo este texto</p>
        {
           true && <div className={Styles.image_container}>
            <img className={Styles.post_image} src={postImage1} alt="" />
            <img className={Styles.post_image} src={postImage2} alt="" />
            <img className={Styles.post_image} src={postImage3} alt="" />
          </div>
        }

      </div>

      <div className={Styles.post__footer}>
        <button className={Styles.post__like}>Like</button>
        <button className={Styles.post__comment}>Comment</button>
        <button className={Styles.post__share}>Share</button>
      </div>


    </div>
  )
}




export default Post