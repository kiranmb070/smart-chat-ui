import { observer } from "mobx-react-lite";
import { Bubble, ChatContainer,InputBox, MessageRow, Messages } from "./styles";

export const Chat=observer(()=>{
    return (
        <ChatContainer>
      <Messages>
        {chatStore.messages.map((msg) => (
          <MessageRow key={msg.id} role={msg.role}>
            <Bubble role={msg.role}>{msg.content}</Bubble>
          </MessageRow>
        ))}
        <div ref={bottomRef} />
      </Messages>

      <InputBox
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        placeholder="Ask anything..."
      />
    </ChatContainer>
    )
})