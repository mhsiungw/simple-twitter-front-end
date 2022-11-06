import styles from "./style.module.scss";
function PopularItem({ item }) {
  const { username, account, avatar, isFollowed } = item;
  const handleFollowClick = () => {
    console.log("!!!handleFollowClick");
  };
  return (
    <li className={styles.popularItem}>
      <img className={styles.avatar} src={avatar} alt="img" />
      <div className={styles.itemInfo}>
        <span>{username}</span>
        <span className={styles.account}>@{account}</span>
      </div>
      {isFollowed === 1 ? (
        <button
          className={styles.followingBtn}
          onClick={() => handleFollowClick()}
        >
          正在跟隨
        </button>
      ) : (
        <button
          className={styles.followBtn}
          onClick={() => handleFollowClick()}
        >
          跟隨
        </button>
      )}
    </li>
  );
}

export default PopularItem;
