import React, { FC, ReactElement, ReactNode } from 'react'
import classNames from 'classnames';

type Props = {
  children: ReactNode,
  imageUrl: string
}

const HeroHeader: FC<Props> = ({ children, imageUrl }) => {

  const classes = classNames(
  `
    h-screen 
    bg-no-repeat  
    bg-cover 
    bg-center 
    bg-[url('${imageUrl}')]  
    bg-black 
    bg-opacity-50 
    bg-blend-darken 
    -z-10
  `);

  return (
    <header>
      {children}
      <div className={classes}></div>
    </header>
  )
}

export default HeroHeader