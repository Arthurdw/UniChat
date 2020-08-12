import styled from "styled-components";
import room from "../../properties/RoomProperties";

const ChatWindow = styled.div`
  margin: 10px 5px 0 0;
  height: calc(
    100vh - ${room.roomHeader.height} - 2px - ${room.roomText.height} - 10px
  );
  width: calc(100% - 5px);
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.dark_color};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.accent_color};
    border-radius: 4px;
  }
`;

export default ChatWindow;
