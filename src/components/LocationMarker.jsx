import { CircleMarker, Popup } from 'react-leaflet';

function LocationMarker({ onClick }) {
  const position = [52.978443, -122.492668];
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
