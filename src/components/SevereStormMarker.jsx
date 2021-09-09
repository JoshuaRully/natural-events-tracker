import React from 'react';
import { Rectangle, Popup } from 'react-leaflet';

function SevereStormMarker({ onClick, position, id, title, magnitudes }) {
  const blueOptions = {color: 'blue'};
  const avgMagnitude = (mags) => {
    let sum = 0;
    for (let i = 0; i < mags.length; i++) {
      sum += mags[i];
    }
    return sum / mags.length;
  }

  return (
    <Rectangle 
      bounds={position}
      onClick={onClick}
      pathOptions={blueOptions}
    >
      <Popup>
        <h1>Title: {title}</h1>
        <h2>ID: {id}</h2>
        <h2>Average Magnitude: {Math.floor(avgMagnitude(magnitudes))}</h2>
      </Popup>
    </Rectangle>
  )
}

export default SevereStormMarker;