import React, { useEffect, useState } from "react";


const Settings = () => {

    let [count, changeCount] = useState(1);
    let increment = () => changeCount(count + 1);
    let decrement = () => changeCount(count - 1);
    let refresh = () => changeCount(0);

    let [isWriting, setIsWriting] = useState(false);

    let startWrite = () => setIsWriting(true);
    let finishWrite = () => setIsWriting(false);

    useEffect(() => {
       console.log(`checking useEffect + ${count}`);
    }, [count]); 

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => (increment())}>count + 1</button>
            <button onClick={() => (decrement())}>count - 1</button>
            <button onClick={() => (refresh())}>clear counter</button>
            {isWriting
              ? <div>you are writing</div>
              : <div>you are not writing</div>
            }
            <div>
                <button onClick={startWrite}>write</button>
                <button onClick={finishWrite}>no write</button>
            </div>
        </div>
    )
}

export default Settings;