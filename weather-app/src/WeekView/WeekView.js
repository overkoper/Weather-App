import React, { Component } from "react";
import styled from "styled-components";
import * as moment from "moment";
import Day from "../Day";

class WeekView extends Component {
  state = {
    forecast: [],
    today: "",
    day1Array: []
  };
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

    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    return (
      <>
        <Wrapper>
          {day1Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {day2Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {day3Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {day4Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {day5Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {day6Array.map(day => (
            <Day
              key={day.dt}
              dayName={day.dt}
              date={day.dt_txt}
              weather={day.weather[0]}
              temp={day.main}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default WeekView;
