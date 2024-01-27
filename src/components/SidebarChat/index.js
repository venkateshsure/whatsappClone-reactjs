import { Avatar } from "@material-ui/core";

import "./index.css";

function SidebarChat({ addNewChat }) {
  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src="https://api.dicebear.com/7.x/adventurer/svg" />

      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

/* <Avatar src={`https://vatars.dicebear.com/api/human/${seed}.svg`} */
