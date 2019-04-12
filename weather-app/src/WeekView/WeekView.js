import React, { Component } from "react";
import styled from "styled-components";
import Day from "../Day";

class WeekView extends Component {
  render() {
    const Wrapper = styled.div`
      width: 1000px;
      margin: 0px 12px 0px 12px;
    `;
    return( 
    <Wrapper>
        <Day />
    </Wrapper>);
  }
}
export default WeekView;
