import React from 'react';
import styled from 'styled-components';

const BlockWrapper = styled.div`
  border:0.3px solid rgb(216, 214, 214)
`
const ItemImg = styled.img`
  height: 70%;
  width: 100%;
  border-bottom: 0.3px solid rgb(216, 214, 214)
`
const ImgDescr = styled.div`
  display:flex;
  flex-direction: column;
  text-align:start;
  padding: 0.7rem;
`

const PriceHours = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
`
const ImgPrice = styled.span`
  font-weight: 500;
`
const HoursAgo = styled.span`
  font-size: 0.8em;
`

const ImgBlock = ({ title, price }) => {

  return (
    <React.Fragment>
      <BlockWrapper className='blockWrapper'>
        <ItemImg className='itemImg' src="http://placehold.it/100" alt="" />
        <ImgDescr className='img-descr'>
          <div className='img-title'>{title}</div>
          <PriceHours>
            <ImgPrice className='img-price'>{price} 원</ImgPrice>
            <HoursAgo className='hoursAgo'>1시간 전</HoursAgo>
          </PriceHours>
        </ImgDescr>
      </BlockWrapper>
    </React.Fragment>
  )
}

export default ImgBlock;