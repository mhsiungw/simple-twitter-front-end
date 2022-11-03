import { ICCloseModel, ICArrow } from "./icons"

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
      <a href="#">
        <ICArrow />
      </a>
    )
  }
}

export default HeaderLeftButton
