const Alert = ({ content, color }) => {
  return (
    <div className={`alert alert-${color} my-2`}>{content}</div>
  )
}

export default Alert
