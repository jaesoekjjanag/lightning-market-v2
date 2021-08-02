import React from 'react';
import styled from 'styled-components';
import Logo from './logo'
// import Search from './search'
import Utility from './utility'
import CategoryBar from '../category';
import Sidebar from '../sidebar';

const StyledHeader = styled.header`    
    padding-top: 45px;
    padding-bottom: 30px;
    position:sticky;
    top:0;
    // border-bottom:var(--border-default);
    background-color:white;
    z-index:1;
`;

const StyledDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return <React.Fragment>
        <StyledHeader>
            <StyledDiv>
                <Logo />
                {/* <Search /> */}
                <Utility />
            </StyledDiv>
            <CategoryBar />
            <Sidebar />
        </StyledHeader>
    </React.Fragment>
}

export default Header;