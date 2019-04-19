import React, { Component } from "react";
import styled from "styled-components";
import Day from "../Day";

class WeekView extends Component {
  state = {
    forecast: [],
    today: ""
  };
  componentDidMount() {
      fetch("http://api.openweathermap.org/data/2.5/forecast?q=Gdansk,pl&units=metric&lang=pl&APPID=cc4d5fa4446c609bb569254b030bb1d7")
      .then(response=> response.json())
      .then(data=> this.setState({
        forecast: data.list,
        today: data.list[0].dt_txt.split(" ")[0]
      }))
  }
  render() {
    console.log(this.state.forecast)
    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    const { forecast } = this.state;
    return (
      <Wrapper>
        {forecast.filter(item=>item.dt_txt.split(" ")[0]===this.state.today).map(day => (
          <Day
            key={day.dt}
            dayName={day.dt}
            date={day.dt_txt}
            weather={day.weather[0]}
            temp={day.main}
          />
        ))}
      </Wrapper>
    );
  }
}
export default WeekView;
