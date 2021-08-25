import { MapContainer, TileLayer} from 'react-leaflet'
import LocationMarker from './LocationMarker';

function Map({ eventData }) {
  const center = [46.872053, -105.284258];
  const zoom = 4.5;
  const markers = eventData.map(e => {
    if(e.categories[0].id === "wildfires") {
      return <LocationMarker position={e.geometry[0].coordinates}/>
    } 
    return null;
  })

  return (
    <div>
      <MapContainer center={center} zoom={zoom} style={{height: "100vh"}}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  )
}

export default Map;
