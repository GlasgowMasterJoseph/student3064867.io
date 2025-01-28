// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zZXBodGhldW5pbWFzdGVyIiwiYSI6ImNtNXlseW5lMDBubjUya3B4cHN5ZDJrZXAifQ.UVUfdo0Z43sbyHiAOpL6kQ";

const style_2022 =
  "mapbox://styles/josephtheunimaster/cm6gmg9af00eh01s236nt2oer";
const style_2024 =
  "mapbox://styles/josephtheunimaster/cm6gml23l004y01s3ae0p6p6e";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2022,
  center: [-0.089932, 51.514441],
  zoom: 14
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2022") {
      map.setStyle(style_2022);
    }
    if (layer.target.id == "style_2024") {
      map.setStyle(style_2024);
    }
  };
}