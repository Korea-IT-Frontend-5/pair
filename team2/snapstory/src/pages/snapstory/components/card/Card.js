import React from 'react'
import Comment from '../comment/Comment'
import Contents from '../contents/Contents'
import Regist from '../regist/Regist'
import Swiper from '../swiper/Swiper'
import Utils from '../utils/Utils'

function Card() {
  return (
    <>
      <Utils />
      <div>
        <Swiper/>
        <Contents/>
      </div>
      <div>
        <Comment/>
        <Regist/>
      </div>
    </>
  )
}

export default Card
