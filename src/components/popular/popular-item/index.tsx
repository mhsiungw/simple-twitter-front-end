import Button from "../../button";
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
      <Button
        className={isFollowed === 1 ? styles.followingBtn : styles.followBtn}
        children={isFollowed === 1 ? "正在跟隨" : "跟隨"}
        onClick={() => handleFollowClick()}
      />
    </li>
  );
}

export default PopularItem;
