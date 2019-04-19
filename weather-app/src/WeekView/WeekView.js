import React, { Component } from "react";
import styled from "styled-components";
import * as moment from 'moment';
import Day from "../Day";

class WeekView extends Component {
  state = {
    forecast: [],
    today: "",
    day1Array: [],
    day2Start: null
  };
  componentDidMount() {
      fetch("http://api.openweathermap.org/data/2.5/forecast?q=Gdansk,pl&units=metric&lang=pl&APPID=cc4d5fa4446c609bb569254b030bb1d7")
      .then(response=> response.json())
      .then(data=> this.setState({
        forecast: data.list,
        today: data.list[0].dt_txt.split(" ")[0],
        day1Array: data.list.filter(item=>item.dt_txt.split(" ")[0]===data.list[0].dt_txt.split(" ")[0]),
        day2Start: data.list.filter(item=>item.dt_txt.split(" ")[0]===data.list[0].dt_txt.split(" ")[0])[data.list.filter(item=>item.dt_txt.split(" ")[0]===data.list[0].dt_txt.split(" ")[0]).length-1].dt+10800
      }))
  }
  render() {
    const day3Start = this.state.day2Start + 86400
    const day4Start = this.state.day3Start + 86400
    const day5Start = this.state.day4Start + 86400
    
    console.log(moment(this.state.day2Start).format())
    console.log(this.state.forecast[0]&&moment(this.state.forecast[0].dt).format())
    console.log(day4Start)
    console.log(day5Start)
    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    const { day1Array } = this.state;
    return (
      <Wrapper>
        {day1Array&&day1Array.map(day => (
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
