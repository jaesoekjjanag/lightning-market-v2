import React from 'react'
import styled from 'styled-components'

const FilterDiv = styled.div`
  margin-bottom: 2rem;

  &>*{
    height: 3.2rem;
    box-sizing: border-box;
    margin-right: 1rem;
  }

  & input{
    line-height:1;
    width: 35%;
    padding: 5px
  }

  & select{
    width: 10%;
    padding: 5px;
  }
`
const ItemInfo = styled.ul`
  display:flex;
  justify-content:space-around;
  list-style:none;
  text-align:center;
  border-top:0.5px solid gray;
  border-bottom: 0.5px solid gray;
  font-size: 1em;
  line-height: 2em;
  padding:0;
`

const Manage = () => {
  return (
    <React.Fragment>
      <FilterDiv className='filter'>
        <input type="text" placeholder='상품명을 입력해주세요' />
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
      </FilterDiv>
      <div>
        <ItemInfo>
          <li>사진</li>
          <li>판매상태</li>
          <li>상품명</li>
          <li>가격</li>
          <li>찜/댓글</li>
          <li>최근수정일</li>
          <li>기능</li>
        </ItemInfo>
      </div>
    </React.Fragment>

  )
}

export default Manage
