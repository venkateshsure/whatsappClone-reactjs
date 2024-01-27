import { Switch, BrowserRouter, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";

import Chat from "./components/Chat";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <div className="app_body">
          <BrowserRouter>
            <Switch>
              <Sidebar />
              <Route exact path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
