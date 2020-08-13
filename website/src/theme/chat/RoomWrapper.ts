import styled from "styled-components";
import menu from "../properties/MenuProperties";

const RoomWrapper = styled.div`
  color: ${(props) => props.theme.light_color};
  position: absolute;
  left: calc(${menu.width} + 10px);
  top: 0;
  height: 100vh;
  width: calc(100vw - ${menu.width} - 10px);
`;

export default RoomWrapper;
