import styled from "styled-components";

const BackgroundSection = styled.div<{roomTextHeight: number}>`
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.light_dark_color};
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${(props) => `${props.roomTextHeight}px`};
  width: 100%;
`


export default BackgroundSection;



