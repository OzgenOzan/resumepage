import "../styles/styles.css";
import MobileMenu from "./Modules/MobileMenu.js";

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
