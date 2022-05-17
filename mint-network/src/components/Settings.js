import React, { useState } from "react";

const Settings = () => {

    let [count, changeCount] = useState(1);
    let increment = () => {
        changeCount(count + 1);
    }
    let refresh = () => {
        changeCount(0);
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => (increment())}>change count</button>
            <button onClick={() => (refresh())}>clear counter</button>
        </div>
    )
}

export default Settings;