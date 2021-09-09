import React from 'react';
import { Rectangle, Popup } from 'react-leaflet';

function SevereStormMarker({ onClick, position, id, title }) {
  const blueOptions = {color: 'blue'};
  return (
    <Rectangle 
      bounds={position}
      onClick={onClick}
      pathOptions={blueOptions}
    >
      <Popup>
        <h1>Title: {title}</h1>
        <h2>ID: {id}</h2>
      </Popup>
    </Rectangle>
  )
}

export default SevereStormMarker;