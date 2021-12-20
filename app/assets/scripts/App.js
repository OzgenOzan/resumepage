import "../styles/styles.css";
import MobileMenu from "./Modules/MobileMenu.js";
import Modal from "./Modules/Modal";

new Modal();
let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
