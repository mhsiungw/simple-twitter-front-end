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
      <a href="#" className={classes.arrow}>
        <ICArrow />
      </a>
    )
  }
}

export default HeaderLeftButton
