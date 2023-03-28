import React from 'react'
import KywakLogo from '../KywakLogo/KywakLogo';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='absolute flex justify-between p-10 items-center h-36 w-screen'>
      <KywakLogo />
      <HamburgerIcon />
    </div>
  )
}

export default Navbar;