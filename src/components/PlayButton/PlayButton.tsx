import React from 'react'
import './PlayButton.scss';

type Props = {}

const PlayButton = (props: Props) => {
  return (
    <div className='play-button rounded-full'>
      <div className='play-button__middle-fill'></div>
    </div>
  )
}

export default PlayButton