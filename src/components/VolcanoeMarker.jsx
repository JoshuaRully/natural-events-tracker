import React from 'react';
import { Rectangle, Popup } from 'react-leaflet';

function VolcanoeMarker({ onClick, position, id, title }) {
  const purpleOptions = { color: 'grey' }

  if (position.length > 0) {
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
        </Popup>
      </Rectangle>
    )
  } else {
    return <></>;
  }

}

export default VolcanoeMarker;