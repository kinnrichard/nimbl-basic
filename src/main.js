import { routes } from "./routes/index.js";
import "./pages/index.js";
const app = document.querySelector("#app");

// assign routes
app.routes = routes;

//redirect / to index#/
if (window.location.pathname === "/") {
  window.location.href = "#/";
}
