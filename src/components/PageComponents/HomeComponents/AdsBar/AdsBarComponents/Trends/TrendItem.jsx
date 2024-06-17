import React from 'react'
import Styles from './TrendItem.module.css'
import { HorizontalDividerPlain } from '../../../../../dividers/HorizontalDivider'
const icon = "https://d28jbe41jq1wak.cloudfront.net/BlogsImages/exploring-pop-art-defini-638237807747168508.jpg"

const TrendItem = ({ showHB }) => {
  return (
    <li className={Styles.trend_item}>
      <div className={Styles.content}>

        <img className={Styles.trend_item_icon} src={icon} alt="icon" />
        <div className={Styles.trend_item_info}>
          <h4>Trend Name</h4>
          <p>14 de junio, Author</p>
        </div>

      </div>
      {showHB && <HorizontalDividerPlain />}
    </li>
  )
}

export default TrendItem