import React from "react";


function item(item_data) {


    return (
        <div>
            <img src={item_data['data']['image']} alt="item_image" className={item_data['data']['classname']} />
            <h1> {item_data['data']['name']} </h1>
        </div>
    );  
}


export default item