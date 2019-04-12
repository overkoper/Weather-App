import React, { Component } from "react";
import styled from "styled-components";

class Day extends Component{
    state ={
        
    }
    render(){
        const Wrapper = styled.div`
        width: 140px;
        height: 200px;
        border: 1px solid grey;
        position: ${props => props.active&&"absolute"}
        background-color: ${props => props.active&&"red"}
        width: ${props => props.active&&"200px"}
        `
        
        return(
<Wrapper active>
    text
</Wrapper>
        )
    }
}
export default Day;