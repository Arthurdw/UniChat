import styled from "styled-components";
import menu from "../../properties/MenuProperties";
import room from "../../properties/RoomProperties";

const RoomHeaderWrapper = styled.div`
  user-select: none;
  position: relative;
  height: 100%;
`;

const RoomHeaderChannel = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RoomHeaderChannelTitle = styled.h4`
  font-weight: 600;
  margin: 0 0 0 40px;
  padding: 0;
  font-size: calc(${room.roomHeader.height} / 3);
  white-space: nowrap;
  
  &::before {
    content: "${menu.rooms.prefix}";
    color: ${(props) => props.theme.accent_color};
    opacity: 1;
    font-size: 200%;
    position: absolute;
    left: 0;
    top: -10px;
    height: ${room.roomHeader.height};
  }
  
  &::after {
    content: "|";
    color: ${(props) => props.theme.dark_color};
    opacity: 1;
    font-size: 200%;
    font-weight: 400;
    opacity: 0.5;
    position: absolute;
    left: 130px;
    top: -15px;
    height: ${room.roomHeader.height};
  }
`;

const RoomHeaderChannelDescription = styled.p`
  margin: 0 0 0 40px;
  padding: 0;
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export {
  RoomHeaderChannel,
  RoomHeaderChannelTitle,
  RoomHeaderChannelDescription,
};
export default RoomHeaderWrapper;
