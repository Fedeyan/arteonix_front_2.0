import React from 'react'
import Styles from './TopBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
const profilePic = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"

const TopBar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left_part}><h3>Logo de ArteoniX</h3></div>
      <div className={Styles.search}>
        <SearchBar/>
      </div>
      <div className={Styles.profile}>
        profile
      </div>



    </div>
  )
}

export default TopBar