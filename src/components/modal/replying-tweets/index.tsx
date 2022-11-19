import { tweetsData } from "../index"
import Image from "next/image"
import fakePhoto from "src/assets/img/fake-photo.png"
import classes from "../style.module.scss"

const ReplyingTweets = ({ tweetsData }: { tweetsData: tweetsData }) => {
  return (
    <aside
      className={`${classes["modal__replying-tweet"]} ${classes.modal_border}`}>
      <div className={classes.modal__avatar}>
        <a href="#">
          <Image
            src={tweetsData.tweetsOwner.avatar || fakePhoto}
            alt="tweet owner's avatar"
          />
        </a>
        <div className={classes.modal__decoration}></div>
      </div>
      <section className={classes["modal__replying-tweet-content"]}>
        <p>
          <a href="#">
            <strong>{tweetsData.tweetsOwner.name} </strong>
          </a>
          <a href="#">
            <span>{"@" + tweetsData.tweetsOwner.account}</span>
          </a>
          {/* 這邊會使用function去轉換時間，比方說引入day.js等等 */}
          {/* 會撞到Next中SSR的一個問題，就是時間點的問題，目前先comment起來 */}
          {/* <span>{`・${tweetsData.tweetsCreatedAt.toString(10)}`}</span> */}
        </p>
        <p>{tweetsData.tweetsContent}</p>
        <p>
          回覆給 <a href="#">{"@" + tweetsData.tweetsOwner.account}</a>
        </p>
      </section>
    </aside>
  )
}

export default ReplyingTweets
