import React from "react";
import RoomSectionWrapper, {
  RoomSectionTitle,
  RoomSectionRoomWrapper,
  RoomWrapper,
  RoomWrapperParagraph,
  RoomWrapperLink,
} from "../theme/chat/menu/RoomSection";

import rooms from "../data/rooms";

class RoomSection extends React.Component<{ path: string }> {
  Room = (props: { name: string }) => {
    return (
      <RoomWrapper>
        <RoomWrapperParagraph>
          <RoomWrapperLink
            to={`/${props.name.trim().toLowerCase()}`}
            selected={
              this.props.path.trim().toLowerCase() ===
              props.name.trim().toLowerCase()
            }
          >
            {props.name
              .split(" ")
              .map(
                (name) =>
                  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
              )
              .join(" ")}
          </RoomWrapperLink>
        </RoomWrapperParagraph>
      </RoomWrapper>
    );
  };

  render() {
    return (
      <RoomSectionWrapper>
        <RoomSectionTitle>Rooms</RoomSectionTitle>
        <RoomSectionRoomWrapper>
          {rooms.map((room, index: number) => (
            <this.Room key={index} name={room.name} />
          ))}
        </RoomSectionRoomWrapper>
      </RoomSectionWrapper>
    );
  }
}

export default RoomSection;
