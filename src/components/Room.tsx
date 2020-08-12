import React from "react";
import RoomWrapper from "../theme/chat/RoomWrapper";
import RoomHeaderSection from "./RoomHeaderSection";
import RoomChatSection from "./RoomChatSection";

interface Context {
  message: string;
  timestamp: Date;
  author: {
    name: string;
    avatar: string;
  };
}

const example: Context = {
  message: "Hello World!",
  timestamp: new Date(),
  author: {
    name: "Jeff",
    avatar: "https://via.placeholder.com/150/FF0000/000000",
  },
};

class Room extends React.Component<{ path: string }, { data: Context[] }> {
  constructor(props: { path: string }) {
    super(props);
    this.state = {
      data: [example],
    };
  }

  render() {
    return (
      <RoomWrapper>
        <RoomHeaderSection path={this.props.path} />
        <RoomChatSection data={this.state.data} />
        {/* <button
          style={{ position: "absolute" }}
          onClick={() => this.setState({ data: [example, ...this.state.data] })}
        >
          test
        </button> */}
      </RoomWrapper>
    );
  }
}

export type { Context };
export default Room;
