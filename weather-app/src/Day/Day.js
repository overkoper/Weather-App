import React, { Component } from "react";
import styled from "styled-components";

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
      border: 1px solid grey;
      background-color: ${props => props.active && "grey"};
      height: ${props => props.active && "230px"};
      box-shadow: ${props => props.active && "0px 2px 5px 5px rgba(0,0,0,0.75)"};
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
        <Weather alt="weather symbol" src={require(`../img/${weather}.svg`)} />
        <div>
          <div>Day: {temp.day} °C</div>
          <div>Night: {temp.night} °C</div>
        </div>
      </Wrapper>
    ) : (
      <Wrapper onClick={() => this.markActive()}>
        <div>{dayName}</div>
        <Weather alt="weather symbol" src={require(`../img/${weather}.svg`)} />
        <div>
          <Temp>Day: {temp.day}</Temp>
          <Temp>Night: {temp.night}</Temp>
        </div>
      </Wrapper>
    );
  }
}
export default Day;
