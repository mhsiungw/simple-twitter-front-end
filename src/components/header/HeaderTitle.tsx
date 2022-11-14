import classes from "./style.module.scss"

function HeaderTitle({ title = "" }: { title?: string | [string, string] }):JSX.Element {
  if (typeof title === "string") {
    return <span>{title}</span>
  }
  return (
    <div>
      <p>{title[0]}</p>
      <p className={classes["header__post-number"]}>{title[1]}</p>
    </div>
  )
}

export default HeaderTitle
