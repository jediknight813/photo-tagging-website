import React, { useState } from "react";
import fireBaseTesting from './firebase'
import { get_current_user_data, updateUserTime } from "./firebase";


var name_entered = false


function StartScreen() {
    const [name, setName] = useState('');
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);



    function Timer() {
        let b = get_current_user_data()
        if (b['item_one_found'] === true && b['item_two_found'] === true && b['item_three_found'] === true){
            return ("all items found")
        }
        updateUserTime(1, name)
        setTimeout(() => {Timer()}, 1000);
    }




    function button_clicked() {
        fireBaseTesting(name, 0)
        name_entered = true
        Timer()
        forceUpdate()
    }


    if (name_entered === false) {
        return (
            <div>
                <div className="start_screen"> </div>
                <input  value={name} onInput={e => setName(e.target.value)} placeholder="enter name" className="start_screen_name" type="text" />
                <button onClick={() => button_clicked()} className="start_button"> confirm </button>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        );
    }
}

export default StartScreen