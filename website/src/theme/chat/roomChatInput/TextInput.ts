import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp: (event: KeyboardEvent<HTMLTextAreaElement>) => void; 
}

const TextInput = styled.textarea<TextInputProps>`
  padding: 20px;
  margin: 5px 20px;
  resize: none;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.dark_color};
  width: calc(100% - 100px);
  height: calc(100% - 64px);
  outline: none;
  font-size: 16px;
  font-family: "Baloo Tamma 2", cursive;
  line-height: 100%;

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

export default TextInput;
