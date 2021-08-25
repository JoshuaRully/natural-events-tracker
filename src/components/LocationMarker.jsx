import { CircleMarker, Popup } from 'react-leaflet';

function LocationMarker({ onClick, position, id, title }) {
  const redOptions = {color: 'red'}

  return (
    <CircleMarker
      center={position}
      onClick={onClick}
      pathOptions={redOptions}
      radius={10}
    >
      <Popup>
        <h1>Title: {title}</h1>
        <h2>ID: {id}</h2>
      </Popup>
    </CircleMarker>
  )
}

export default LocationMarker;
