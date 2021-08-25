import { CircleMarker, Popup } from 'react-leaflet';

function LocationMarker({ onClick, position }) {
  const redOptions = {color: 'red'}

  return (
    <CircleMarker
      center={position}
      onClick={onClick}
      pathOptions={redOptions}
      radius={10}
    >
      <Popup>Wildifre info. will go here!</Popup>
    </CircleMarker>
  )
}

export default LocationMarker;
