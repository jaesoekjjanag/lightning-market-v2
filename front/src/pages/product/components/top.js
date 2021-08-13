import React from 'react';
import styled from 'styled-components'


const Wrap = styled.div`
  display: flex;
  padding: 30px 0px;
`
const ImageWrap = styled.div`
  margin-right: 40px;
  flex-shrink: 0;
  width: 430px;
  height: 430px;
  border: 0.5px solid rgb(208,208,208);
  
  & img{
    height:100%;
    width:100%;
    object-fit:cover;
  }
`
const InfoMainWrap = styled.div`
  flex-grow: 1
`
const InfoSubWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TitleCost = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(238,238,238);
  width: 100%;
`
const Title = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
  line-height: 1.4;
`
const Cost = styled.div`
  font-size: 40px;
  font-weight: 500;
`
const Won = styled.span`
  font-size: 28px;
  font-weight: 400;
  margin-left: 5px;
`
const JjimTimeMainWrap = styled.div`
  height: 30px;
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
`
const JjimTimeSubWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
const IconWrap = styled.div`
  display: flex;
  align-itmes: center;
  color: rgb(204,204,204);
  fotn-size: 16px;
  height: 100%;
  line-height: 100%;
  vertical-middle: middle;
`
const Number = styled.div`
  // width: 16px;
  // height: 16px;
  font-size: 16px;
  margin-left: 5px;

  &::after {
    content: "";
    width: 1px;
    height: 12px;
    border-right: 1px solid rgb(238,238,238);
    margin: 0 10px;
  }
`
const StateWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
  font-size: 14px;
`
const StateTitle = styled.div`
  position: relative;
  width: 90px;
  padding-left: 15px;
  color: rgb(153,153,153);

  &::before{
    content: "";
    position: absolute;
    top: 7px;
    left: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgb(204, 204, 204);
    box-sizing: border-box
  }
`
const State = styled.div`
  position: relative;
  display: flex;
`
const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const Btn = styled.button`
  flex: 1 1 0%;
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
`
const BtnJjimWrap = styled.div`
  flex: 1 1 0%;
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
  position: relative;
`
const BtnJjim = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  background: rgb(204, 204, 204);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 18px;
`
const CallBtn = styled(Btn)`
  background: rgb(255, 164, 37);
  border: 1px solid rgb(243, 150, 20);
  color: rgb(255, 255, 255);
`
const BuyBtn = styled(Btn)`
  background: rgb(247, 0, 0);
  border: 1px solid rgb(223, 0, 0);
  color: rgb(255, 255, 255);
  margin-right: 0px;
`


const Top = ({product}) => {
  //id는 게시글의 id

  return <>
    <Wrap>
      <ImageWrap>
          <img src={`http://localhost:5000/${product.image}`} alt="대표이미지"/>          
      </ImageWrap>
      <InfoMainWrap>
        <InfoSubWrap>
          <TitleCost>
            <Title>
              {product.title}
            </Title>
            <Cost>
              {product.price}
              <Won>원</Won>
            </Cost>
          </TitleCost>
          
          <JjimTimeMainWrap>
            <JjimTimeSubWrap>
              <IconWrap>
                <img src="jjim-heart.png" width="16" height="16" alt="상품 상태 - 하트 아이콘"/>
                <Number>10</Number>
              </IconWrap>
              <IconWrap>
                <img src="clock.png" width="16" height="16" alt="상품 상태 - 시계 아이콘"/>
                <Number>8시간 전</Number>
              </IconWrap>
            </JjimTimeSubWrap>
          </JjimTimeMainWrap>

          <div>
            <StateWrap>
              <StateTitle>상품상태</StateTitle>
              <State>{product.condition}</State>
            </StateWrap>
            <StateWrap>
              <StateTitle>교환여부</StateTitle>
              <State>{product.exchange}</State>
            </StateWrap>
            <StateWrap>
             <StateTitle>배송비</StateTitle>
             <State>{product.shippng}</State>
            </StateWrap>
            <StateWrap>
             <StateTitle>거래지역</StateTitle>
             <State>{product.address}</State>
            </StateWrap>
          </div>

          <BtnWrap>
            <BtnJjimWrap>
              <BtnJjim>
                <img src="jjim-heart-white.svg" width="16" height="16" alt="찜 아이콘"/>
                <span style={{ margin: '0 5px' }}>찜</span>
                <span>10</span>
              </BtnJjim>
            </BtnJjimWrap>
            
            <CallBtn>연락하기</CallBtn>
            <BuyBtn>바로구매</BuyBtn>

          </BtnWrap>

        </InfoSubWrap>
      </InfoMainWrap>
    </Wrap>
      
  </>
};

export default Top;
