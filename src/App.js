import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import { useStateValue } from './components/Login/StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="App">
            {/*    header*/}
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <div className="app_body">
                            {/*sidebar*/}
                            <Sidebar />

                            <Switch>
                                <Route path="/room/:roomId">
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <h1> Welcome</h1>
                                </Route>
                            </Switch>
                            {/*react-router->chart screen*/}
                        </div>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;
