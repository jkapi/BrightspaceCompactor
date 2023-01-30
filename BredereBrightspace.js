// ==UserScript==
// @name         Bredere Brightspace
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  God waarom is er zoveel lege ruimte *sigh*
// @author       Joey
// @match        https://brightspace.avans.nl/*
// @match        https://s.brightspace.com/apps/smart-curriculum/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=avans.nl
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';

    // Full Width Brightspace
    addGlobalStyle(`
    #app #root-wrapper, .d2l-max-width { max-width: 100vw !important; }
    #app #root-wrapper { padding-top: 0px !important; }
    .content-panel-header {min-height: 0px !important; height: auto !important;}
    .content-panel { padding: 0 !important; }
    d2l-navigation-main-header, .d2l-navigation-header-container, .d2l-navigation-header-left, .d2l-navigation-header-right { height: 60px !important; }
    .d2l-navigation-s-main-wrapper { height: 2rem !important; }
    .navigation-menu { padding: 0 16px 0 12px !important; }
    #app #root-wrapper .unit { margin-top: 16px !important; }
    #app #root-wrapper .content-panel-header .info-container { min-height: 0px !important; padding-top: 0px !important;}
    .d2l-navigation-header-left { margin-top: -36px !important; }
    .d2l-navigation-header-right { margin-top: -31px !important; }`);
})();
