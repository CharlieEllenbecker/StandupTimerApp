import React, { useState ,useEffect } from 'react';

export default function ParticipantTableRow (props) {
    const [name, setName] = useState(props.name);
    const [totalTime, setTotalTime] = useState(props.totalTime);
    const [usedTime, setUsedTime] = useState(props.usedTime);
    const [isActive, setIsActive] = useState(props.isActive);

    useEffect(() => {
        const interval = setInterval(incrementUsedTime, 1000);
        return () => clearInterval(interval);
      });
    
    const toggleIsActive = () => {
        setIsActive(!isActive);   
    }

    const incrementUsedTime = () => {
        if(isActive){
            setUsedTime(usedTime + 1);
        }
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{Math.floor((totalTime)/60) + "m : " + (totalTime)%60 + "s"}</td>
            <td>{Math.floor((usedTime)/60) + "m : " + (usedTime)%60 + "s"}</td>
            <td><button type="button" className={`btn btn-${isActive ? 'success' : 'danger'}`} onClick={() => toggleIsActive()}>{isActive ? 'End' : 'Start'}</button></td>
        </tr>
    );
}