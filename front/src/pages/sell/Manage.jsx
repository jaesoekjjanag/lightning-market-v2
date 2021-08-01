import React from 'react'
import DashBoard from './DashBoard'

const Manage = () => {
  return (
    <React.Fragment>
      <div className='filter'>
        <input type="text" placeholder='상품을 입력해주세요' />
        <select name="" id="">
          <option value="">10개씩</option>
          <option value="">20개씩</option>
          <option value="">50개씩</option>
        </select>
        <select name="" id="">
          <option value="">전체</option>
          <option value="">판매중</option>
          <option value="">예약중</option>
          <option value="">판매완료</option>
        </select>
      </div>
      <DashBoard />
    </React.Fragment>
  )
}

export default Manage