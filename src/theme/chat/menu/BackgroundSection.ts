import styled from "styled-components";
import menu from "../../properties/MenuProperties"

const BackgroundSection = styled.div`
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.dark_color};
  position: sticky;
  left: 0;
  top: 0;
  height: ${menu.height};
  width: ${menu.width};
`


export default BackgroundSection;



