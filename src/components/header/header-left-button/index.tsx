import Link from "next/link"
import { ICCloseModel, ICArrow } from "../icons"
import classes from "./style.module.scss"

function HeaderLeftButton({
  currentUtility = "",
  handleClick
}: {
  currentUtility?: string
  handleClick?: () => void
}): JSX.Element {
  if (currentUtility === "modal") {
    return (
      <button onClick={handleClick}>
        <ICCloseModel />
      </button>
    )
  } else if (currentUtility === "main") {
    return <></>
  } else {
    return (
      // * 回上一頁路徑
      <Link className={classes.arrow} href="/">
        <ICArrow />
      </Link>
    )
  }
}

export default HeaderLeftButton
