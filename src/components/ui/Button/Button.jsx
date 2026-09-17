import './Button.css'
export default function Button({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'md',
}) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
