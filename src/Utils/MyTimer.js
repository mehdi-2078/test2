import React from 'react';
import {useTimer} from 'react-timer-hook';
import styled from "styled-components";

export function MyTimer({expiryTimestamp, stateChange, start, pause}) {
    const {seconds} = useTimer({expiryTimestamp, onExpire: () => stateChange(true)});
    const Text = styled.div({
        fontSize: 20,
        fontWeight: '700'
    });
    return (
        <Text>
            {seconds}
        </Text>
    );
}
