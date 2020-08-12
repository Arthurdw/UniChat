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

class RoomChatSection extends React.Component<{ data: Context[] }> {
  addMessage = (ctx: Context) => {
    this.setState({ data: [ctx, ...this.props.data] });
  };

  renderMessages = () => {
    return (
      <React.Fragment>
        {this.props.data.map((ctx: Context, index) => (
          <React.Fragment key={index}>
            <MessageWrapper>
              <MessageAuthorAvatar src={ctx.author.avatar} />
              <MessageContentWrapper>
                <MessageAuthorName date={ctx.timestamp}>
                  {ctx.author.name}
                </MessageAuthorName>
                <MessageContent>{ctx.message}</MessageContent>
              </MessageContentWrapper>
            </MessageWrapper>
            <Clearer />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <BackgroundSection>
        <ChatWindow>
          <this.renderMessages />
        </ChatWindow>
      </BackgroundSection>
    );
  }
}

export default RoomChatSection;
