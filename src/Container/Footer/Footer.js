import React from 'react';
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";

const Footer = () => {
    const Footer = styled.div({
        background: 'palevioletred',
        height: 200,
        width: '100%',
        textAlign: 'center'
    });
    return (
        <Footer>
            footer
        </Footer>
    );
};

export default Footer;
