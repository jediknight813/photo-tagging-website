import React, { useState } from "react";
import { return_user_data } from './firebase'


function Leaderboard() {
    const [users, updateUsers] = useState(return_user_data)

    function update_user_list() {
        updateUsers(return_user_data)
        updateUsers(return_user_data)

        DisplayUsersData()
        Object.entries(users).forEach((entry) => {
            console.log(entry[1]['username'], entry[1]['time']);
          });
    }




    function  DisplayUsersData() {


        return (
            <div className="leader_board_name_background">

            {Object.entries(users).forEach((entry) => {
            <h1> {entry[1]['username'] + entry[1]['time']} </h1>

          })}



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