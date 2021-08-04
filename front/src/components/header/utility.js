import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkTagStyle } from '../../pages/main';

const StyledUtility = styled.ul`
    list-style: none;
    padding: 0;
`;

const UtilityList = styled.li`
    float:left;
    margin-left: 30px;
    position: relative;
`


const Utility = () => {

    return <React.Fragment>
        <StyledUtility>
            <LinkTagStyle />
            <UtilityList className="utilityAfter">
                <Link to='/sell/register'>판매하기</Link>
            </UtilityList>
            <UtilityList className="utilityAfter">
                <Link to='/myshop/product'>내상점</Link>
            </UtilityList>
            <UtilityList><button>벼락톡</button></UtilityList>
        </StyledUtility>
    </React.Fragment >
}

export default Utility;