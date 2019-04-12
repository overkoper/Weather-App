import React, { Component } from "react";
import styled from "styled-components";
import WeekView from "./WeekView";

class App extends Component {
  render() {
    const Wrapper = styled.div`
      width: 100%;
      margin: 0 auto;
    `;
    return (
      <Wrapper>
        <WeekView />
      </Wrapper>
    );
  }
}

export default App;
