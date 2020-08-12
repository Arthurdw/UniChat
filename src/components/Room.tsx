import React from "react";
import RoomWrapper from "../theme/chat/RoomWrapper";
import RoomHeaderSection from "./RoomHeaderSection";

class Room extends React.Component<{ path: string }> {
  render() {
    return (
      <RoomWrapper>
        <RoomHeaderSection path={this.props.path} />
      </RoomWrapper>
    );
  }
}

export default Room;
