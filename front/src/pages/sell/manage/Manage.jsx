import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import EachProduct from './EachProduct'

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

const Table = styled.table`
  width:100%;
  text-align:center;
  border-collapse:collapse;
`
const ItemInfo = styled.thead`
  font-size: 1em;
  line-height: 2em;
  border-top:0.1px solid black;
  border-bottom:0.1px solid black;


`

const Manage = () => {
  const myProducts = useSelector(state => state.user.posts)
  console.log(myProducts)
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
      <Table>
        <ItemInfo>
          <tr>
            <th style={{ width: '180px' }}>사진</th>
            <th>판매상태</th>
            <th style={{ width: '250px' }}>상품명</th>
            <th>가격</th>
            <th>찜/댓글</th>
            <th>최근수정일</th>
            <th>기능</th>
          </tr>
        </ItemInfo>
        <tbody>
          {myProducts.map((v, i) => (
            <EachProduct product={v} />
          ))}
        </tbody>

      </Table>
    </React.Fragment>

  )
}

export default Manage
