import Link from "next/link"
import { ICCloseModel, ICArrow } from "./icons"
import classes from "./style.module.scss"

function Header({
  utility,
  handleLeftClick,
  title,
  headerRightButton
}: {
  headerLeftButton?: JSX.Element | null
  headerTitle?: JSX.Element | null
  headerRightButton?: JSX.Element | null
  utility: "modal" | "normal" | "with-arrow"
  handleLeftClick?: () => void
  title?: string | [string, number] | undefined
}): JSX.Element {
  let headerTitle
  let headerLeftButton

  if (utility === "with-arrow") {
    headerLeftButton = (
      // * 回上一頁路徑
      <Link href="/">
        <ICArrow className={classes.arrow} />
      </Link>
    )
  }
  if (utility === "modal") {
    headerLeftButton = (
      <button onClick={handleLeftClick}>
        <ICCloseModel />
      </button>
    )
  }
  if (utility === "normal") {
    headerLeftButton = <></>
  }

  if (title && typeof title === "string") {
    headerTitle = <span>{title}</span>
  }
  if (title && typeof title === "object") {
    const [name, postNum] = title
    headerTitle = (
      <div>
        <p>{name}</p>
        <p className={classes.number}>{`${postNum}推文`}</p>
      </div>
    )
  }
  return (
    <header className={classes.header}>
      {headerLeftButton}
      {headerTitle}
      {headerRightButton}
    </header>
  )
}

export default Header
