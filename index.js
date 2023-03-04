import { header } from "./js/componants/header/index.js";
import { main } from "./js/componants/main/sessions/index.js";
//import { wait } from "./js/componants/reusable/waitSPiner.js";

const app = document.getElementById("App");
app.innerHTML = await header();
app.insertAdjacentHTML("beforeend", await main());