import React from 'react';
import styled from 'styled-components';

const BlockWrapper = styled.div`
  border:0.3px solid rgb(216, 214, 214);
  height:280px;
  width:200px;
`
const ItemImg = styled.img`
  height: 70%;
  width: 100%;
  border-bottom: 0.3px solid rgb(216, 214, 214)
`
const Title = styled.div`
  line-height:1rem;
  height:1rem;
  
  h5{
    font-size:0.9rem;
    font-weight:500;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
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
  font-size: 0.7em;
`

const ImgBlock = ({ data }) => {
  console.log(data.createdAt)
  const duration = new Date() - new Date(data.createdAt)
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60)

  let time = ''

  if (minutes < 1) {
    time = seconds + '초 전'
  } else if (hours < 1) {
    time = minutes + '분 전'
  } else {
    time = hours + '시간 전'
  }

  return (
    <React.Fragment>
      <BlockWrapper className='blockWrapper'>
        <ItemImg className='itemImg' src={`http://localhost:5000/${data.image[0]}`} alt="" />
        <ImgDescr className='img-descr'>
          <Title className='img-title'><h5>{data.title}</h5></Title>
          <PriceHours>
            <ImgPrice className='img-price'><h4>{data.price} 원</h4></ImgPrice>
            <HoursAgo className='hoursAgo'>{time}</HoursAgo>
          </PriceHours>
        </ImgDescr>
      </BlockWrapper>
    </React.Fragment>
  )
}

export default ImgBlock;