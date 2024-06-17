import React from 'react'
import Styles from './AdComponent.module.css'
const adImage = "https://cdn.dribbble.com/users/15617/screenshots/5495870/thumb-101-art-event-drbl_1x.jpg"

const AdComponent = () => {
  return (
    <div className={Styles.container}>
        <h4 className={Styles.ad_title}>Ad Title</h4>
        <img src={adImage} alt=""  className={Styles.ad_image}/>
        <h5 className={Styles.ad_subtitle}>Ad subtitle</h5>
        <p>Ad description example text</p>
    </div>
  )
}

export default AdComponent