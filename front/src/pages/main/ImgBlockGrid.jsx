import React from 'react';
import styled from 'styled-components';
import ImgBlock from './ImgBlock';

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows: repeat(5, 1fr);
  gap:8px;
  height: 1400px;
  padding-top: 100px;
`
// const Imgs = styled.div`
//   border:1px solid black;
// `
const ImgBlockGrid = () => {

  const merchandises = {
    '프라다': '4,000,000',
    '구찌': '2,400,000',
    '루이비통': '3,000,000',
    '생로랑': '3,800,000',
    '지오다노': '40,000',
    '벽시계': '3,000',
    '대나무 숟가락': '500',
    '페라리': '100,000,000'
  }

  // const ImgBlockMap = merchandises.map(val =>
  //   <ImgBlock title={val.} price ={}/>)

  function ImgBlockMap() {
    let mappedMerchandises = [];
    for (let i in merchandises) {
      mappedMerchandises.push(<ImgBlock key={merchandises[i] + i} title={i} price={merchandises[i]} />);
    }

    return mappedMerchandises
  }

  return (
    <React.Fragment>
      <ImagesWrapper className="ImagesWrapper">
        {/* {ImgBlockMap} */}
        {ImgBlockMap()}
      </ImagesWrapper>
    </React.Fragment>
  )
}

export default ImgBlockGrid;