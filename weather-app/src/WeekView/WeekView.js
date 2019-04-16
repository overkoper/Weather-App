import React, { Component } from "react";
import styled from "styled-components";
import Day from "../Day";

class WeekView extends Component {
  state = {
    weekId: "",
    days: []
  };
  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "./weather.json")
      .then(response => response.json())
      .then(data => Object.entries(data))
      .then(arr =>
        this.setState({ weekId: arr[0][0], days: Object.entries(arr[0][1]) })
      );
  }
  render() {
    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    const { days } = this.state;
    return (
      <Wrapper>
        {days.map(day => (
          <Day
            key={day[1].date}
            dayName={day[0]}
            date={day[1].date}
            weather={day[1].weather}
            temp={day[1].temperature}
          />
        ))}
      </Wrapper>
    );
  }
}
export default WeekView;
