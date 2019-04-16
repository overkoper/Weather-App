import React, { Component } from "react";
import styled from "styled-components";
import sunny from "../img/sunny.svg";
import cloudy from "../img/cloudy.svg";
import partaly from "../img/partaly-cloudy.svg";
import rainy from "../img/rainy.svg";

class Day extends Component {
  state = {
    dayName: this.props.dayName,
    weather: this.props.weather,
    temp: this.props.temp
  };
  render() {
    const Wrapper = styled.div`
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
    console.log(weather);
    return (
      <Wrapper>
        <div>{dayName}</div>
        <Weather alt="weather symbol" src={sunny} />
        <div>
          <span>Day: {temp.day}</span>
          <span>Night: {temp.night}</span>
        </div>
      </Wrapper>
    );
  }
}
export default Day;
