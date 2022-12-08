// import { tweetsData } from "../index"
import Image from "next/image"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "./style.module.scss"
import PostTweetModal, { PostTweetModalProps } from "../post-tweet-modal"
import Link from "next/link"
import modalClasses from "../style.module.scss"

interface ReplyTweetModalProps extends PostTweetModalProps {
  replyTweetInfo: {
    tweetId: string | number
    content: string | number
    owner: {
      id: string
      name: string
      account: string
      avatar?: string
    }
    createdAt: number
  }
}

const ReplyTweetModal = ({
  isVisible,
  onDialogClose,
  currentUser,
  postApi,
  replyTweetInfo
}: ReplyTweetModalProps) => {
  const {
    tweetId,
    owner: { id, name, account, avatar },
    content,
    createdAt
  } = replyTweetInfo

  return (
    <PostTweetModal
      isVisible={isVisible}
      onDialogClose={onDialogClose}
      currentUser={currentUser}
      postApi={postApi}>
      <aside className={`${modalClasses.border_top} ${classes["reply-modal"]}`}>
        <div className={modalClasses.avatar}>
          <Link href={`/${id}`}>
            <Image src={avatar || fakePhoto} alt="tweet owner's avatar" />
          </Link>
          <div className={classes.decoration}></div>
        </div>
        <section className={classes["reply-modal__content"]}>
          <p>
            <strong>
              <Link href={`/${id}`}>{name}</Link>{" "}
            </strong>
            <span>
              <Link href={`/${id}`}>{"@" + account}</Link>
            </span>
            <span>{`・${createdAt}`}</span>
          </p>
          <p>
            <Link href={`tweet/${tweetId}`}>{content}</Link>
          </p>
          <p>
            回覆給 <Link href={`/${id}`}>{"@" + account}</Link>
          </p>
        </section>
      </aside>
    </PostTweetModal>
  )
}

export default ReplyTweetModal
