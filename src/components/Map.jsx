import { MapContainer, TileLayer} from 'react-leaflet'
import WildfireMarker from './WildfireMarker';
import VolcanoeMarker from './VolcanoeMarker';
import SevereStormMarker from './SevereStormMarker';
import SeaLakeIceMarker from './SeaLakeIceMarker';

function Map({ eventData }) {
  const center = [35.223861, -30.519450];
  const zoom = 2.5;
  const markers = eventData.map((e, i) => {
    if(e.categories[0].id === "wildfires") {
      return (
        <WildfireMarker
          key={i} 
          id={e.id}
          title={e.title}
          position={[e.geometry[0].coordinates[1], e.geometry[0].coordinates[0]]}
        />
      )
    }
    // TODO: find lat lng bug
    // if(e.categories[0].id === "volcanoes") {
    //   return (
    //     <VolcanoeMarker
    //       key={i} 
    //       id={e.id}
    //       title={e.title}
    //       position={[e.geometry[0].coordinates[1], e.geometry[0].coordinates[0]]}
    //     />
    //   )
    // }
    if (e.categories[0].id === 'severeStorms') {
      return (
        <SevereStormMarker
          key={i}
          id={e.id}
          title={e.title}
          position={[
            [e.geometry[0].coordinates[1], e.geometry[0].coordinates[0]],
            [e.geometry[e.geometry.length - 1].coordinates[1], e.geometry[e.geometry.length - 1].coordinates[0]]
          ]}
          magnitudes={e.geometry.map(mag => mag.magnitudeValue)}
        />
      )
    }
    if (e.categories[0].id === 'seaLakeIce') {
      return (
        <SeaLakeIceMarker
          key={i}
          id={e.id}
          title={e.title}
          position={[
            [e.geometry[0].coordinates[1], e.geometry[0].coordinates[0]],
            [e.geometry[e.geometry.length - 1].coordinates[1], e.geometry[e.geometry.length - 1].coordinates[0]]
          ]}
          magnitudes={e.geometry.map(mag => mag.magnitudeValue)}
        />
      )
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
