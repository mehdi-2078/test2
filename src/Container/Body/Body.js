import React, {useState} from 'react';
import styled from "styled-components";

const Body = () => {
    const Body = styled.div({
        background: 'yellow',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30px 0',
        textAlign: 'center'
    });
    return (
        <Body>
            body
        </Body>
    );
};

export default Body;
