import React from "react";

export default function PingButton() {
    //deconstructor
    const {isloading} = useRepetitionHook();
    const istrue = true;

    async function handleClick() {
        //call hook await
        alert("wip");
    }


    return(
        <div>
            {isloading ? ( 
                <button disabled={true}>Pinging</button>
            ) : (
                <button onClick={handleClick}>Ping</button>
            )}
        </div>
    );
};