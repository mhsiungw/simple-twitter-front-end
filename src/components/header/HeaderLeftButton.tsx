import { ICCloseModel, ICArrow } from "./icons"
import classes from "./style.module.scss"

function HeaderLeftButton({
  currentUtility = "",
  onClick
}: {
  currentUtility?: string
  onClick?: () => void
}) {
  if (currentUtility === "modal") {
    return (
      <button className={classes["close-modal"]} onClick={onClick}>
        <ICCloseModel />
      </button>
    )
  } else if (currentUtility === "main") {
    return <></>
  } else {
    return (
      // TODO: a不要使用href的方式傳遞
      <a className={classes.arrow} onClick={onClick}>
        <ICArrow />
      </a>
    )
  }
}

export default HeaderLeftButton
