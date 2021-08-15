import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import Comment from './comment';
import Input from './Input';
import Right from './Right';

// * 왼쪽 상단 상품정보
const LeftMainWrap = styled.div`
  flex: 1 1 0%;
`
const LeftSubWrap = styled.div`
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
`
export const Info = styled.div`
  font-size: 18px;
  padding: 30px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
`
const Description = styled.div`
  white-space: pre-wrap;
  padding: 40px 0px;
  line-hieght: 1.5;
  border-bottom: 1px solid rgb(238, 238, 238);

`
// * 왼쪽 하단 상품문의
const AskWrap = styled.div`
  margin-top: 10px;
`
const InfoAsk = styled(Info)`
  padding: 60px 0 16px;
`
const AskCount = styled.span`
  padding-left: 7px;
  color: red;
`
const CommentsWrap = styled.div`
  margin-top: 10px;
  padding-bottom: 70px;
`


const Bottom = ({ product }) => {

  //* 댓글 목록
  const [comments, setComments] = useState([]);


  //* 댓글 목록 불러오기
  useEffect(() => {
    if (product._id) {
      axios.get(`/comment/comments?productId=${product._id}`)
        .then((res) => {
          setComments((prev) => (prev.concat(res.data))
          )
        })
    }
  }, [product])





  return <>
    <div style={{ display: "flex", marginTop: "30px" }}>

      <LeftMainWrap >
        <LeftSubWrap>
          <div>
            <Info>상품정보</Info>
            <Description>
              {product.description}
            </Description>
          </div>
          <AskWrap>
            <InfoAsk>
              상품문의
              <AskCount>{comments.length}</AskCount>
            </InfoAsk>
            <Input product={product} setComments={setComments} />
            <CommentsWrap>
              {comments.map((v) => (<Comment data={v} key={v} setComments={setComments} />))}
            </CommentsWrap>
          </AskWrap>
        </LeftSubWrap>
      </LeftMainWrap>
      <Right product={product} />
    </div>
  </>
};

export default Bottom;