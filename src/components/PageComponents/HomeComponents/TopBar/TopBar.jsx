import React from 'react'
import Styles from './TopBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
const profilePic = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"

const TopBar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left_part}>contenido de la parte de la izquierda</div>
      <div className={Styles.search}>
        <SearchBar/>
      </div>
      <div className={Styles.profile}>
        {/* <img className={Styles.profilePic} src={profilePic} alt="Profile Picture" /> */}
        profile
      </div>



    </div>
  )
}

export default TopBar