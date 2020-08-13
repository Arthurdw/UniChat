import React from "react";
import BackgroundSection from "../theme/chat/roomHeader/BackgroundSection";
import RoomHeaderWrapper, {
  RoomHeaderChannel,
  RoomHeaderChannelTitle,
  RoomHeaderChannelDescription,
} from "../theme/chat/roomHeader/RoomHeader";

import rooms from "../data/rooms";

class RoomHeaderSection extends React.Component<{ path: string }> {
  generateHeader = () => {
    let val;
    rooms.forEach((room) => {
      if (
        this.props.path.trim().toLowerCase() === room.name.trim().toLowerCase()
      ) {
        val = (
          <RoomHeaderChannel>
            <RoomHeaderChannelTitle>{room.name}</RoomHeaderChannelTitle>
            <RoomHeaderChannelDescription>
              {room.description}
            </RoomHeaderChannelDescription>
          </RoomHeaderChannel>
        );
      }
    });
    return val || <React.Fragment />
  };

  render() {
    return (
      <BackgroundSection>
        <RoomHeaderWrapper>
          <this.generateHeader />
        </RoomHeaderWrapper>
      </BackgroundSection>
    );
  }
}

export default RoomHeaderSection;
