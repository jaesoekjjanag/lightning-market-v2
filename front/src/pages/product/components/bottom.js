import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import Comment from './comment';

// * 왼쪽 상단 상품정보
const LeftMainWrap = styled.div`
  flex: 1 1 0%;
`

const LeftSubWrap = styled.div`
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
`
const Info = styled.div`
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
const InputWrap = styled.div`
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  border-left: 1px solid rgb(238, 238, 238);
`
const TextareaWrap = styled.div`
  width: 100%;
  padding: 20px;
  height: 100px;
  border-bottom: 1px solid rgb(238, 238, 238);
`
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 13px;
  line-height: 1.5;
  border: none;
  outline: none;
`
const AskPostWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`
const CharCount = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: rgb(136, 136, 136);
`
const PostBtn = styled.button`
  border: 1px solid rgb(238, 238, 238);
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 13px;
  color: rgb(136, 136, 136);
`
const CommentsWrap = styled.div`
  margin-top: 10px;
  padding-bottom: 70px;
`

// * 오른쪽 상점정보 css
const RightWrap = styled.div`
  width: 330px;
  
`
const ShopWrap = styled.div`
  border-right: 1px solid rgb(238, 238, 238);
  padding: 0px 32px 118px;
  position: relative;
  
`


const Bottom = ({product}) => {
  // * 상품문의 길이 
  const [askLen, setAskLen] = useState(0);

  // * 상품문의 길이 계산
  const charLength = (e) => {
    setAskLen(e.target.value.length);
  };

  const user = {
    shopName: "yujin",
    comment: '홧팅입니다요!',
    profile: '',
  }

  return <>
    <div style={{display: "flex", marginTop:"30px"}}>

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
              <AskCount>1</AskCount>
            </InfoAsk>
            <InputWrap>
              <TextareaWrap>
                <TextArea placeholder="상품문의 입력" maxLength="100" onInput={charLength}></TextArea>
              </TextareaWrap>
              <AskPostWrap>
                <CharCount>{askLen} / 100</CharCount>
                <PostBtn>
                  <img width="15" height="16" src="pencil.png" alt="문의등록버튼 아이콘" style={{ marginRight: "4px" }}/>
                  등록
                </PostBtn>
              </AskPostWrap>
            </InputWrap>
            <CommentsWrap>
              <Comment data={user} />
            </CommentsWrap>

          </AskWrap>

        </LeftSubWrap>
      </LeftMainWrap>

      <RightWrap>
        <ShopWrap>
          <div>
            <Info>상점정보</Info>
          </div>
        </ShopWrap>
      </RightWrap>

    </div>
  </>
};

export default Bottom;