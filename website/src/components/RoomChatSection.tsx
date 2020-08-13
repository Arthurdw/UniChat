import React from "react";
import BackgroundSection from "../theme/chat/roomChat/BackgroundSection";
import ChatWindow from "../theme/chat/roomChat/ChatWindow";
import MessageWrapper, {
  MessageAuthorAvatar,
  MessageAuthorName,
  MessageContentWrapper,
  MessageContent,
  Clearer,
} from "../theme/chat/roomChat/Message";
import { Context } from "./Room";

// import rooms from "../data/rooms";

class Message extends React.Component<{ ctx: Context }> {
  render() {
    return (
      <React.Fragment>
        <MessageWrapper>
          <MessageAuthorAvatar src={this.props.ctx.author.avatar} />
          <MessageContentWrapper>
            <MessageAuthorName date={this.props.ctx.timestamp}>
              {this.props.ctx.author.name}
            </MessageAuthorName>
            <MessageContent>{this.props.ctx.message}</MessageContent>
          </MessageContentWrapper>
        </MessageWrapper>
        <Clearer />
      </React.Fragment>
    );
  }
}

class RoomChatSection extends React.Component<{
  data: Context[];
  roomTextHeight: number;
}> {

  renderMessages = () => {
    return (
      <React.Fragment>
        {this.props.data.map((ctx: Context, index) => (
          <Message key={index} ctx={ctx} />
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <BackgroundSection roomTextHeight={this.props.roomTextHeight}>
        <ChatWindow>
          <this.renderMessages />
        </ChatWindow>
      </BackgroundSection>
    );
  }
}

export default RoomChatSection;
