import { CircleMarker, Popup } from 'react-leaflet';

function SeaLakeIceMarker({ onClick, position, id, title }) {
  const turquoiseOptions = {color: 'turquoise'}

  return (
    <CircleMarker
      center={position}
      onClick={onClick}
      pathOptions={turquoiseOptions}
      radius={10}
    >
      <Popup>
        <h1>Title: {title}</h1>
        <h2>ID: {id}</h2>
      </Popup>
    </CircleMarker>
  )
}

export default SeaLakeIceMarker;