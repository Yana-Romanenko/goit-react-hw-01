
import styles from './FriendListItem.module.css';

export default FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={styles.avatarFriend}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      <p className={isOnline ? styles.onlineFriend : styles.offlineFriend}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};