import styles from './Profile.module.css';
export default Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div>
              <img className={styles.profileImage}
                  src={image}
                  alt="User avatar" />
        <div className={styles.profileInfo}>
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className={styles.statsList}>
        <li className={styles.statsListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statsListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statsListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

