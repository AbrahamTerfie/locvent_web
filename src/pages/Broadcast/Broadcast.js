import React from "react";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  MessageSeparator,
  AttachmentButton,
  TypingIndicator,
  InputToolbox,
  SendButton,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { Row, Col } from "reactstrap";

const Broadcast = () => {
  return (
    <Row className="container m-4 p-4  mt-0 pt-0 ">
      <Col md={6}>
        <h1> notive posting aera </h1>
      </Col>
      <Col
        md={6}
        style={{
          height: "90vh",
        }}
      >
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content
              userName="Locvent public chat "
              info="250 members , 30 online"
            />
          </ConversationHeader>
          <MessageList
            typingIndicator={<TypingIndicator content="Emily is typing" />}
          >
            <MessageSeparator content="Saturday, 30 November 2019" />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sener: "abrham",
                direction: "outgoing",
                position: "single",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last",
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>

            <MessageSeparator content="Saturday, 31 November 2019" />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sener: "abrham",
                direction: "outgoing",
                position: "single",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last",
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              <Avatar
                src={
                  "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                }
                name={"Emily"}
              />
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            sendButton={false}
            attachButton={false}
          />
          <InputToolbox>
            <AttachmentButton />
            <SendButton />
          </InputToolbox>
        </ChatContainer>
      </Col>
    </Row>
  );
};
export default Broadcast;
