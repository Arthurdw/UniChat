import styled from "styled-components";
import room from "../../properties/RoomProperties"

const BackgroundSection = styled.div`
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.light_dark_color};
  border-bottom: 2px solid ${(props) => props.theme.accent_color};
  position: sticky;
  left: 0;
  top: 0;
  height: calc(${room.roomHeader.height} - 20px);
  width: calc(100% - 40px);
  padding: 10px 20px;
`


export default BackgroundSection;



