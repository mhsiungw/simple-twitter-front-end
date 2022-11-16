import styles from "./style.module.scss";

interface PopularItem {
  username: string;
  account: string;
  avatar?: string;
  isFollowed: number;
}

function PopularItem({ username, account, avatar, isFollowed }: PopularItem) {
  const handleFollowClick = () => {
    // Todo: post add/remove follow api
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
