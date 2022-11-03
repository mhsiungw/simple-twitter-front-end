import { ICCloseModel, ICArrow } from "./icons"
import classes from './style.module.scss'

function HeaderLeftButton({
  currentUtility = ""
}: {
  currentUtility?: string
}): JSX.Element {
  if (currentUtility === "model") {
    return (
      <button>
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
