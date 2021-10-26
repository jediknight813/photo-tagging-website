import React from "react";
import '../styles/main.css'


function ItemLocation( itemData ) {

    console.log(itemData['data']['classname'])


return (
    <div onClick={() => console.log(itemData['data']['name'] + ' here')} className={itemData['data']['classname']}>

    </div>
)
}


export default ItemLocation