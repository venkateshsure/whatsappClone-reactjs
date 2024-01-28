import { Avatar } from "@material-ui/core";

import { db } from "../../firebase";

import { Link } from "react-router-dom";

import "./index.css";

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      db.collection("room").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src="https://api.dicebear.com/7.x/adventurer/svg" />

        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

/* <Avatar src={`https://vatars.dicebear.com/api/human/${seed}.svg`} */
