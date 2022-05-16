import React, {useState} from 'react';
import SideBar from "../SideBar/SideBar";
import styled from "styled-components";
import {MyTimer} from "../../Utils/MyTimer";

const Header = () => {
    const Header = styled.div({
        background: 'Blue',
        height: 300,
        width: '100%',
        textAlign: 'center'
    });
    const [isTimeOver, setIsTimeOver] = useState(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 50);
    return (
        <>
            <SideBar/>
            <Header>
                <MyTimer stateChange={(e) => setIsTimeOver(e)} expiryTimestamp={time}/>
            </Header>
        </>
    );
};

export default Header;
