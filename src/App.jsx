import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Map from './components/Map';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
      console.log(events);
    }

    getEvents();
  }, []);

  return (
    <div className="App">
      { !loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
