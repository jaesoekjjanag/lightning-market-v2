import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Info } from './bottom';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW, UNFOLLOW } from '../../../reducer/user';

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
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit:cover;
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
    color: rgb(153, 153, 153);
  }
  & > div:first-child{
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

const Right = ({ product }) => {
  const { follow, id } = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch();
  // const userId = decodeURIComponent(document.cookie.split(';')[1]).replace('id=j:', '').match(/[^"]/g).splice(1).join('')

  const onClickFollow = async () => {
    try {
      const res = await axios.post('/user/follow', { followTo: product.seller._id, followFrom: id })
      console.log(res.data);
      dispatch({
        type: FOLLOW,
        follow: res.data
      })
    } catch (err) {
      return console.error(err.response.data)
    }
  }
  const followTo = follow.map(v => v.followTo)
  const isFollowing = followTo.includes(product.seller?._id);
  const me = product.seller?._id === id

  const onClickFollowing = async () => {
    try {
      const res = await axios.delete(`/user/follow?followTo=${product.seller._id}&followFrom=${id}`)
      console.log(res.data)
      dispatch({
        type: UNFOLLOW,
        follow: res.data,
      })
    } catch (err) {
      console.error(err)
    }
  }

  console.log(product.seller)
  return (
    <RightWrap>
      <ShopWrap>
        <Info>상점정보</Info>
        <InfoWrap>
          {product &&
            <Link to={`/myshop/${product.seller._id}/product`}>
              <ShopInfo>
                <ShopProfileWrap>
                  <img src={`http://localhost:5000/profile/${product.seller.profile}`} alt="판매자 프로필 이미지" />
                </ShopProfileWrap>
                <div>
                  <ShopName>{product.seller.nickname}</ShopName>
                  <SellerInfo>
                    <div>상품 1개</div>
                    <div>팔로워 100만명</div>
                  </SellerInfo>
                </div>
              </ShopInfo>
            </Link>}

          {me || (isFollowing
            ? <FollowBtn onClick={onClickFollowing}>
              <img src="팔로잉.png" alt="following.png" />
              팔로잉
            </FollowBtn>
            : <FollowBtn onClick={onClickFollow}>
              <img src="following.png" alt="following.png" />
              팔로우
            </FollowBtn>)}
          <ProductsImgWrap>
            <div><img src="thunder-profile.png" alt="" /></div>
            <div><img src="thunder-profile.png" alt="" /></div>
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
                <img src="thunder-profile.png" alt="리뷰작성자 프로필 이미지" />
              </ReviewerProfile>
              <ReviewerWrap>
                <ReviewerNickname>
                  <a href="#">리뷰어닉네임</a>
                  <div>1달 전</div>
                </ReviewerNickname>
                <StartReview>
                  <img src="star.png" alt="별점 별 이미지" />
                  <img src="star.png" alt="별점 별 이미지" />
                  <img src="star.png" alt="별점 별 이미지" />
                  <img src="star.png" alt="별점 별 이미지" />
                  <img src="star.png" alt="별점 별 이미지" />
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
  )
}

export default Right
