// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zZXBodGhldW5pbWFzdGVyIiwiYSI6ImNtNXlseW5lMDBubjUya3B4cHN5ZDJrZXAifQ.UVUfdo0Z43sbyHiAOpL6kQ";

//Before map
const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/josephtheunimaster/cm6gmg9af00eh01s236nt2oer",
  center: [-0.089932, 51.514441],
  zoom: 14
});
//After map
const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/josephtheunimaster/cm6gml23l004y01s3ae0p6p6e",
  center: [-0.089932, 51.514441],
  zoom: 14
});

const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});