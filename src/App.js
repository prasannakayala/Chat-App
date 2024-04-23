import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="
    e396a180-7dc9-4461-b1f5-406eb48491fd"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;


// username- Jack, Kiran and pwd- Chat@143