import styled from "styled-components";
import menu from "../../properties/MenuProperties";

const XilerChatSection = styled.div`
  color: ${(props) => props.theme.light_color};
  background-color: ${(props) => props.theme.dark_color};
  position: sticky;
  left: 0;
  top: 0;
  height: ${menu.height};
  width: calc(${menu.width} - 10px);
  padding: 0 10px;
  user-select: none;
`;

const XilerChatHeader = styled.h1`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  z-index: 10000;
  font-size: calc(${menu.width} / 4.4);
`;

const XilerChatHeaderChat = styled.span`
  color: ${(props) => props.theme.accent_color};
`;

const XilerChatIcon = styled.svg.attrs({
  // src: "/assets/XilerLogo.svg"
  viewBox: "0 0 5000.000000 5000.000000",
  preserveAspectRatio: "xMidYMid meet",
})`
  height: calc(${menu.width} - (${menu.width} / 1.5));
  width: calc(${menu.width} - (${menu.width} / 1.5));
`;

const XilerChatIconGroup = styled.g.attrs({
  transform: "translate(0.000000,5000.000000) scale(0.100000,-0.100000)",
  stroke: "none",
})`
  fill: ${(props) => props.theme.xiler_color};
`;

const XilerChatIconPath = styled.path.attrs({
  d:
    "M3000 46993 c0 -3 49 -56 108 -117 60 -61 180 -188 268 -281 2554 -2727 4695 -5727 6424 -9000 159 -301 645 -1275 789 -1580 1417 -3006 2458 -6146 3105 -9365 157 -777 204 -1262 193 -1965 l-6 -360 -60 -320 c-666 -3538 -1721 -6805 -3232 -10010 -144 -305 -630 -1279 -789 -1580 -1729 -3273 -3870 -6273 -6424 -9000 -88 -93 -209 -222 -270 -285 l-111 -115 43 -3 c23 -2 163 6 310 18 4067 318 7946 1658 11307 3905 1641 1097 3119 2384 4446 3870 1083 1214 2090 2625 2901 4065 1638 2909 2645 6147 2952 9495 14 149 28 323 32 388 4 64 10 117 14 117 4 0 10 -53 14 -117 4 -65 18 -239 32 -388 449 -4898 2389 -9514 5553 -13215 1226 -1434 2610 -2701 4166 -3816 3449 -2469 7586 -3967 11887 -4304 147 -12 287 -20 310 -18 l43 3 -111 115 c-61 63 -182 192 -270 285 -2554 2727 -4695 5727 -6424 9000 -159 301 -645 1275 -789 1580 -1413 2998 -2444 6101 -3101 9340 -130 641 -171 1040 -171 1675 0 623 37 988 161 1611 644 3222 1689 6379 3111 9394 144 305 630 1279 789 1580 1729 3273 3870 6273 6424 9000 88 93 209 222 270 285 l111 115 -43 3 c-23 2 -163 -6 -310 -18 -4067 -318 -7946 -1658 -11307 -3905 -1641 -1097 -3119 -2384 -4446 -3870 -1083 -1214 -2090 -2625 -2901 -4065 -1638 -2909 -2645 -6147 -2952 -9495 -14 -148 -28 -323 -32 -387 -4 -65 -10 -118 -14 -118 -4 0 -10 53 -14 118 -4 64 -18 239 -32 387 -449 4898 -2389 9514 -5553 13215 -1226 1434 -2610 2701 -4166 3816 -3447 2467 -7582 3966 -11879 4304 -272 21 -356 24 -356 13z",
})`
  position: relative;
`;

const XilerChatPoweredBySection = styled.a.attrs({
  href: "https://www.xiler.net/",
  target: "_blanc",
})`
  position: absolute;
  bottom: 10px;
  color: ${(props) => props.theme.light_color};
  text-decoration: none;
  background-color: ${(props) => props.theme.dark_color};
  padding: 10px 0;
  z-index: 9000;
`;

const XilerChatPoweredBySectionText = styled.div`
  position: absolute;
  top: 0;
  left: calc(${menu.width} - (${menu.width} / 1.5));
  height: calc(${menu.width} - (${menu.width} / 1.5));
  width: calc(${menu.width} - (${menu.width} - (${menu.width} / 1.5)) - 10px);
  display: flex;
  align-items: center;
`;

const XilerChatPoweredBySectionTextWrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.xiler_color};
`;

const XilerChatPoweredBySectionTextPoweredBy = styled.h3`
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: calc(${menu.width} / 5.6);
  line-height: calc(${menu.width} / 7.5);
`;

const XilerChatPoweredBySectionTextXiler = styled.h2`
  width: 100%;
  height: 60%;
  padding: 0;
  margin: 0;
  font-size: calc(${menu.width} / 3.4);
  line-height: calc(${menu.width} / 4);
`;

export {
  XilerChatHeader,
  XilerChatHeaderChat,
  XilerChatIcon,
  XilerChatIconGroup,
  XilerChatIconPath,
  XilerChatPoweredBySection,
  XilerChatPoweredBySectionText,
  XilerChatPoweredBySectionTextWrapper,
  XilerChatPoweredBySectionTextPoweredBy,
  XilerChatPoweredBySectionTextXiler,
};
export default XilerChatSection;
