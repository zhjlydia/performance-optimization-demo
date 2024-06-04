import React from 'react'
import dogImg from '@/assets/dog1.jpg'
import { setUTCTime } from '@/utils/timeFormat'

const WebVitalsDemo: React.FC = () => {
  return (
    <>
      <img src={dogImg} alt="" />
      <div>{<p>Test chunks!{setUTCTime()}</p>}</div>
    </>
  )
}
export default WebVitalsDemo
