import React, { useState } from 'react';
import ParticipantTableRow from './ParticipantTableRow';
import data from '../mock-data.json';

export default function ParticipantTable() {

    const [participantList, setParticipantList] = useState(data);

    const [nameInput, setNameInput] = useState("");

    const generateParticipants = () => {
        return participantList.map((p, i) => {
            return <ParticipantTableRow key={i} name={p.name} totalTime={p.totalTime} usedTime={p.usedTime} isActive={p.isActive}/>
        })
    }

    const handleChange = (event) => {
        event.preventDefault();
        setNameInput(event.target.value);
    }

    const handleAddParticipant = (event) => {
        event.preventDefault();
        setParticipantList([...participantList, {name: nameInput, totalTime: 120, usedTime: 0, isActive: false}]);
        setNameInput("");
        document.getElementById("nameInput").value = "";
    }

    return (
        <div className="ParticipantTable container border border-dark">
            <table className="table">
                <thead>
                    <tr>
                        <th>Participant Name</th>
                        <th>Total Time</th>
                        <th>Used Time</th>
                        <th>Start/Stop Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {generateParticipants()}
                    <tr>
                        <th>
                            <form className="input-group" onSubmit={handleAddParticipant}>
                                <input className="form-control" id="nameInput" type="text" placeholder="Name" onChange={handleChange} required/>
                                <button className="btn btn-outline-secondary" type="submit">Add</button>
                            </form>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}