import styles from '../styles.css';
import { useState } from 'react';
import ParticipantTable from "./ParticipantTable";
import Clock from './Clock';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);          // has the meeting started? are we just adding participants now before?...

  return (
    <div className="App container-fluid border border-dark">
      <div className="row">
        <div className="col-4">
          <ParticipantTable />
        </div>
        <div className="col-8">
          <Clock />
        </div>
      </div>
    </div>
  );
}