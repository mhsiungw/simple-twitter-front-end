import classes from "./style.module.scss"

function HeaderTitle({
  title = ""
}: {
  title?: string | [string, string | number]
}): JSX.Element {
  if (typeof title === "string") {
    return <span>{title}</span>
  }
  return (
    <div>
      <p>{title[0]}</p>
      <p className={classes.number}>{`${title[1]}推文`}</p>
    </div>
  )
}

export default HeaderTitle
