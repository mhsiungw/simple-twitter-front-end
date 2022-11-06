import classes from "./style.module.scss"

function Header({
  headerLeftButton = null,
  headerTitle = null,
  headerRightButton = null
}: {
  headerLeftButton?: JSX.Element | null
  headerTitle?: JSX.Element | null
  headerRightButton?: JSX.Element | null
}) {
  return (
    <header className={classes.header}>
      {headerLeftButton}
      {headerTitle}
      {headerRightButton}
    </header>
  )
}

export default Header
