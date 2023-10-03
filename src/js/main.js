import "../css/style.css";
import javascriptLogo from "../../assets/icons/javascript.svg";
import viteLogo from "../../assets/icons/vite.svg";
import { setupCounter } from "./counter.js";
import { Loader } from "@googlemaps/js-api-loader";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

const loader = new Loader({
  apiKey: import.meta.env.VITE_API_KEY_GMAPS,
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: -6.996647007867606,
    lng: 110.41536337897409,
  },
  zoom: 18,
  mapId: "4504f8b37365c3d0",
};

loader
  .importLibrary("maps")
  .then(async ({ Map }) => {
    const map = new Map(document.getElementById("map"), mapOptions);
    const { AdvancedMarkerElement } = await loader.importLibrary("marker");
    new AdvancedMarkerElement({ map, position: mapOptions.center });
  })
  .catch((e) => {
    // do something
  });
