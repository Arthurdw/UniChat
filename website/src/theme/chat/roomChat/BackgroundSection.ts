import styled from "styled-components";
import room from "../../properties/RoomProperties"

const BackgroundSection = styled.div<{roomTextHeight: number}>`
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.light_dark_color};
  position: absolute;
  left: 0;
  top: calc(${room.roomHeader.height} + 2px);
  height: calc(100vh - ${room.roomHeader.height} - 2px - ${(props) => props.roomTextHeight}px);
  width: 100%;
`


export default BackgroundSection;



