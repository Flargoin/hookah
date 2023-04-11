import dropdown from "./modules/dropdown";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    dropdown('.header__dropdown', '.dropdown__menu', 'dropdown__menu-active', 'header__dropdown-active');
});