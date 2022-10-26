function Header({
  headerLeftButton = null,
  title = null,
  headerRightButton = null
}: {
  headerLeftButton?: JSX.Element | null
  title?: JSX.Element | null
  headerRightButton?: JSX.Element | null
}): JSX.Element {
  return (
    <header>
      {headerLeftButton}
      {title}
      {headerRightButton}
    </header>
  )
}

export default Header