import React from "react";
import './app.css';
import Body from "./components/BodySection/Body";
import Sidebar from "./components/SidebarSection/Sidebar";

const App = () => {
    return(
        <div className="container">
            <Sidebar />
            <Body />
        </div>
        
    )
}

export default App;