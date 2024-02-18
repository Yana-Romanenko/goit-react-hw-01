
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

export default FriendList = ({ friends }) => {
  return (
    <ul className={style.friendListContainer}>
      {friends.map(friend => (
        <li key={friend.id} className={style.friendListItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

