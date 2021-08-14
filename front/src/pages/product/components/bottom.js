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

  & > * {
    width: 15px;
    height: 16px;
    margin-right: 4px;
  }
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
  height: 100%;
  border-right: 1px solid rgb(238, 238, 238);
  padding: 0px 32px 118px;
  position: relative;

`
const InfoWrap = styled.div`
  padding: 0px 10px;
`
const ShopInfo = styled.div`
  display: flex;
  margin: 20px 0 16px 0;
`
const ShopProfileWrap = styled.div`
  margin-right: 16px;
  & > * {
    width: 48px;
    height: 48px;
    border-radious: 50%;
  }
`
const ShopName = styled.a`
  display: block;
  margin: 4px 0px 11px;
  font-size: 14px;
`
const SellerInfo = styled.div`
  display: flex;
  & > * {
    font-size: 13px;
  }
  & > a:first-child{
    color: rgb(153, 153, 153);
    margin-right: 17px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 3px;
      right: -9px;
      width: 1px;
      height: 12px;
      border-right: 1px solid rgb(204, 204, 204);
    }
  }
  & > a:last-child{
    color: rgb(153, 153, 153);
  }
`
const FollowBtn = styled.div`
  width: 100%;
  height: 32px;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(136, 136, 136);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 13px;
  border-radius: 2px;
  cursor: pointer;

  & > img {
    width: 20px;
    height: 14px;
    margin-right: 3px;
  }
`
const ProductsImgWrap = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  & > div:first-child{
    margin-right: 5px;
  }

  & > div > img {
    width:120px;
    height: 96px;
  }
`
const MoreProductsDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
`
const MoreProductsA = styled.a`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: rgb(102, 102, 102);

  &::after {
    content: "";
    transform: rotate(-45deg);
    border-style: solid;
    border-color: rgb(136, 136, 136);
    border-image: initial;
    border-width: 0px 1px 1px 0px;
    display: inline-block;
    padding: 2.5px;
    margin-left: 3px;
    margin-top: 1.5px;
  }
`
const MoreProductsCount = styled.span`
  color: rgb(247, 47, 51);
  margin-right: 3px;
`
const ShopReview = styled.div`
  padding: 30px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
  font-size: 14px;
`
const ShopReviewCount = styled.span`
  margin-left: 5px;
  color: red;
`
const ReviewWrap = styled.div`
  display: flex;
  padding-top: 16px;
`
const ReviewerProfile = styled.a`
  margin-right: 12px;
  display: flex;

  & > img {
    width:32px;
    height:32px;
    border-radius: 50%;
  }
`
const ReviewerWrap = styled.div`
  padding-bottom: 16px;
  width: 100%;
`
const ReviewerNickname = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(178, 178, 178);
  margin-bottom: 5px;

  & > a {
    color: rgb(178, 178, 178);
    font-size: 13px;
    font-weight: 500;
  }

  & > div {
    font-size: 12px;
  }
`
const StartReview = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > img {
    width: 15px;
    heiht: 14px;
  }
`
const ReviewContent = styled.span`
  font-size: 13px;
  color: rgb(136, 136, 136);
  line-height: 1.2;
  letter-spacing: -0.5px;
`
const MoreReviews = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  
`
const MoreReviewsBtn = styled.a`
  font-size: 13px;
  display: flex; 
  align-items: center;
  color: rgb(102, 102, 102);
  cursor: pointer;

  &::after {
    content: "";
    transform: rotate(-45deg);
    border-style: solid;
    border-color: rgb(136, 136, 136);
    border-image: initial;
    border-width: 0px 1px 1px 0px;
    display: inline-block;
    padding: 2.5px;
    margin-left: 3px;
    margin-top: 1.5px;
  }
`
const CallBuyBtn = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  padding: 16px;
`
const BtnCss = styled.button`
flex: 1 1 0%;
  display: flex;
  
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
  font-weight: 600;
`
const CallBtn = styled(BtnCss)`
  margin-right: 10px;
  background: rgb(255, 164, 37);
  border: 1px solid rgb(243, 150, 20);
  color: rgb(255, 255, 255);
`
const BuyBtn = styled(BtnCss)`
  background: rgb(247, 0, 0);
  border: 1px solid rgb(223, 0, 0);
  color: rgb(255, 255, 255);
`


const Bottom = ({product}) => {
  console.log(product)
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
                  <img src="pencil.png" alt="문의등록버튼 아이콘" />
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
          <Info>상점정보</Info>
          <InfoWrap>
            <ShopInfo>
              <ShopProfileWrap>
                <img src="thunder-profile.png" alt="판매자 프로필 이미지"/>
              </ShopProfileWrap>
              <div>
                <ShopName>{product.seller.nickname}</ShopName>
                <SellerInfo>
                  <a href="#">상품6</a>
                  <a href="#">팔로워6</a>
                </SellerInfo>
              </div>
            </ShopInfo>
            <FollowBtn>
              <img src="following.png" alt=""/>
              팔로우
            </FollowBtn>
            <ProductsImgWrap>
              <div><img src="thunder-profile.png" alt=""/></div>
              <div><img src="thunder-profile.png" alt=""/></div>
            </ProductsImgWrap>
            <MoreProductsDiv>
              <MoreProductsA href="#">
                <MoreProductsCount>10개</MoreProductsCount>
                상품 더보기
              </MoreProductsA>
            </MoreProductsDiv>
            <div>
              <ShopReview>
                상점후기
                <ShopReviewCount>1</ShopReviewCount>
              </ShopReview>
              <ReviewWrap>
                <ReviewerProfile>
                  <img src="thunder-profile.png" alt="리뷰작성자 프로필 이미지"/>
                </ReviewerProfile>
                <ReviewerWrap>
                  <ReviewerNickname>
                    <a href="#">리뷰어닉네임</a>
                    <div>1달 전</div>
                  </ReviewerNickname>
                  <StartReview>
                    <img src="star.png" alt="별점 별 이미지"/>
                    <img src="star.png" alt="별점 별 이미지"/>
                    <img src="star.png" alt="별점 별 이미지"/>
                    <img src="star.png" alt="별점 별 이미지"/>
                    <img src="star.png" alt="별점 별 이미지"/>
                  </StartReview>
                  <ReviewContent>포장도 꼼꼼하고 배송도 빠르게 해주셨습니다~^^</ReviewContent>
                </ReviewerWrap>
              </ReviewWrap>
              <MoreReviews>
                <MoreReviewsBtn href="#">상점후기 더보기</MoreReviewsBtn>
              </MoreReviews>
            </div>
          </InfoWrap>
          <CallBuyBtn>
            <CallBtn>연락하기</CallBtn>
            <BuyBtn>바로구매</BuyBtn>
          </CallBuyBtn>
        </ShopWrap>
      </RightWrap>
    </div>
  </>
};

export default Bottom;