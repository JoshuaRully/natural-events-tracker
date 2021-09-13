import React from 'react';
import { avgMagnitude } from '../helpers/averageMagnitude';
import { Rectangle, Popup } from 'react-leaflet';

function SeaLakeIceMarker({ onClick, position, id, title, magnitudes }) {
  const purpleOptions = { color: 'darkturquoise' }

  return (
    // TODO: add conditional render for circle marker if position length is one
    <Rectangle 
      bounds={position}
      onClick={onClick}
      pathOptions={purpleOptions}
    >
      <Popup>
        <h1>Title: {title}</h1>
        <h2>ID: {id}</h2>
        <h2>Average Magnitude: {avgMagnitude(magnitudes)}</h2>
      </Popup>
    </Rectangle>
  )
}

export default SeaLakeIceMarker;