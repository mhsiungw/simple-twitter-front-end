import { ICCloseModel, ICArrow } from "./icons"
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
      <a className={classes.arrow} onClick={handleClick}>
        <ICArrow />
      </a>
    )
  }
}

export default HeaderLeftButton
