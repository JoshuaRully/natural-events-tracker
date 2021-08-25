import { CircleMarker, Popup } from 'react-leaflet';

function LocationMarker({ onClick, position, id }) {
  const redOptions = {color: 'red'}

  return (
    <CircleMarker
      // TODO: fix warning about key ~ not sure why considering its being passed
      key={id}
      center={position}
      onClick={onClick}
      pathOptions={redOptions}
      radius={10}
    >
      <Popup>Wildifre info. will go here! ID: {id}</Popup>
    </CircleMarker>
  )
}

export default LocationMarker;
