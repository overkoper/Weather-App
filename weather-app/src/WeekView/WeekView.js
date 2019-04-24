import React, { Component } from "react";
import styled from "styled-components";
import * as moment from "moment";
import Day from "../Day";

class WeekView extends Component {
  state = {
    forecast: [],
    today: "",
    day1Array: [],
    day: 1
  };
  dayIncrement() {
    this.setState({
      day: this.state.day + 1
    });
  }
  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Gdansk,pl&units=metric&lang=pl&APPID=cc4d5fa4446c609bb569254b030bb1d7"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          forecast: data.list,
          today: data.list[0].dt_txt.split(" ")[0],
          day1Array: data.list.filter(
            day =>
              day.dt_txt.split(" ")[0] === data.list[0].dt_txt.split(" ")[0]
          )
        })
      );
  }
  render() {
    const { forecast, day1Array } = this.state;

    const day2Start =
      day1Array[day1Array.length - 1] &&
      day1Array[day1Array.length - 1].dt + 10800;
    const day3Start = day2Start + 86400;
    const day4Start = day3Start + 86400;
    const day5Start = day4Start + 86400;
    const day6Start = day5Start + 86400;

    const day2Array = forecast.filter(
      day => day.dt >= day2Start && day.dt < day3Start
    );
    const day3Array = forecast.filter(
      day => day.dt >= day3Start && day.dt < day4Start
    );
    const day4Array = forecast.filter(
      day => day.dt >= day4Start && day.dt < day5Start
    );
    const day5Array = forecast.filter(
      day => day.dt >= day5Start && day.dt < day6Start
    );
    const day6Array = forecast.filter(day => day.dt >= day6Start);
    const fullWeekArray = [
      day1Array,
      day2Array,
      day3Array,
      day4Array,
      day5Array,
      day6Array
    ];
    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    return (
      <Wrapper>
        {fullWeekArray.map(day => (
            day.map(hour => (
              moment(hour.dt_txt).format("HH:mm")==="12:00"?
              <Day
                key={hour.dt}
                date={hour.dt_txt}
                weather={hour.weather[0]}
                temp={hour.main}
              />:null
            ))
        ))}
      </Wrapper>
    );
  }
}
export default WeekView;
