type props = {
  onClose: () => {},
  handleSubmit: () => {},
  content: JSX.Element,
  formContent: JSX.Element
}

const ModalTemplate = (props: props) => {
  return (
    <dialog onClose={props.onClose}>
      {props.content}
      <form method="dialog" onSubmit={props.handleSubmit}>
        {props.formContent}
        {/* Button */}
      </form>
    </dialog>
  )
}

export default ModalTemplate
