import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';



const StyledLogoBox = styled.span`
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--main-yellow);
`;

const StyledLogoImg = styled.img`
    width: 40px;
    height: 40px;
    vertical-align: top;
    margin-right: 10px;
`;



const Logo = () => {

    return <React.Fragment>
        <Link to='/'>
            <StyledLogoBox>
                <StyledLogoImg src="thunder.png" alt="로고 이미지" />
                벼락장터
            </StyledLogoBox>
        </Link>
    </React.Fragment>
}

export default Logo;