import React from 'react'
import KywakLogo from '../KywakLogo/KywakLogo';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='absolute flex justify-between p-10 items-center h-36 w-screen z-50'>
      <KywakLogo />
      <HamburgerMenu />
    </div>
  )
}

export default Navbar;