import React from 'react';

import user from './user.json';

import styles from './Profile.module.css';

console.log(styles);

const Profile = (
	<div className={styles.profile}>
		<img className={styles.avatar} src={user.avatar} alt='hzzz' width='150' />
		<h2>{user.name}</h2>
		<p className={styles.tag}>@{user.tag}</p>
		<span>{user.location}</span>
		<p className={styles.info}>
			{' '}
			followers : {user.stats['followers']} views : {user.stats['views']} likes
			: {user.stats['likes']}
		</p>
	</div>
);

export default Profile;
