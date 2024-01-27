import "./App.css";

import Sidebar from "./components/Sidebar";

import Chat from "./components/Chat";

const App = () => (
  <div className="app">
    <div className="app_body">
      <Sidebar />
      <Chat />
    </div>
  </div>
);

export default App;
