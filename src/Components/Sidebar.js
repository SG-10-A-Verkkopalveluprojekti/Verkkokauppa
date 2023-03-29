import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import {IconContext} from 'react-icons/lib';

// Creating and styling of sidebar div with 'styled-components'
const Nav = styled.div`
   // background: black;
    height: 80px;
    padding-right: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #2E4F4F;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    //Sidebar toggle
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        {/* Color of text and icons in value={{color: x }} */}
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav>
                <NavIcon to='#'>
                    {/* Opening icon */}
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        {/* Closing icon */}
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;