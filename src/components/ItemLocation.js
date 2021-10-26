import React from "react";
import '../styles/main.css'


function ItemLocation( itemData ) {


    function item_found() {
        


    }


    return (
        <div onClick={() => item_found() } className={itemData['data']['classname']}>

        </div>
    )
    }


export default ItemLocation