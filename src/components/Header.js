import React, { useState } from "react";
import '../styles/main.css'
import Leaderboard from "./LeaderBoard";
import Item from "./item";
import item_one_image from '../images/cortana.png'
import item_two_image from '../images/link.png'
import item_three_image from '../images/neo.png'
import { get_current_user_data } from "./firebase";


var item_one = {classname: "item_not_found", name: "cortana", image: item_one_image }
var item_two = {classname: "item_not_found", name: "link", image: item_two_image }
var item_three = {classname: "item_not_found", name: "neo", image: item_three_image }


function Update_if_item_found() {
    let x = get_current_user_data()
    if (x['item_one_found'] === true) {
        item_one['classname'] = "item_found"
   }

    if (x['item_two_found'] === true) {
        item_two['classname'] = "item_found"
    }

    if (x['item_three_found'] === true) {
        item_three['classname'] = "item_found"
    }
}


function Header(){
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1)
      }, 1000);
    
    return (
        <div className="header">
            <h1 className="header_text"> vultus </h1>
            <div className="find_item_container">
                    <Item data={item_one} />
                    <Item data={item_two} />
                    <Item data={item_three} />
                </div>
            <Leaderboard />
        </div>
    );
}


export default Header

export { Update_if_item_found }