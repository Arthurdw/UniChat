import React from "react";
import socketIOClient from "socket.io-client";

import RoomWrapper from "../theme/chat/RoomWrapper";
import RoomHeaderSection from "./RoomHeaderSection";
import RoomChatSection from "./RoomChatSection";
import BackgroundSection from "../theme/chat/roomChatInput/BackgroundSection";
import TextInput from "../theme/chat/roomChatInput/TextInput";
import room from "../theme/properties/RoomProperties";

const ENDPOINT = "http://127.0.0.1:6750";

interface Context {
  message: string;
  id: string;
  timestamp: Date;
  channel: string;
  author: {
    name: string;
    avatar: string;
  };
}

function makeId(length: number) {
  let result = "";
  let characters = "abcdef0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class Room extends React.Component<
  { path: string },
  {
    data: Context[];
    roomTextHeight: number;
    keys: any;
    text: string;
  }
> {
  socket = socketIOClient(ENDPOINT);
  latest: string;
  constructor(props: { path: string }) {
    super(props);
    this.latest = "";
    this.state = {
      roomTextHeight: room.roomText.height,
      data: [],
      keys: [],
      text: "",
    };
  }

  componentDidMount() {
    this.getMessages(this.props.path.trim().toLowerCase());
  }

  pushMessage(message: Context) {
    this.socket.emit("message", message);
    this.socket.on("message-receive", (received: Context) => {
      if (this.latest === received.id) {
        return;
      }
      if (received.channel === this.props.path.trim().toLowerCase()) {
        this.setState({ data: [received, ...this.state.data] });
        this.latest = received.id;
      }
    });
    return () => this.socket.disconnect();
  }

  getMessages(channel: string) {
    this.socket.emit("get-messages", channel);
    this.socket.on("messages", (received: Context[]) => {
      this.setState({ data: received });
    });
    return () => this.socket.disconnect();
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
                  id: makeId(50),
                  timestamp: new Date(),
                  channel: this.props.path.trim().toLowerCase(),
                  author: {
                    name: "Jeff",
                    avatar: "https://via.placeholder.com/150/FF0000/000000",
                  }
                }, ...this.state.data
                ]
                ,
                text: "",
              });

              this.pushMessage({
                message: text,
                id: makeId(50),
                timestamp: new Date(),
                channel: this.props.path.trim().toLowerCase(),
                author: {
                  name: "Jeff",
                  avatar: "https://via.placeholder.com/150/FF0000/000000",
                },
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
