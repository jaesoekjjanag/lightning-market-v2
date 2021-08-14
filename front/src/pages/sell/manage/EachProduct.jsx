import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { REMOVE_MYPOST } from '../../../reducer/user'

const Tr = styled.tr`
height:170px;
border-bottom:0.1px solid lightgray;
`
const Img = styled.img`
width:150px;
height:150px;
border:1px solid black;
`
const Select = styled.select`
height:40px;
border-radius:3px;
padding:0 0.1rem;
font-size: 1.15rem;
option{
  box-sizing:content-box;
  font-size:1em;
  padding:20px;
}

`
const Title = styled.td`
text-overflow: ellipsis;
over-flow: hidden;
white-space:nowrap;
`
const LinkgTag = styled(Link)`
color:rgb(0, 114, 230);
font-weight:500;
&:visited{
  color:rgb(0, 114, 230);
}
&:hover{
  text-decoration:underline;
}
`
const Buttons = styled.td`
div{
  cursor:pointer;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 0.1rem 0;
  border-radius: 2px;
}
`

const EachProduct = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product)

  // address: "서울 관악구 봉천동"
  // amount: 1
  // condition: "old"
  // createdAt: "2021-08-14T03:20:35.261Z"
  // description: "아마도..?"
  // exchange: false
  // image: (2) ["man_1628918122262.png", "plus_1628918122263.png"]
  // price: 123
  // seller: "6114bdb8a6c67849083d5a78"
  // title: "사람 이미지가 대표 이미지로 설정 됩니다."
  // __v: 0
  // _id: "611751798be5e509fcd37ecd"

  const onClickDelete = async () => {
    const confirm = window.confirm('정말로 게시글을 삭제하시겠습니까?')
    if (confirm) {
      await axios.delete(`/post?id=${product._id}`)
        .then(res => {
          dispatch({ type: REMOVE_MYPOST, id: product._id })
          alert(res.data)
        })
        .catch(err => console.log(err))
    }
  }
  return (
    <Tr>
      <td><LinkgTag to={`/product/${product._id}`}><Img src={`http://localhost:5000/${product.image[0]}`} alt="" /></LinkgTag></td>
      <td>
        <Select name="판매상태" id="판매상태">
          <option value="판매 중">판매 중</option>
          <option value="예약 중">예약 중</option>
          <option value="판매완료">판매완료</option>
        </Select>
      </td>
      <Title><LinkgTag to={`/product/${product._id}`}>{product.title}</LinkgTag></Title>
      <td>{product.price}</td>
      <td>찜/댓글</td>
      <td>최근수정일</td>
      <Buttons>
        <div>수정</div>
        <div onClick={onClickDelete}>삭제</div>
      </Buttons>
    </Tr>
  )
}

export default EachProduct
