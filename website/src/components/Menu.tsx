import React from "react";
import BackgroundSection from "../theme/chat/menu/BackgroundSection";
import XilerChatSection, {
  XilerChatHeader,
  XilerChatHeaderChat as XSpan,
  XilerChatIcon,
  XilerChatIconGroup,
  XilerChatIconPath,
  XilerChatPoweredBySection,
  XilerChatPoweredBySectionText,
  XilerChatPoweredBySectionTextWrapper,
  XilerChatPoweredBySectionTextPoweredBy as XCPBSTPB,
  XilerChatPoweredBySectionTextXiler as XCPBSTX,
} from "../theme/chat/menu/XilerChatSection";
import RoomSection from "./RoomSection";

class Menu extends React.Component<{path: string}> {
  render() {
    return (
      <BackgroundSection>
        <UniChatTitle />
        <RoomSection path={this.props.path} />
      </BackgroundSection>
    );
  }
}

function UniChatTitle() {
  return (
    <XilerChatSection>
      <XilerChatHeader>Uni<XSpan>Chat</XSpan></XilerChatHeader>
      <PoweredBy />
    </XilerChatSection>
  );
}

function PoweredBy() {
  return (
    <XilerChatPoweredBySection>
      {/* XCPBSTPB -> XilerChatPoweredBySectionTextPoweredBy */}
      <XCPBSTPB>Powered By</XCPBSTPB>
      <XilerChatPoweredBySectionTextWrapper>
        <XilerIcon />
        <XilerChatPoweredBySectionText>
          {/* XCPBSTX -> XilerChatPoweredBySectionTextXiler */}
          <XCPBSTX>Xiler</XCPBSTX>
        </XilerChatPoweredBySectionText>
      </XilerChatPoweredBySectionTextWrapper>
    </XilerChatPoweredBySection>
  );
}

function XilerIcon() {
  return (
    <XilerChatIcon>
      <XilerChatIconGroup>
        <XilerChatIconPath />
      </XilerChatIconGroup>
    </XilerChatIcon>
  );
}

export default Menu;
