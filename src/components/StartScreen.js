import React, { useState } from "react";

var name_entered = false


function StartScreen() {
    const [name, setName] = useState('');
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    function button_clicked() {
        name_entered = true
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