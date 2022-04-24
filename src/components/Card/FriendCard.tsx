import styles from './FriendCard.scss';

const FriendCard: React.FC = () => {
  const friends = [
    {
      name: 'Vanelord',
      avatar: 'https://blog.tomsawyer2.xyz/pics/cjr_avatar.jpg',
      url: 'https://vanelord.xyz',
    },
  ];

  return (
    <>
      <div className={styles.friendcardContainer}>
        <div className={styles.friendcardContainer_title}>
          <span>Friends</span>
        </div>
        <div className={styles.friendcardContainer_content}>
          {friends.map((friend) => {
            return (
              <div className={styles.friendcard}>
                <a target={'_blank'} href={friend.url}>
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className={styles.friend_img}
                  />
                </a>
                <span>{friend.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FriendCard;
