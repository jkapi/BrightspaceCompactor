// ==UserScript==
// @name         Bredere Brightspace
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  God waarom is er zoveel lege ruimte *sigh*
// @author       Joey
// @match        https://brightspace.avans.nl/*
// @match        https://s.brightspace.com/apps/smart-curriculum/*
// @match        https://cdn.lcs.brightspace.com/widgets/visual_toc/*
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
    .d2l-navigation-s-main-wrapper { height: 1.5rem !important; }
    .navigation-menu { padding: 0 16px 0 12px !important; }
    #app #root-wrapper .unit { margin: 0 0 16px 0 !important; }
    #app #root-wrapper .content-panel-header .info-container { min-height: 0px !important; padding-top: 0px !important;}
    .d2l-navigation-header-left { margin-top: -38px !important; }
    .d2l-navigation-header-right { margin-top: -31px !important; }
    .navigation-tree { margin: 8px 0 0 0 !important;}
    .unit-box, .topic-box, .lesson-box { padding: 2px 0 0 10px !important; height: 52px !important; }
    .module-display { width: 100% !important; padding-left: 12px;}
    #app #root-wrapper .module-display .module-inner-container .module-header.shift-down { margin-top: 1.5rem !important; }
    /* Home Pages */
    .d2l-course-banner-container { height: 105px !important; }
    .d2l-widget { margin-top: 5px !important; padding: 8px 15px 8px 15px !important;}
    .homepage-container>div:not(.homepage-row):not(:last-child), .homepage-row>div:not(:last-child), .homepage-row>div>div:not(:last-child) { margin-right: 2% !important; }
    @media screen and (min-width: 768px) {.homepage-col-6 { width: 49% !important; }}
    .flip-container, .back, .front { height: 200px !important; margin-top: 0;}
    .progress-container { bottom: 0 !important; }
    .userActiveBorder { height: 205px !important; }
    .headerarea h3, .progress-container { margin-top: 8px; padding-left: 10px; padding-right: 10px;}
    .d2l-widget-content-padding { padding-top: 0px !important; }
    .alltiles { grid-gap: 12px; }
    /* Calendar */
    .d2l-datalist-item-content > div { padding: 3px 0 !important; }
    .d2l-collapsepane .d2l-collapsepane-header { padding: 0.4rem 0.6rem 0 0.6rem !important; }
    /* Front page */
    .course-card-grid.columns-3 { grid-template-columns: repeat(4, 1fr) !important; column-gap: 5px; }
    `);
})();
