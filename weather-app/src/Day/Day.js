import React, { Component } from "react";
import styled from "styled-components";
import weatherIcon from "../img/sunny.svg"

class Day extends Component {
  state = {
    dayName: this.props.dayName,
    weather: this.props.weather,
    temp: this.props.temp,
    date: this.props.date,
    active: false
  };
  markActive() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 140px;
      height: 200px;
      border: ${props =>props.active && "1px solid grey"};
      background-color: ${props => props.active && "#efefef"};
      padding-bottom: 10px;
    `;
    const Weather = styled.img`
      width: 70%;
      height: 70%;
    `;
    const Temp = styled.div`
    &:after{
        content: "°C";
    }
    `
    const { date, active, dayName, weather, temp } = this.state;
    return active ? (
      <Wrapper active onClick={() => this.markActive()}>
        <div>{dayName}</div>
        <div>{date}</div>
        <Weather alt="weather symbol" src={weatherIcon} />
        <div>
          <Temp>Temp max: {Math.round(temp.temp_max)}</Temp>
          <Temp>Temp min: {Math.round(temp.temp_min)}</Temp>
        </div>
      </Wrapper>
    ) : (
      <Wrapper onClick={() => this.markActive()}>
        <div>{dayName}</div>
        <Weather alt="weather symbol" src={weatherIcon} />
        <div>
          <Temp>Temp max: {Math.round(temp.temp_max)}</Temp>
          <Temp>Temp min: {Math.round(temp.temp_min)}</Temp>
        </div>
      </Wrapper>
    );
  }
}
export default Day;
