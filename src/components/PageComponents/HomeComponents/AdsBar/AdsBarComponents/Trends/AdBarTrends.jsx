import React from 'react'
import Styles from './AdBarTrends.module.css'
import TrendItem from './TrendItem'

const AdBarTrends = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 className={Styles.title}>Tendencias</h3>
      </div>
      <ul className={Styles.show_trends}>

        <TrendItem showHB={true}/>
        <TrendItem showHB={true}/>
        <TrendItem showHB={true}/>
        <TrendItem showHB={false}/>

      </ul>
    </div>
  )
}

export default AdBarTrends