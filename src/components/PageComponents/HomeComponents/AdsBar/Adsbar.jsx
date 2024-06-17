import React from 'react'
import Styles from './AdsBar.module.css'
import Trends from './AdsBarComponents/Trends/AdBarTrends'
import AdComponent from './AdsBarComponents/AdComponent/AdComponent'

const Adsbar = () => {
  return (
    <section className={Styles.container}>
      <Trends />
      <AdComponent />
    </section>
  )
}

export default Adsbar