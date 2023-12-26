import React from "react";

const AudioPlayer = ()=>{
    return(
        <div className="audio">
            <audio controls>
                <source src="/Led_Zeppelin_Stairway_To_Heaven.mp3" type="audio/mp3"/>
            </audio>
        </div>
    )
}

export default AudioPlayer