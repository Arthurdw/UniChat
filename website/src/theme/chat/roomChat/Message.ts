import styled from "styled-components";
import message from "../../properties/MessageProperties";

function formatNumber(numb: number) {
  return ("0" + numb).slice(-2);
}

function getFormattedDate(date: Date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return date.getDate() === new Date().getDate()
    ? `Today at ${formatNumber(date.getHours())}:${formatNumber(
        date.getMinutes()
      )}`
    : `${formatNumber(date.getDay())}/${formatNumber(
        date.getMonth()
      )}/${formatNumber(date.getFullYear())}`;
}

const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 3px 0;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.darker_light_dark_color};
  }
`;

const MessageContentWrapper = styled.div`
  position: relative;
  margin-left: calc(${message.avatar.size} + 27px);
`;

const MessageAuthorAvatar = styled.img.attrs({
  alt: "",
})<{ src: string }>`
  user-select: none;
  width: ${message.avatar.size};
  height: ${message.avatar.size};
  border-radius: ${message.avatar.borderRaduis};
  position: absolute;
  left: 20px;
`;

const MessageAuthorName = styled.p<{ date: Date }>`
  margin: 0;
  padding: 0;
  width: fit-content;
  height: fit-content;
  white-space: pre-line;
  word-break: break-all;
  font-weight: 600;
  font-size: 17px;

  &::after {
    content: "${(props) => getFormattedDate(props.date)}";
    color: ${(props) => props.theme.dark_light_color};
    font-weight: 400;
    margin: 0 0 0 7px;
    font-size: 75%;
    opacity: 0.7;
  }
`;

const MessageContent = styled.div`
  margin: 0;
  padding: 0;
  font-size: 16px;
  overflow: hidden;
  white-space: break-spaces;
  word-wrap: break-word;
`;

const Clearer = styled.div`
  clear: both;
`;

export {
  MessageAuthorAvatar,
  MessageAuthorName,
  MessageContentWrapper,
  MessageContent,
  Clearer,
};
export default MessageWrapper;
