/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backdrop.jpg */ "./src/images/backdrop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --location-input-height: 24px;
    --info-side-padding: 550px;
    --background-color: rgb(111, 183, 247, 0.2);
    --compass-size: 75px;
}

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: none;
    padding: none;
}

body {
    display: flex;
    flex-direction: column;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0;
    height: 100vh;
}

header {
    height: 94px;
    width: 100vw;
    font-size: 26px;
    background-color: var(--background-color);

}

h1 {
    margin-top: 12px;
    padding: 0;
    color: black;
    text-align: center;
}

#main-container {
    place-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
}

#info-container {
    display: flex;
    align-items: center;
    flex: 3 1 0;
    width: 75%;
    align-items: center;
    /* padding: 0 var(--info-side-padding); */
}

#info-container>* {
    width: calc(100%/3);
    height: 100%;
}

#weather-icon {
    width: 150px;
}

#condition-text {
    margin-top: -20px;
    margin-bottom: 20px;
    font-size: 38px;
}

#city-info {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
}


.city-details {
    font-size: 58px;
}

#country {
    font-size: 34px;
    margin-bottom: 4px;
}

#weather-conditions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
}

#compass-container {
    aspect-ratio: 1;
    width: var(--compass-size);
    margin-bottom: auto;
}

#compass-body {
    position: absolute;
    opacity: .3;
    width: var(--compass-size);

}


#wind-dir-icon {
    position: relative;
    z-index: 1;
    width: var(--compass-size);
}

#compass-wind-dir-text {
    width: var(--compass-size);
    text-align: center;
    font-size: 28px;
}

#weather-info {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 45%;
    height: 93%;
    margin-right: 3%;
    padding: 20px;
    background-color: rgb(51, 48, 202, .2);
    border-radius: 20px;
}

.weather-details {
    font-size: 20px;
}

#graph {
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/400px-Pushkin_population_history.svg.png);
    background-repeat: no-repeat;
    height: calc(100%/2);
    width: 100%;
}

#day-0 {
    font-size: 20px;
    font-weight: 500;
}

#input-container {
    display: flex;
    flex-direction: column-reverse;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    padding: 0 var(--info-side-padding);
}

#radio-container {
    display: flex;
}

#radio-celcius,
#radio-fahrenheit {
    display: flex;
    flex-direction: column;
    margin: 8px;
}

#ch-bar {
    display: flex;
    align-items: center;
}

input {
    border-radius: 25px;
    border: 1px solid black;
    padding: 0 10px;
}

input::placeholder {
    margin-left: 20px;
}

button {
    margin-left: 10px;
    border-radius: 15px;
    border: solid 1px;
    width: 75px;
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding-top: auto;
    height: 2rem;
    background-color: rgba(34, 65, 92, 0.4);

}

#link-back {
    color: rgb(176, 175, 241);
}


#input-location {
    height: var(--location-input-height);
    width: 150px;
}

#submit-location {
    height: var(--location-input-height);
    aspect-ratio: 5/2;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,2CAA2C;IAC3C,oBAAoB;AACxB;;AAEA;IACI,mJAAmJ;IACnJ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yDAA+C;IAC/C,uBAAuB;IACvB,qBAAqB;IACrB,4BAA4B;IAC5B,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,yCAAyC;;AAE7C;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;AAClC;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,0BAA0B;;AAE9B;;;AAGA;IACI,kBAAkB;IAClB,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,8BAA8B;IAC9B,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wJAAwJ;IACxJ,4BAA4B;IAC5B,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,uCAAuC;;AAE3C;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;AACrB","sourcesContent":[":root {\n    --location-input-height: 24px;\n    --info-side-padding: 550px;\n    --background-color: rgb(111, 183, 247, 0.2);\n    --compass-size: 75px;\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: none;\n    padding: none;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-image: url('../images/backdrop.jpg');\n    background-color: white;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    margin: 0;\n    height: 100vh;\n}\n\nheader {\n    height: 94px;\n    width: 100vw;\n    font-size: 26px;\n    background-color: var(--background-color);\n\n}\n\nh1 {\n    margin-top: 12px;\n    padding: 0;\n    color: black;\n    text-align: center;\n}\n\n#main-container {\n    place-self: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--background-color);\n}\n\n#info-container {\n    display: flex;\n    align-items: center;\n    flex: 3 1 0;\n    width: 75%;\n    align-items: center;\n    /* padding: 0 var(--info-side-padding); */\n}\n\n#info-container>* {\n    width: calc(100%/3);\n    height: 100%;\n}\n\n#weather-icon {\n    width: 150px;\n}\n\n#condition-text {\n    margin-top: -20px;\n    margin-bottom: 20px;\n    font-size: 38px;\n}\n\n#city-info {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.city-details {\n    font-size: 58px;\n}\n\n#country {\n    font-size: 34px;\n    margin-bottom: 4px;\n}\n\n#weather-conditions {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: auto;\n}\n\n#compass-container {\n    aspect-ratio: 1;\n    width: var(--compass-size);\n    margin-bottom: auto;\n}\n\n#compass-body {\n    position: absolute;\n    opacity: .3;\n    width: var(--compass-size);\n\n}\n\n\n#wind-dir-icon {\n    position: relative;\n    z-index: 1;\n    width: var(--compass-size);\n}\n\n#compass-wind-dir-text {\n    width: var(--compass-size);\n    text-align: center;\n    font-size: 28px;\n}\n\n#weather-info {\n    margin-left: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    width: 45%;\n    height: 93%;\n    margin-right: 3%;\n    padding: 20px;\n    background-color: rgb(51, 48, 202, .2);\n    border-radius: 20px;\n}\n\n.weather-details {\n    font-size: 20px;\n}\n\n#graph {\n    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/400px-Pushkin_population_history.svg.png);\n    background-repeat: no-repeat;\n    height: calc(100%/2);\n    width: 100%;\n}\n\n#day-0 {\n    font-size: 20px;\n    font-weight: 500;\n}\n\n#input-container {\n    display: flex;\n    flex-direction: column-reverse;\n    flex: 1 1 0;\n    justify-content: center;\n    align-items: center;\n    padding: 0 var(--info-side-padding);\n}\n\n#radio-container {\n    display: flex;\n}\n\n#radio-celcius,\n#radio-fahrenheit {\n    display: flex;\n    flex-direction: column;\n    margin: 8px;\n}\n\n#ch-bar {\n    display: flex;\n    align-items: center;\n}\n\ninput {\n    border-radius: 25px;\n    border: 1px solid black;\n    padding: 0 10px;\n}\n\ninput::placeholder {\n    margin-left: 20px;\n}\n\nbutton {\n    margin-left: 10px;\n    border-radius: 15px;\n    border: solid 1px;\n    width: 75px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n    padding-top: auto;\n    height: 2rem;\n    background-color: rgba(34, 65, 92, 0.4);\n\n}\n\n#link-back {\n    color: rgb(176, 175, 241);\n}\n\n\n#input-location {\n    height: var(--location-input-height);\n    width: 150px;\n}\n\n#submit-location {\n    height: var(--location-input-height);\n    aspect-ratio: 5/2;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   drawFooter: () => (/* binding */ drawFooter),
/* harmony export */   drawHeader: () => (/* binding */ drawHeader),
/* harmony export */   drawMainContainer: () => (/* binding */ drawMainContainer)
/* harmony export */ });
// const compass = 'https://i.imgur.com/SH5AKLq.png';
const N = '';
const NW = '';
const NE = '';
const S = '';
const SW = '';
const SE = '';
const W = '';
const E = '';


const body = document.body;
const placeholderText = 'placeholder';


//
// Header
//
function drawHeader() {
    // Header
    const header = document.createElement('header');
    // H1
    const h1 = document.createElement('h1');
    h1.textContent = 'Weather App';

    // Appending
    header.appendChild(h1);
    body.appendChild(header);
};

//
// Main container
//
function drawMainContainer(data) {
    // Container
    const div = document.createElement('div');
    div.id = 'main-container';
    drawInfoContainer(div, data);
    drawInputForm(div);

    // Append
    body.append(div);
};

//
// Footer
//
function drawFooter() {
    // Footer
    const footer = document.createElement('footer');
    const span = document.createElement('span');
    const a = document.createElement('a');
    a.id = 'link-back'
    a.setAttribute('href', 'https://www.weatherapi.com/');
    a.setAttribute('title', 'Free Weather API');
    a.textContent = 'WeatherAPI.com'
    span.textContent = `A TOP Project | Powered by `

    // Appending
    span.appendChild(a)
    footer.appendChild(span)
    body.appendChild(footer);
};

//
// Input Form
//
function drawInputForm(containingFunction) {
    // Container
    const container = document.createElement('div');
    container.id = 'input-container';
    // Form
    const form = document.createElement('form');
    form.id = 'search-bar'
    // Input
    const input = document.createElement('input');
    input.id = 'input-location';
    input.setAttribute('placeholder', 'Search for location');
    // Button
    const btn = document.createElement('button');
    btn.id = 'submit-location';
    btn.textContent = 'Search';

    //Appending
    drawUnitSelector(container);
    form.appendChild(input);
    form.appendChild(btn);
    container.appendChild(form);
    containingFunction.appendChild(container);
};

//
// Unit selector
//
function drawUnitSelector(containingFunction) {
    const container = document.createElement('div');
    container.id = 'radio-container';
    const containerC = document.createElement('div');
    containerC.id = 'radio-celcius';
    const containerF = document.createElement('div');
    containerF.id = 'radio-fahrenheit';


    const radioCelcius = document.createElement('input');
    radioCelcius.setAttribute('type', 'radio');
    radioCelcius.setAttribute('name', 'unit');
    radioCelcius.setAttribute('value', 'celcius');
    radioCelcius.setAttribute('checked', 'checked');
    radioCelcius.id = 'celcius';
    const labelCelcius = document.createElement('label');
    labelCelcius.setAttribute('for', 'celcius');
    labelCelcius.textContent = 'Metric';

    containerC.appendChild(radioCelcius);
    containerC.appendChild(labelCelcius);

    const radioFahrenheit = document.createElement('input');
    radioFahrenheit.setAttribute('type', 'radio');
    radioFahrenheit.setAttribute('name', 'unit');
    radioFahrenheit.setAttribute('value', 'fahrenheit');
    radioFahrenheit.id = 'fahrenheit';
    const labelFahrenheit = document.createElement('label');
    labelFahrenheit.setAttribute('for', 'fahrenheit');
    labelFahrenheit.textContent = 'Imperial';

    containerF.appendChild(radioFahrenheit);
    containerF.appendChild(labelFahrenheit);

    container.appendChild(containerC);
    container.appendChild(containerF);
    containingFunction.appendChild(container);
};


//
// Info Container
//
function drawInfoContainer(containingFunction, data) {
    // Info container
    const div = document.createElement('div');
    div.id = 'info-container';
    drawLocationInfo(div, data);
    drawWeatherInfo(div, data);
    drawForecast(div);
    containingFunction.appendChild(div);
};
function drawForecast(containingFunction, days = 3) {
    const forecastContainer = document.createElement('div');
    forecastContainer.id = 'forecast';
    for (let i = 0; i < days; i++) {
        const day = document.createElement('div');
        day.id = `day-${i}`;
        const icon = document.createElement('img');
        icon.id = `forecast-icon-${i}`;
        icon.src = ''
        const date = document.createElement('div');
        date.id = `${i}-date`;
        const temp = document.createElement('div');
        temp.id = `${i}-temp`;
        const precipitation = document.createElement('div');
        precipitation.id = `${i}-precipitation`
        const humidity = document.createElement('div');
        humidity.id = `${i}-humidity`;
        day.appendChild(icon);
        day.appendChild(date);
        day.appendChild(temp);
        day.appendChild(precipitation)
        day.appendChild(humidity)

        forecastContainer.appendChild(day)
    };


    // Appening
    containingFunction.appendChild(forecastContainer);
};
//
// City Info
//
function drawLocationInfo(containingFunction, data) {
    const div = document.createElement('div');
    div.id = 'city-info';

    drawLocationDetails(div, data);
    containingFunction.appendChild(div);
};

//
// City Details
//
function drawLocationDetails(containingFunction, data) {
    // Container
    const weatherConditions = document.createElement('div');
    weatherConditions.id = 'weather-conditions';

    const locationInfo = document.createElement('div');
    locationInfo.id = 'location-info';

    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.setAttribute('src', '//cdn.weatherapi.com/weather/64x64/day/113.png');


    const compassContainer = document.createElement('div');
    compassContainer.id = 'compass-container';
    const compassBody = document.createElement('img');
    compassBody.id = 'compass-body';
    compassBody.src = 'https://i.imgur.com/SH5AKLq.png';
    const compassWindDirIcon = document.createElement('img');
    compassWindDirIcon.id = 'wind-dir-icon'
    compassWindDirIcon.src = 'https://i.imgur.com/ID05YeQ.png';
    const compassWindDirText = document.createElement('div');
    compassWindDirText.id = 'compass-wind-dir-text';
    compassWindDirText.textContent = 'N';



    const conditionText = document.createElement('span');
    conditionText.id = 'condition-text';
    conditionText.textContent = 'Sunny';
    const city = document.createElement('div');
    city.setAttribute('class', 'city-details');
    city.id = 'city';
    city.textContent = 'Ponyville';
    const country = document.createElement('div');
    country.setAttribute('class', 'city-details');
    country.id = 'country';
    country.textContent = 'Equestria';
    const time = document.createElement('div');
    time.id = 'time';
    time.textContent = '';

    // Appending
    weatherConditions.appendChild(weatherIcon)
    weatherConditions.appendChild(conditionText)
    weatherConditions.appendChild(compassContainer)
    //
    compassContainer.appendChild(compassBody);
    compassContainer.appendChild(compassWindDirIcon)
    compassContainer.appendChild(compassWindDirText)
    //
    //
    locationInfo.appendChild(city);
    locationInfo.appendChild(country);
    //
    containingFunction.appendChild(weatherConditions);
    containingFunction.appendChild(locationInfo);
    containingFunction.appendChild(time);
};

//
// Weather info
//
function drawWeatherInfo(containingFunction, data) {
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-info';
    const divCity = document.createElement('div');
    divCity.id = 'city-info';
    drawWeatherDetails(weatherContainer, data);
    drawGraph(weatherContainer);
    containingFunction.appendChild(weatherContainer);
};

//
// Weather Details
//
function drawWeatherDetails(containingFunction, data) {
    // Container
    const container = document.createElement('div');
    container.id = 'weather-details';

    // Temperature
    const divTemp = document.createElement('div');
    divTemp.setAttribute('class', 'weather-details');
    const labelTemp = document.createElement('label');
    labelTemp.setAttribute('for', 'temp');
    labelTemp.textContent = 'Temperature: ';
    const spanTemp = document.createElement('span');
    spanTemp.id = 'temp';
    spanTemp.textContent = '30°C';
    divTemp.appendChild(labelTemp);
    divTemp.appendChild(spanTemp);

    // Precipitation
    const divPrecipitation = document.createElement('div');
    divPrecipitation.setAttribute('class', 'weather-details');
    const labelPrecipitation = document.createElement('label');
    labelPrecipitation.setAttribute('for', 'precipitation');
    labelPrecipitation.textContent = 'Precipitation: ';
    const spanPrecipitation = document.createElement('span');
    spanPrecipitation.id = 'precipitation';
    spanPrecipitation.textContent = '0mm';
    divPrecipitation.appendChild(labelPrecipitation);
    divPrecipitation.appendChild(spanPrecipitation);
    // Humidity
    const divHumidity = document.createElement('div');
    divHumidity.setAttribute('class', 'weather-details');
    const labelHumidity = document.createElement('label');
    labelHumidity.setAttribute('for', 'humidity');
    labelHumidity.textContent = 'Humidity: ';
    const spanHumidity = document.createElement('span');
    spanHumidity.id = 'humidity';
    spanHumidity.textContent = '31%';
    divHumidity.appendChild(labelHumidity);
    divHumidity.appendChild(spanHumidity);

    // Wind
    const divWind = document.createElement('div');
    divWind.setAttribute('class', 'weather-details');
    const labelWind = document.createElement('label');
    labelWind.setAttribute('for', 'wind');
    labelWind.textContent = 'Wind: ';
    const spanWind = document.createElement('span');
    spanWind.id = 'wind';
    spanWind.textContent = '1 m/s';
    divWind.appendChild(labelWind);
    divWind.appendChild(spanWind);
    // Uv
    const divUv = document.createElement('div');
    divUv.setAttribute('class', 'weather-details');
    const labelUv = document.createElement('label');
    labelUv.setAttribute('for', 'uv');
    labelUv.textContent = 'Uv: ';
    const spanUv = document.createElement('span');
    spanUv.id = 'uv';
    spanUv.textContent = '0';
    divUv.appendChild(labelUv);
    divUv.appendChild(spanUv);

    // Main Appending
    containingFunction.appendChild(divTemp);
    containingFunction.appendChild(divPrecipitation);
    containingFunction.appendChild(divHumidity);
    containingFunction.appendChild(divWind);
};

//
// Graph
//
function drawGraph(containingFunction) {
    // Graph
    const graph = document.createElement('div');
    graph.id = 'graph';
    graph.textContent = 'Graph? Maybe?';

    // Appending
    containingFunction.appendChild(graph);
};

/***/ }),

/***/ "./src/js/updateDetails.js":
/*!*********************************!*\
  !*** ./src/js/updateDetails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeUnits: () => (/* binding */ changeUnits),
/* harmony export */   printData: () => (/* binding */ printData)
/* harmony export */ });


async function printData(dataObj, days = 3) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';

    document.getElementById('weather-icon').setAttribute('src', data.condition.icon);
    document.getElementById('condition-text').textContent = data.condition.text;


    document.getElementById('time').textContent = 'Last update: ' + data.lastUpdate;
    document.getElementById('city').textContent = data.location.city;
    document.getElementById('country').textContent = data.location.country;
    if (data.location.city.length > 10) { document.getElementById('city').style.fontSize = '34px'; document.getElementById('country').style.fontSize = '24px' }
    else { document.getElementById('city').style.fontSize = '58px'; document.getElementById('country').style.fontSize = '34px' };
    changeUnits(dataObj);




    const compassWindDirText = document.getElementById('compass-wind-dir-text');
    compassWindDirText.textContent = data.wind_dir;
    const windDirIcon = document.getElementById('wind-dir-icon');
    if (data.wind_dir === 'N') { windDirIcon.style.transform = 'rotate(0deg)' };
    if (data.wind_dir === 'NNE') { windDirIcon.style.transform = 'rotate(22.5deg)' };
    if (data.wind_dir === 'NE') { windDirIcon.style.transform = 'rotate(45deg)' };
    if (data.wind_dir === 'ENE') { windDirIcon.style.transform = 'rotate(67.5deg)' };
    if (data.wind_dir === 'E') { windDirIcon.style.transform = 'rotate(90deg)' };
    if (data.wind_dir === 'ESE') { windDirIcon.style.transform = 'rotate(112.5deg)' };
    if (data.wind_dir === 'SE') { windDirIcon.style.transform = 'rotate(135deg)' };
    if (data.wind_dir === 'SSE') { windDirIcon.style.transform = 'rotate(157.5deg)' };
    if (data.wind_dir === 'S') { windDirIcon.style.transform = 'rotate(180deg)' };
    if (data.wind_dir === 'SSW') { windDirIcon.style.transform = 'rotate(202.5deg)' };
    if (data.wind_dir === 'SSW') { windDirIcon.style.transform = 'rotate(202.5deg)' };
    if (data.wind_dir === 'SW') { windDirIcon.style.transform = 'rotate(225.5deg)' };
    if (data.wind_dir === 'WSW') { windDirIcon.style.transform = 'rotate(247.5deg)' };
    if (data.wind_dir === 'W') { windDirIcon.style.transform = 'rotate(270deg)' };
    if (data.wind_dir === 'WNW') { windDirIcon.style.transform = 'rotate(292.5deg)' };
    if (data.wind_dir === 'NW') { windDirIcon.style.transform = 'rotate(315deg)' };
    if (data.wind_dir === 'NNW') { windDirIcon.style.transform = 'rotate(337.5deg)' };


    for (let i = 0; i < days; i++) {
        document.getElementById(`forecast-icon-${i}`).src = data.forecast[i].condition.icon;
        console.log('Temp: ', data.forecast[i][`${unit}Max`])
        document.getElementById(`${i}-date`).textContent = data.forecast[i].date;
        document.getElementById(`${0}-date`).textContent = 'Tomorrow';
        document.getElementById(`${i}-humidity`).textContent = 'Humidity: ' + data.forecast[i].humidity + '%';
    }

};

async function changeUnits(dataObj) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';
    document.getElementById('temp').textContent = data[unit].temp + data[unit].tempUnit;
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('wind').textContent = data[unit].wind + data[unit].windUnit + ' ' + data.wind_dir;
    document.getElementById('precipitation').textContent = data[unit].precipitation + data[unit].precipitationUnit;
    for (let i = 0; i < data.forecast.length; i++) {
        document.getElementById(`${i}-temp`).textContent = data.forecast[i][`${unit}Max`] + data[unit].tempUnit + ' / ' + data.forecast[i][`${unit}Min`] + data[unit].tempUnit;
        document.getElementById(`${i}-precipitation`).textContent = 'Precipitation: ' + data.forecast[i][`${unit}Precipitation`] + data[unit].precipitationUnit;
    };
};

/***/ }),

/***/ "./src/images/backdrop.jpg":
/*!*********************************!*\
  !*** ./src/images/backdrop.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6656b6e0b37d25f3177.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");
/* harmony import */ var _updateDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateDetails.js */ "./src/js/updateDetails.js");






// /////////////////////////
(function display() {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.drawHeader)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.drawMainContainer)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.drawFooter)();
}
)();
// /////////////////////////
const searchInput = document.getElementById('input-location');
const getLocation = () => { if (searchInput.value) { return searchInput.value } else { return 'bergen' } };
async function fetchData(location) {
    try {
        const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=72f920ddfbf143c9ac1164854240606&q=${location}&days=3`, { type: 'cors' });
        const response = await request.json();
        console.log(response)
        return response;
    } catch (error) {

    };
};
// ///////////////////////////

async function createDataObject(fetchedData) {
    const data = await fetchedData;
    const dataObj = {
        test: 'yipp',
        location: {
            city: data.location.name,
            country: data.location.country,
            time_epoch: data.location.localtime_epoch,
        },
        forecast: [
        ],
        condition: {
            code: data.current.condition.code,
            text: data.current.condition.text,
            icon: data.current.condition.icon,
        },
        metric: {
            temp: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            wind: data.current.wind_kph,
            tempUnit: '°C',
            windUnit: 'KPH',
            precipitation: data.current.precip_mm,
            precipitationUnit: 'mm',
        },
        imperial: {
            temp: data.current.temp_f,
            feelsLike: data.current.feelslike_f,
            wind: data.current.wind_mph,
            tempUnit: '°F',
            windUnit: 'MPH',
            precipitation: data.current.precip_in,
            precipitationUnit: 'in',
        },
        humidity: data.current.humidity,
        wind_dir: data.current.wind_dir,
        uv: data.current.uv,
        lastUpdate: data.current.last_updated,
    };
    for (let i = 0; i < 3; i++) {
        const forecastDay = {
            date: data.forecast.forecastday[i].date,
            condition: {
                code: data.forecast.forecastday[i].day.condition.code,
                icon: data.forecast.forecastday[i].day.condition.icon,
                text: data.forecast.forecastday[i].day.condition.text,
            },
            metricMax: data.forecast.forecastday[i].day.maxtemp_c,
            metricMin: data.forecast.forecastday[i].day.mintemp_c,
            imperialMax: data.forecast.forecastday[i].day.maxtemp_f,
            imperialMin: data.forecast.forecastday[i].day.mintemp_f,
            metricMaxwind: data.forecast.forecastday[i].day.maxwind_kph,
            imperialMaxwind: data.forecast.forecastday[i].day.maxwind_mph,
            metricPrecipitation: data.forecast.forecastday[i].day.totalprecip_mm,
            imperialPrecipitation: data.forecast.forecastday[i].day.totalprecip_in,
            humidity: data.forecast.forecastday[i].day.avghumidity,
        }
        dataObj.forecast.push(forecastDay)
    }
    return dataObj;
};
let dataObj = createDataObject(fetchData(getLocation()));
// /////////////////////////
async function updateDataObj(location) {
    dataObj = createDataObject(fetchData(location));
};

const submit = document.getElementById('submit-location');
submit.addEventListener('click', async (e) => {
    e.preventDefault()
    updateDataObj(getLocation());
    (0,_updateDetails_js__WEBPACK_IMPORTED_MODULE_2__.printData)(dataObj);
    searchInput.value = '';
});

const options = document.querySelectorAll('input[type=radio]');
for (const option of options) {
    option.addEventListener('click', () => {
        (0,_updateDetails_js__WEBPACK_IMPORTED_MODULE_2__.changeUnits)(dataObj);
    });
};
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map