/** @format */

import React from 'react'
import styles from './FriendList.module.css'
import PropTypes from 'prop-types'

const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline} />
    <img className={styles.avatar} src={avatar} alt="" />
    <p className={styles.name}>{name}</p>
  </li>
)

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map((friend) => (
      <FriendListItem {...friend} />
    ))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
}

export default FriendList
