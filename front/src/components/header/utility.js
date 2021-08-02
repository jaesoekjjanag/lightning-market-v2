import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';



const StyledUtility = styled.ul`
    list-style: none;
    padding: 0;
`;

const UtilityList = styled.li`
    float:left;
    margin-left: 30px;
    position: relative;

    & > * {
        color: black;
    }
`;


const Utility = () => {

    return <React.Fragment>
        <StyledUtility>
            <UtilityList className="utilityAfter">
                <Link to='/sell'>판매하기</Link>
            </UtilityList>
            <UtilityList className="utilityAfter">
                <Link to='/myshop'>내상점</Link>
            </UtilityList>
            <UtilityList><button>벼락톡</button></UtilityList>
        </StyledUtility>
    </React.Fragment >
}

export default Utility;