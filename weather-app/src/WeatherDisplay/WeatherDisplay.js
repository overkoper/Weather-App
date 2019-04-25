import React, { Component } from "react";
import styled from "styled-components";

class WeatherDisplay extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    return <Wrapper>display</Wrapper>;
  }
}
export default WeatherDisplay;
