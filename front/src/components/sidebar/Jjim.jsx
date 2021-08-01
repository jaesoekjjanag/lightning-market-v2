import React, { react } from 'react'
import styled from 'styled-components';


const Heart = styled.span`
  height: 3.5rem;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
`;

// const HeartIcon = styled.img`
//   width:0.7rem;
//   color: var(--main-color);
// `
const Jjim = ({ jjim }) => {


  return (
    <React.Fragment>
      <Heart className='heart'>
        찜
        <div>
          {/* <HeartIcon className='heart-icon' src="heart-solid.svg" alt="heat-icon" /> */}
          💛
          <span id='heart-count'>{jjim}</span>
        </div>
      </Heart>
    </React.Fragment>
  )
}

export default Jjim;