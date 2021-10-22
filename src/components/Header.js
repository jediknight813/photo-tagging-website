import React from "react";
import '../styles/main.css'
import Leaderboard from "./LeaderBoard";


function Header(){


    return (
        <div className="header">
            <h1 className="header_text"> vultus </h1>
            <Leaderboard />
        </div>
    );
}

export default Header

