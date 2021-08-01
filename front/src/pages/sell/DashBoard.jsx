import React from 'react'
import styled from 'styled-components';

const DashBoardUl = styled.ul`
  
`
const DashBoard = () => {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>사진</li>
          <li>판매상태</li>
          <li>상품명</li>
          <li>가격</li>
          <li>안전결제 환영</li>
          <li>찜/댓글</li>
          <li>최근수정일</li>
          <li>기능</li>
        </ul>
      </div>
      <div></div>
    </React.Fragment>
  )
}

export default DashBoard;