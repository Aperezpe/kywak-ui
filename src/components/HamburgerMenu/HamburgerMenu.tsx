import React, { useState } from 'react'
import './HamburgerMenu.scss';
import classNames from 'classnames';

type Props = {}

const HamburgerMenu = (props: Props) => {
  const [ checked, setChecked ] = useState(false); 

  const hamburgerMenuClasses = classNames('hamburger-menu' , {
    'hamburger-menu--checked': checked
  });

  return (
    <div 
      className={hamburgerMenuClasses} 
      onClick={() => setChecked(!checked)}
    ></div>
  )
}

export default HamburgerMenu;