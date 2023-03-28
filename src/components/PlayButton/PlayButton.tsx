import React from 'react'
import './PlayButton.scss';

type Props = {}

const PlayButton = (props: Props) => {
  return (
    <div className='play-button rounded-full bg-white'>
      <div className='play-button__middle-fill'></div>
    </div>
  )
}

export default PlayButton