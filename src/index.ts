import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {defaults as defaultControls, ZoomToExtent} from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { transformExtent } from 'ol/proj';
import {fromExtent as polygonFromExtent} from 'ol/geom/Polygon';


var map = new Map({
  controls: defaultControls().extend([
    new ZoomToExtent({
      extent: [
        813079.7791264898, 5929220.284081122,
        848966.9639063801, 5936863.986909639
      ]
    })
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


document.getElementById('extent').addEventListener('click', (evt)=>{
  const geoExt = [70.17257585614846, 3.217039991614456, 90.37096439737016, 12.53404512997409]
  const extent = transformExtent(geoExt, 'EPSG:4326', 'EPSG:3857',);
  const poly = polygonFromExtent(extent);
  map.getView().fit(extent);
  //map.getView().fitInternal(poly);
});

map.on('click', (evt)=>{
  const ext = map.getView().calculateExtent();
  const geoExt = transformExtent(ext, 'EPSG:3857', 'EPSG:4326');
  console.log(ext);
  console.log(geoExt);
})
