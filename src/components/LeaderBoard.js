import React, { useState } from "react";
import { return_user_data } from './firebase'


var user_list = []
var leader_board_classname = 'leader_board_name_background_hidden'


var hide_leader_board = true

function Leaderboard() {
    user_list.splice(0, user_list.length)
    const [users, updateUsers] = useState([])
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    function update_user_list() {
        updateUsers(return_user_data())
        if (hide_leader_board === true) {
            hide_leader_board = false
            leader_board_classname = 'leader_board_name_background'
            DisplayUsersData()
            forceUpdate()
        }

        else {
            hide_leader_board = true
            leader_board_classname = 'leader_board_name_background_hidden'
            forceUpdate()
        }
        

        ///Object.entries(users).forEach((entry) => {
         //   console.log(entry[1]['username'], entry[1]['time']);
         // });


        DisplayUsersData()
    }   


    function  DisplayUsersData() {
        console.log(users)
        var leaderboard_list = []

        Object.entries(users).forEach((entry) => {
             leaderboard_list.push([entry[1]['username'], entry[1]['time']]);
             });

        console.log(leaderboard_list +" leaderboard list")

        return (
            <div className={leader_board_classname}>


                <h1 className="leaderboard_user_text"> Name----Time </h1>

                    {leaderboard_list.map(Element =>
                            <h2 className="leaderboard_user_text" key={Math.random()}> {Element[0]+ ":   " + Element[1]} </h2>    
                        
                    )}

            </div>    

        )

    }


    
    return (
        <div> 
            <button onClick={() => update_user_list()}  className="leader_board_text"> Leaderboard </button>
            <DisplayUsersData />
        </div>
    );
}


export default Leaderboard