// import { tweetsData } from "../index"
import Image from "next/image"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "../style.module.scss"
import { ModalPostProps } from "../modal-post"
import Link from "next/link"
import ModalTemplate from "../modal-template"
import Header from "components/header"
import { useRef } from "react"
import Button from "components/button"

interface ModalReplyProps extends ModalPostProps {
  replyTweetInfo: {
    readonly tweetId: string | number
    readonly content: string | number
    owner: {
      readonly id: string | number
      readonly name: string
      readonly account: string
      readonly avatar?: string
    }
    readonly createdAt: number
  }
}

const ModalReply = ({
  isVisible,
  onDialogClose,
  currentUser,
  postApi,
  replyTweetInfo
}: ModalReplyProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const {
    tweetId,
    owner: { id, name, account, avatar },
    content,
    createdAt
  } = replyTweetInfo
  const handleDialogClose = () => {
    const textarea = textareaRef.current
    const textContent = textarea?.value
    if (!textContent) return
    textarea.value = ""
  }
  const handleFormSubmit = () => {
    const textarea = textareaRef.current
    const textContent = textarea?.value
    if (!textContent) return
    // TODO 傳送新的推文
    console.log(textarea.value)
    postApi()
    textarea.value = ""
  }

  return (
    <ModalTemplate isVisible={isVisible} onDialogClose={handleDialogClose}>
      <Header handleLeftClick={onDialogClose} utility="modal" />
      <aside className={classes.modal__reply}>
        <div className={classes.avatar}>
          <Link href={`/${id}`}>
            <>
              <Image src={avatar || fakePhoto} alt="tweet owner's avatar" />
            </>
          </Link>
          <div className={classes.decoration}></div>
        </div>
        <section className={classes.modal__content}>
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
      <aside className={classes.modal__post}>
        <div className={classes.avatar}>
          <Link href={`/${currentUser.id}`}>
            <>
              <Image
                src={currentUser.avatar || fakePhoto}
                alt="current user's avatar"
              />
            </>
          </Link>
        </div>
        <form
          method="dialog"
          onSubmit={handleFormSubmit}
          className={classes.form}>
          <textarea
            ref={textareaRef}
            placeholder="有什麼新鮮事？"
            className={classes.textarea}
          />
          <Button className={classes.form__btn}>
            <span>推文</span>
          </Button>
        </form>
      </aside>
    </ModalTemplate>
  )
}

export default ModalReply
