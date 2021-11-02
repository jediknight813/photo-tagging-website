import React from "react";
import '../styles/main.css'
import { item_one_found } from './firebase'
import { item_two_found } from "./firebase";
import { item_three_found } from "./firebase";
import { Update_if_item_found } from "./Header";


function ItemLocation( itemData ) {
    console.log(itemData)

    function item_found() {
        if (itemData['data']['classname'] === 'item_one') {
            Update_if_item_found()
            item_one_found()
        }

        if (itemData['data']['classname'] === 'item_two') {
            Update_if_item_found()
            item_two_found()
        }

        if (itemData['data']['classname'] === 'item_three') {
            Update_if_item_found()
            item_three_found()
        }


    }


    return (
        <div onClick={() => item_found() } className={itemData['data']['classname']}>

        </div>
    )
    }


export default ItemLocation