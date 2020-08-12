import React from "react";
import RoomWrapper from "../theme/chat/RoomWrapper";
import RoomHeaderSection from "./RoomHeaderSection";
import RoomChatSection from "./RoomChatSection";
import BackgroundSection from "../theme/chat/roomChatInput/BackgroundSection";
import TextInput from "../theme/chat/roomChatInput/TextInput";
import room from "../theme/properties/RoomProperties";

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

class Room extends React.Component<
  { path: string },
  { data: Context[]; roomTextHeight: number; keys: any; text: string }
> {
  constructor(props: { path: string }) {
    super(props);
    this.state = {
      roomTextHeight: room.roomText.height,
      data: [example],
      keys: [],
      text: "",
    };
  }

  getNumberArray(arr: number[]) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        newArr[newArr.length] = arr[i];
      }
    }
    return newArr;
  }

  RoomChatInput = () => {
    return (
      <BackgroundSection roomTextHeight={this.state.roomTextHeight}>
        <TextInput
          placeholder={`Message #${this.props.path.trim().toLowerCase()}`}
          value={this.state.text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            this.setState({ text: event.target.value });
          }}
          onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
            const keys = this.state.keys;
            keys[event.keyCode] = event.keyCode;
            this.setState({ keys: keys });
            const numbs = this.getNumberArray(this.state.keys);
            if (numbs.toString() === "13") {
              event.preventDefault();
              if (this.state.text.trim() === "") {
                return;
              }
              const text = this.state.text.trim();
              this.setState({
                data: [{
                  message: text,
                  timestamp: new Date(),
                  author: {
                    name: "Jeff",
                    avatar: "https://via.placeholder.com/150/FF0000/000000",
                  },
                }, ...this.state.data],
                text: "",
              });
            }
            if (numbs.includes(13) || numbs.includes(8)) {
              this.setState({
                roomTextHeight:
                  room.roomText.height +
                  room.roomText.increment *
                    (this.state.text.trim().split("\n").length - 1),
              });
            }
          }}
          onKeyUp={(event: any) => {
            const keys = this.state.keys;
            keys[event.keyCode] = false;
            this.setState({ keys: keys });
          }}
        />
      </BackgroundSection>
    );
  };

  render() {
    return (
      <RoomWrapper>
        <RoomHeaderSection path={this.props.path} />
        <RoomChatSection
          data={this.state.data}
          roomTextHeight={this.state.roomTextHeight}
        />
        <this.RoomChatInput />
      </RoomWrapper>
    );
  }
}

export type { Context };
export default Room;
