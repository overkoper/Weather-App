import React, { Component } from "react";
import styled from "styled-components";

class Day extends Component{
    state ={
        dayName: this.props.dayName
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
        const { dayName } = this.state;
        
        return(
<Wrapper>
    <div>{dayName}</div>
    {/* <img alt="weather symbol" src={this.state.weatherImg} />
    <div>
        <span>{this.props.temperatureMax}</span>
        <span>{this.props.temperatureMin}</span>
    </div> */}
</Wrapper>
        )
    }
}
export default Day;