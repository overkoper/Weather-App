import React, { Component } from "react";
import styled from "styled-components";

class Day extends Component {
  state = {
    dayName: this.props.dayName,
    weather: this.props.weather,
    temp: this.props.temp
  };
  render() {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        width: 140px;
        height: 200px;
        border: 1px solid grey;
        position: ${props => props.active && "absolute"}
        background-color: ${props => props.active && "red"}
        width: ${props => props.active && "200px"}
        `;
        const Weather = styled.img`
        width:70%;
        height: 70%;
        `
    const { dayName, weather, temp } = this.state;
    
    return (
      <Wrapper>
        <div>{dayName}</div>
        <Weather alt="weather symbol" src={require(`../img/${weather}.svg`)} />
        <div>
          <div>Day: {temp.day}</div>
          <div>Night: {temp.night}</div>
        </div>
      </Wrapper>
    );
  }
}
export default Day;
