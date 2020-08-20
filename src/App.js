import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <h1>
        Hello Dongwoo100
        {/*    headr*/}
        <Header />
        <div className="app_body">
          <Sidebar />
          {/*sidebar*/}
          {/*react-router->chart screen*/}
        </div>
      </h1>
    </div>
  );
}

export default App;
