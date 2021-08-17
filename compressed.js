// ==UserScript==
// @name         Gamepro5's Fandom Wiki Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A very simple script that removes bloat and gross stuff from the tumor that is fandom wikis.
// @author       Gamepro5.com
// @match        https://*.fandom.com/wiki/*
// @icon         https://www.google.com/s2/favicons?domain=fandom.com
// @grant        none
// ==/UserScript==
!function(){"use strict";function e(e){e&&e.parentNode.removeChild(e)}e(document.getElementsByClassName("global-navigation")[0]),e(document.getElementsByClassName("wds-global-footer")[0]),e(document.getElementsByClassName("mcf-wrapper")[0]),e(document.getElementsByClassName("page-side-tools")[0]),document.getElementsByClassName("main-container")[0].style.marginLeft="0px",document.getElementsByClassName("main-container")[0].style.width="100%",document.getElementsByClassName("fandom-sticky-header")[0].style.left="0px",document.getElementsByClassName("resizable-container")[0].style.width="100%",document.getElementsByClassName("resizable-container")[0].style.maxWidth="100%",document.getElementsByClassName("wiki-tools__search")[0].style.paddingLeft="50px",document.getElementsByClassName("wiki-tools__search")[0].style.paddingRight="50px",document.getElementsByClassName("wiki-tools__search")[1].style.paddingLeft="50px",document.getElementsByClassName("wiki-tools__search")[1].style.paddingRight="50px"}();