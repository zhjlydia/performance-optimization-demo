import React, { useState } from 'react'
import dogImg from '@/assets/dog2.png'
import { setUTCTime } from '@/utils/timeFormat'

const WebVitalsDemo: React.FC = () => {
  const [show, setShow] = useState(false)

  const onClick = () => {
    setShow(true)
  }

  return (
    <>
      <img src={dogImg} alt="" />
      <div>
        <button onClick={onClick}>click me</button>
        {show && <p>Good job!</p>}
        {setUTCTime()}
      </div>
    </>
  )
}
export default WebVitalsDemo
