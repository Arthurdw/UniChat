import styled from "styled-components";
import menu from "../../properties/MenuProperties";
import { Link } from "react-router-dom";

const RoomSectionWrapper = styled.div`
user-select: none;
  position: absolute;
  top: ${menu.rooms.top};
  width: ${menu.rooms.width};
  margin: 20px calc(${menu.width} / 2 - ${menu.rooms.width} / 2 + 5px) 0
    calc(${menu.width} / 2 - ${menu.rooms.width} / 2 + 5px);
  border-radius: 5px;
  background-color: ${(props) => props.theme.dark_color};
`;

const RoomSectionTitle = styled.h3`
  position: relative;
  font-size: calc(${menu.width} / 6);
  line-height: calc(${menu.width} / 7);
  margin: 0;
  padding: 0;
`;

const RoomSectionRoomWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const RoomWrapper = styled.li`
  margin: 3px 0;
  padding: 0;
`;

const RoomWrapperParagraph = styled.p`
  margin: 0;
  padding: 0;
`;

const RoomWrapperLink = styled(Link)<{ to: string, selected: boolean } >`
  margin: 0;
  padding: 5px 5px 2px 5px;
  color: ${(props) => props.theme.light_color};
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: calc(${menu.width} / 8);
  line-height: 100%;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: ${(props) => props.selected ? props.theme.light_dark_color : props.theme.dark_color};

  &::before {
    content: "${menu.rooms.prefix}";
    color: ${(props) => props.theme.accent_color};
    opacity: ${(props) => props.selected ? 1 : 0.5}
  }
`;

export default RoomSectionWrapper;

export {
  RoomSectionTitle,
  RoomSectionRoomWrapper,
  RoomWrapper,
  RoomWrapperParagraph,
  RoomWrapperLink,
};
