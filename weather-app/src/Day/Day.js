import React, { Component } from "react";
import styled from "styled-components";
import * as moment from "moment";
import 'moment/locale/pl'

class Day extends Component {
  state = {
    dayName: this.props.dayName,
    weather: this.props.weather,
    temp: this.props.temp,
    date: this.props.date
  };
  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 160px;
      height: 200px;
      padding-bottom: 10px;
    `;
    const Date = styled.div`
    padding: 5px 0px 10px 0px;
    `
    const Weather = styled.img`
      width: 70%;
      height: 70%;
    `;
    const Description = styled.div`
    padding: 10px 0px 10px 0px;
    font-size: 12px;
    `
    const Container = styled.div`
    display: flex;
    justify-content: space-around;
    `
    const Temp = styled.div`
      &:after {
        content: "°C";
      }
      padding-right:10px;
      color: ${props => props.min && "grey"};
    `;
    const { date, weather, temp } = this.state;
    return (
      <Wrapper>
        <div>{moment(date).locale("pl").format("dddd")}</div>
        <Date>{moment(date).format("YYYY-MM-DD")}</Date>
        <Weather
          alt="weather symbol"
          src={require(`../img/${weather.icon}.svg`)}
        />
        <Description>{weather.description}</Description>
        <Container>
          <Temp>{Math.round(temp.temp_max)}</Temp>
          <Temp min>{Math.round(temp.temp_min)}</Temp>
        </Container>
      </Wrapper>
    );
  }
}
export default Day;
