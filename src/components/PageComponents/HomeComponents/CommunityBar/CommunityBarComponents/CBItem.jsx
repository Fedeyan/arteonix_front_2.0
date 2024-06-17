import React from 'react'
import Styles from './CBItem.module.css'
const icon = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a78b9567-9f72-4c01-a2be-3cfcf70f1f00/d8svmxu-5c9b8864-1ddb-47f2-8212-c018e2cbcc40.png/v1/fill/w_400,h_400/roblox__artist_community_logo_by_zufdesigns_d8svmxu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvYTc4Yjk1NjctOWY3Mi00YzAxLWEyYmUtM2NmY2Y3MGYxZjAwXC9kOHN2bXh1LTVjOWI4ODY0LTFkZGItNDdmMi04MjEyLWMwMThlMmNiY2M0MC5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.STOV7T59DtUy2epw1imp6RtOVm4WuY3XKcVFQW64j1U"
const CBItem = () => {
  return (
    <li className={Styles.item}>
      <img className={Styles.icon} src={icon} alt="" />
      <p>Item title</p>
    </li>
  )
}

export default CBItem