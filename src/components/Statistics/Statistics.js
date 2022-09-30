/** @format */

import React from 'react'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types'

//    border: solid 1px rgb(211, 221, 221);

// const randomColor = () => {
//  Math.floor(Math.random() * 999)
//   const a =
//   const b =
//   const c =
//   return `rgb(${a},${b},${c})`
// }
const randomUnder999 = () => Math.floor(Math.random() * 999)

const randomRGB = () => `rgb(${randomUnder999()},${randomUnder999()},${randomUnder999()})`

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.stat_list}>
        {stats.map((stat) => (
          <li className={styles.item} key={stat.id} style={{ backgroundColor: randomRGB() }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}

export default Statistics
