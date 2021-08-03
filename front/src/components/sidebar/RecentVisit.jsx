import React from 'react';
import styled from 'styled-components';

const RecentItems = styled.span`
  height: 14rem;
  padding: 0.6rem;
  font-size: 0.9em;
`

const RecentTextSpan = styled.span`
  display: flex;
  flex-direction: column;
  border-bottom: 3px dotted rgb(153, 150, 150);
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight:bold;
  text-align:center;
`


const RecentVisit = () => {
  return (
    <>
      <RecentItems >
        <RecentTextSpan className='recent-Text'>
          <span>최근본상품</span>
          <span>n</span>
        </RecentTextSpan>

      </RecentItems>
    </>
  )
}

export default RecentVisit;