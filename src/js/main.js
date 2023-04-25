import dropdown from "./modules/dropdown";
import header from "./modules/header";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  dropdown(".header__dropdown", ".dropdown__menu", "dropdown__menu-active", "header__dropdown-active");
  header();
});