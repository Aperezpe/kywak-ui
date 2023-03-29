import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
}

const Button: React.FC<Props> = ({ outline, ...rest }) => {

  const { children, className } = rest; 

  const btnClass = classNames(
    `
      w-[60%] 
      h-20 border-2 
      bg-[var(--color-tertiary)] 
      rounded-full 
      text-[var(--color-secondary)] 
      text-xl 
      uppercase 
      tracking-widest 
      border-[var(--color-tertiary)]
      font-medium
      drop-shadow
      ${className}
    `, {
    'bg-transparent': outline,
    'text-[var(--color-tertiaty)]': outline,

  })

  return (
    <button { ...rest } className={btnClass}>{children}</button>
  )
}

export default Button