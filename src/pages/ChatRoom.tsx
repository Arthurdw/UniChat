import React from "react";
import {ThemeProvider} from "styled-components";
import { original } from "../theme/colors";

import Menu from "../components/Menu";

interface ChatRoomProps {
  location: {
    pathname: string
  }
}


class ChatRoom extends React.Component<ChatRoomProps> {
  render() {
    return (
      <ThemeProvider theme={original}>
        <Menu path={this.props.location.pathname.substr(1)} />
      </ThemeProvider>
    )
  }
}

export default ChatRoom;
