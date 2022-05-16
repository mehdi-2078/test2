import React from "react";
import {slide as Menu} from 'react-burger-menu'
import styled from "styled-components";
import "./style.css";

const SideBar = () => {
    const Box = styled.div({
        background: 'palevioletred',
        height: '100vh',
        width: '100%',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    });
    return (
        <Menu right pageWrapId={"page-wrap"} outerContainerId={"App"} >
                <h3 className="menu-item">Home</h3>
                <h3 className="menu-item">About</h3>
                <h3 className="menu-item">Contact</h3>
        </Menu>
    );
};
export default SideBar;
