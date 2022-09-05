/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n    scroll-behavior: smooth;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    width: 0.4rem;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n    background-color: green;\r\n    border-radius: 25px;\r\n}\r\n\r\n.todo-cards {\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n\r\n\r\nbutton {\r\n    overflow-y: hidden;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.content {\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n}\r\n\r\n.side-bar {\r\n    background-color: white;\r\n    width: 30%;\r\n    min-width: 290px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title-container {\r\n    margin-top: 5%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70px;\r\n    font-size: 1.3rem;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.w {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: gray;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 9px;\r\n}\r\n\r\n.todo-cards {\r\n    margin-top: 90px;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    height: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.add-task {\r\n    width: 100%;\r\n    height: 10%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    margin-right: 5%;\r\n}\r\n\r\nbutton {\r\n    height: 25px;\r\n    border-radius: 20px;\r\n    border: none;\r\n    padding: 6px;\r\n    cursor: pointer;\r\n}\r\n\r\nh1 {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.card {\r\n    \r\n    padding-left: 20px;\r\n    display: flex;\r\n    padding-right: 20px;\r\n    min-height: 50px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n}\r\n\r\n.delete, .edit {\r\n    cursor: pointer;\r\n    width: 15px;\r\n}\r\n\r\n.edit {\r\n    width: 16px;\r\n}\r\n\r\n.delete:hover {\r\n    width: 17px;\r\n}\r\n\r\n.edit:hover {\r\n    width: 18px;\r\n}\r\n\r\n.right {\r\n    align-items: center;\r\n    height: 100%;\r\n    display: flex;\r\n    width: 120px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 17px;\r\n}\r\n\r\n.project-container {\r\n    margin-top: 10%;\r\n    width: 100%;\r\n    height: 95%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\n.project-list {\r\n    color: black;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start; \r\n    width: 100%;\r\n}\r\n\r\nul {\r\n    gap: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    list-style: none;\r\n    font-size: 25px;\r\n    margin-left: 6%;\r\n    width: 90%;\r\n}\r\n\r\nul li {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    padding: 5px;\r\n}\r\n\r\n#project-add-btn {\r\n    width: 40px;\r\n    margin-bottom: 5%;\r\n    margin-right: 5%;\r\n    cursor: pointer;\r\n}\r\n\r\n#add-btn:hover {\r\n    width: 43px;\r\n}\r\n\r\n.add-container {\r\n    height: 40%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n}\r\n\r\nul li:hover {\r\n    background-color: rgba(0, 0, 0, 0.027);\r\n    border-radius: 20px;\r\n    display: flex;\r\n    \r\n}\r\n\r\n#p-delete-img {\r\n    width: 15px;\r\n}\r\n\r\nli {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nli img {\r\n    visibility: hidden;\r\n}\r\n\r\nli:hover img{\r\n    visibility: visible;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed; \r\n    padding-top: 50px;\r\n    left: 0; \r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n  .modal-content {\r\n    border-radius: 30px;\r\n    height: 60%;\r\n    position: fixed; \r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.89);\r\n    padding: 20px; \r\n    margin: auto; \r\n    width: 25%;  \r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  /*@-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n  @keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }*/\r\n\r\n.submit-btn {\r\n    border: solid 1px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n    scroll-behavior: smooth;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    width: 0.4rem;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n    background-color: green;\r\n    border-radius: 25px;\r\n}\r\n\r\n.todo-cards {\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n\r\n\r\nbutton {\r\n    overflow-y: hidden;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.content {\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n}\r\n\r\n.side-bar {\r\n    background-color: white;\r\n    width: 30%;\r\n    min-width: 290px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title-container {\r\n    margin-top: 5%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70px;\r\n    font-size: 1.3rem;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.w {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: gray;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 9px;\r\n}\r\n\r\n.todo-cards {\r\n    margin-top: 90px;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    height: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.add-task {\r\n    width: 100%;\r\n    height: 10%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    margin-right: 5%;\r\n}\r\n\r\nbutton {\r\n    height: 25px;\r\n    border-radius: 20px;\r\n    border: none;\r\n    padding: 6px;\r\n    cursor: pointer;\r\n}\r\n\r\nh1 {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.card {\r\n    \r\n    padding-left: 20px;\r\n    display: flex;\r\n    padding-right: 20px;\r\n    min-height: 50px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n}\r\n\r\n.delete, .edit {\r\n    cursor: pointer;\r\n    width: 15px;\r\n}\r\n\r\n.edit {\r\n    width: 16px;\r\n}\r\n\r\n.delete:hover {\r\n    width: 17px;\r\n}\r\n\r\n.edit:hover {\r\n    width: 18px;\r\n}\r\n\r\n.right {\r\n    align-items: center;\r\n    height: 100%;\r\n    display: flex;\r\n    width: 120px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 17px;\r\n}\r\n\r\n.project-container {\r\n    margin-top: 10%;\r\n    width: 100%;\r\n    height: 95%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\n.project-list {\r\n    color: black;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start; \r\n    width: 100%;\r\n}\r\n\r\nul {\r\n    gap: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    list-style: none;\r\n    font-size: 25px;\r\n    margin-left: 6%;\r\n    width: 90%;\r\n}\r\n\r\nul li {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    padding: 5px;\r\n}\r\n\r\n#project-add-btn {\r\n    width: 40px;\r\n    margin-bottom: 5%;\r\n    margin-right: 5%;\r\n    cursor: pointer;\r\n}\r\n\r\n#add-btn:hover {\r\n    width: 43px;\r\n}\r\n\r\n.add-container {\r\n    height: 40%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n}\r\n\r\nul li:hover {\r\n    background-color: rgba(0, 0, 0, 0.027);\r\n    border-radius: 20px;\r\n    display: flex;\r\n    \r\n}\r\n\r\n#p-delete-img {\r\n    width: 15px;\r\n}\r\n\r\nli {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nli img {\r\n    visibility: hidden;\r\n}\r\n\r\nli:hover img{\r\n    visibility: visible;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed; \r\n    padding-top: 50px;\r\n    left: 0; \r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n  .modal-content {\r\n    border-radius: 30px;\r\n    height: 60%;\r\n    position: fixed; \r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.89);\r\n    padding: 20px; \r\n    margin: auto; \r\n    width: 25%;  \r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  /*@-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n  @keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }*/\r\n\r\n.submit-btn {\r\n    border: solid 1px;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOM-modules/modal-control.js":
/*!******************************************!*\
  !*** ./src/DOM-modules/modal-control.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-html */ "./src/DOM-modules/render-html.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.js */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/project.js");




if (localStorage.hasOwnProperty("pArray") === false && localStorage.hasOwnProperty("storageIdIndex") === false) {
    let pArray = []
    let storageIdIndex = 0;
    localStorage.setItem('pArray',JSON.stringify(pArray))
    localStorage.setItem('storageIdIndex', storageIdIndex)
}


const listContainer = document.querySelector('.project-list-items')
const projectContainer = document.querySelector('.project-list-items')
const projectModal = document.querySelector(".project-modal")
const todoModal = document.querySelector(".todo-modal")
const addTodoBtn = document.querySelector(".add-todo-btn")
const projectAddButton = document.querySelector('#project-add-btn')
const projectSubmitBtn = document.querySelector('.project-submit-btn')
const todoSubmitBtn = document.querySelector('.todo-submit-btn')


if (localStorage.length > 0) {
    let parsedArray = getpArray()

    ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.renderProjectList)(parsedArray, projectContainer)
}


listContainer.addEventListener('click', (e) => {
    if (e.target.hasAttribute('index-project-link')) {
        let pIndex = parseInt(e.target.getAttribute('index-project-link'))
        let parsedArray = getpArray()

        let selectedProject = parsedArray[pIndex]

        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.renderTodoCards)(selectedProject.todos, document.querySelector('.todo-cards'))
    }
})



//Enables user to click out of modal
window.onclick = (e) => {
    var nodes = document.querySelectorAll('li');
    var last = nodes[nodes.length - 1];
    //console.log(last)
    if(e.target == projectModal || e.target == todoModal){
        (0,_render_html__WEBPACK_IMPORTED_MODULE_0__.displayNone)(todoModal, projectModal)
    }
}

//Makes project modal visible
projectAddButton.addEventListener('click', () => {
    projectModal.style.display = "block"
    
})

//Makes todo modal visible
addTodoBtn.addEventListener('click', () => {
    todoModal.style.display = "block"
})


projectSubmitBtn.addEventListener('click', () => {
    let projectNameInput = document.querySelector('#project-name-input');
    if (projectNameInput.value != "") {
        let retrievedIndex = localStorage.getItem('storageIdIndex')
        let parsedIndex = JSON.parse(retrievedIndex)

        let parsedArray = getpArray()
        let newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(parsedIndex, projectNameInput.value)
        setStorage(newProject);
        parsedArray.push(newProject)
        const stringedProject = JSON.stringify(parsedArray);
        localStorage.setItem('pArray', stringedProject)
    
        
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.createProjectElement)(newProject.id, newProject.title, projectContainer, newProject)
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.displayNone)(projectModal)
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.clearInputs)(projectNameInput)

        addToStorageIndex()
    } 
})


todoSubmitBtn.addEventListener('click', () => {
    let prioritySelector = document.querySelector('#piority-selector')
    let todoTitle = document.querySelector('#todo-title-input')
    let todoDate = document.querySelector('#todo-date')

    if (todoTitle.value != "" && todoDate.value != "") {
        
        let parsedArray = getpArray()
    
        let newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(0, todoTitle.value, todoDate.value, prioritySelector.value)
        let cId = parseInt(document.querySelector('.todo-cards').getAttribute('index-id'))
        let currentProject = parsedArray[cId]
        console.log(currentProject)
        let curr = document.querySelector('.todo-cards')
        currentProject.todos.push(newTodo)
        parsedArray[cId] = currentProject
        const stringed = JSON.stringify(parsedArray)
        localStorage.setItem('pArray', stringed)
        
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.renderTodoCards)(parsedArray[cId].todos, curr)

        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.displayNone)(todoModal)
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.clearInputs)(todoTitle, todoDate)
        prioritySelector.selectedIndex = 0;
    }
})


const TODO_WINDOW = document.querySelector(".w");
TODO_WINDOW.addEventListener('click', (e) => {
    let btn = e.target;
    if (btn.hasAttribute('index-todo-delete-link')) { 
        let parsedArray = getpArray()

        let projIndexNum = parseInt(document.querySelector('.todo-cards').getAttribute('index-id'));    

        let currentProject = parsedArray[parseInt(document.querySelector('.todo-cards').getAttribute('index-id'))];
        let currentTodos = currentProject.todos;

        currentProject.todos[parseInt(e.target.getAttribute('index-todo-delete-link'))] = null;

        parsedArray[projIndexNum] = currentProject

        const stringedArray = JSON.stringify(parsedArray);

        localStorage.setItem('pArray', stringedArray)

        currentTodos[parseInt(e.target.getAttribute('index-todo-delete-link'))] = null;

        
        console.log(currentProject.todos)
        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.renderTodoCards)(currentProject.todos, document.querySelector('.todo-cards'));
    }
    else {
        //pass
    }
})


const SIDE_BAR = document.querySelector('.side-bar');

SIDE_BAR.addEventListener('click', (e) => {
    let btn = e.target
    if (btn.hasAttribute('index-delete-link')) {
        let parsedArray = getpArray()

        let projectToDelete = parsedArray[parseInt(e.target.getAttribute('index-delete-link'))]
        parsedArray[parseInt(e.target.getAttribute('index-delete-link'))] = null;
        let stringedArray = JSON.stringify(parsedArray)
        localStorage.setItem('pArray', stringedArray)

        localStorage.removeItem(projectToDelete.title)

        ;(0,_render_html__WEBPACK_IMPORTED_MODULE_0__.renderProjectList)(parsedArray, projectContainer)
        document.querySelector('.todo-cards').textContent = ""
    }
})



function setStorage(project) {
    let parsedArray = getpArray()

    parsedArray.push(project)

    const stringedArray = JSON.stringify(parsedArray)
    localStorage.setItem('pArray', stringedArray)
}


function addToStorageIndex() {
    let storageIndexer = localStorage.getItem('storageIdIndex')
    let parsedIndexer = JSON.parse(storageIndexer)
    parsedIndexer++;
    let stringedIndex = JSON.stringify(parsedIndexer)
    localStorage.setItem('storageIdIndex', stringedIndex)
}

function getpArray() {
    let retrievedArray = localStorage.getItem('pArray')
    let parsedArray = JSON.parse(retrievedArray)

    return parsedArray
}

/***/ }),

/***/ "./src/DOM-modules/render-html.js":
/*!****************************************!*\
  !*** ./src/DOM-modules/render-html.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectAddEvent": () => (/* binding */ ProjectAddEvent),
/* harmony export */   "clearInputs": () => (/* binding */ clearInputs),
/* harmony export */   "createProjectElement": () => (/* binding */ createProjectElement),
/* harmony export */   "createTodoDiv": () => (/* binding */ createTodoDiv),
/* harmony export */   "displayNone": () => (/* binding */ displayNone),
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList),
/* harmony export */   "renderProjectPage": () => (/* binding */ renderProjectPage),
/* harmony export */   "renderTodoCards": () => (/* binding */ renderTodoCards)
/* harmony export */ });
/* harmony import */ var _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete-icon.svg */ "./src/images/delete-icon.svg");
/* harmony import */ var _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/edit-icon.svg */ "./src/images/edit-icon.svg");




//Creates a Todo card in html
function createTodoDiv(id=0, title, date, container, todoArrId, priority) {
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-container');
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right')
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    if (priority === "low") {
        cardDiv.style.borderLeft = "solid 5px green"
    }
    else if (priority === "medium") {
        cardDiv.style.borderLeft = "solid 5px orange"
    }

    else if (priority === "high") {
        cardDiv.style.borderLeft = "solid 5px red"
    }


    let titleP = document.createElement('p');
    titleP.textContent = title;
    cardDiv.appendChild(titleP);

    let dateP = document.createElement('p');
    dateP.textContent = date;
    rightDiv.appendChild(dateP);

    let deleteImg = document.createElement('img');
    deleteImg.setAttribute('index-todo-delete-link', todoArrId)
    deleteImg.classList.add('delete')
    deleteImg.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    rightDiv.appendChild(deleteImg);

    let editImg = document.createElement('img');
    editImg.classList.add('edit')
    editImg.src = _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    editDiv.appendChild(editImg);
    rightDiv.appendChild(editDiv);

    cardDiv.appendChild(rightDiv);

    container.appendChild(cardDiv);
}


function renderProjectList(projectArr, container) {
    container.textContent = ""
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i] != null) {
            createProjectElement(projectArr[i].id, projectArr[i].title, container, projectArr[i])
        }
    }
}



function createProjectElement(id, title, container, projectObj) {
    if (projectObj != null) {
        let deleteImg = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
        let listItem = document.createElement('li');
        let imgElement = document.createElement('img');
        imgElement.setAttribute('id', 'p-delete-img')
        imgElement.setAttribute('index-delete-link', id)
    
        listItem.setAttribute('index-project-link', id)
        ProjectAddEvent(listItem, projectObj)
        imgElement.src = deleteImg;
    
        listItem.textContent = title;
        listItem.appendChild(imgElement)
    
        container.appendChild(listItem)
    }
    else {
        //pass
    }
}
    

function clearInputs() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].value = "";
    }
}

function displayNone() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].style.display = "none";
    }
}

function renderProjectPage(newProject, id=0) { 
    if (newProject != null) {
        

        let oldTodoList = document.querySelector('.todo-cards')
        oldTodoList.remove()
    
        let todoCardsDiv = document.createElement('div')
        todoCardsDiv.classList.add('todo-cards')
        todoCardsDiv.setAttribute('index-id', id)
        
        let todoList = newProject.todos
        renderTodoCards(todoList, todoCardsDiv)
    
        let target = document.querySelector('.add-task')
        target.parentNode.insertBefore(todoCardsDiv, target)
    }  
    else {
        console.log("EEEEE")
    }
}



function renderTodoCards(TodoArray, container) {
    container.textContent = ""
    let indexer = 0
    for (let i = 0; i < TodoArray.length; i++) {
        if (TodoArray[i] != null) {
            createTodoDiv(indexer, TodoArray[i].title, TodoArray[i].date, container, i, TodoArray[i].priority)
            indexer++
        }
    }

}


function ProjectAddEvent(project, projectObj) {
    project.addEventListener('click', (e) => {
        renderProjectPage(projectObj, projectObj.id)
    })
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _DOM_modules_render_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-modules/render-html */ "./src/DOM-modules/render-html.js");



class Project {
    
    constructor(id, title, todos=[]) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(id, title, date, priority) {
        this.title = title;
        this.date = date;
        this.priority = priority;
        
    }
}



/***/ }),

/***/ "./src/images/delete-icon.svg":
/*!************************************!*\
  !*** ./src/images/delete-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b76a5fc0c4ad668387c.svg";

/***/ }),

/***/ "./src/images/edit-icon.svg":
/*!**********************************!*\
  !*** ./src/images/edit-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16c828a8b295ddb752d5.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _DOM_modules_modal_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-modules/modal-control */ "./src/DOM-modules/modal-control.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVB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O0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1M7QUFDb0I7QUFDakI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvRE9NLW1vZHVsZXMvbW9kYWwtY29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9ET00tbW9kdWxlcy9yZW5kZXItaHRtbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZHMge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjkwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLncge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmRzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogOTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUsIC5lZGl0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGdhcDogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNiU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1hZGQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtYnRuOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDQzcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDI3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNwLWRlbGV0ZS1pbWcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5saSBpbWcge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIGltZ3tcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICB3aWR0aDogMjUlOyAgXFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgLypALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxyXFxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH0gXFxyXFxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eToxfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOi0zMDBweDsgb3BhY2l0eTowfVxcclxcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cXHJcXG4gIH0qL1xcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtB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ZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUI7QUFDSjs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7Ozs7OztJQU9FOztBQUVKO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZHMge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjkwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLncge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmRzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogOTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUsIC5lZGl0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGdhcDogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNiU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1hZGQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtYnRuOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDQzcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDI3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNwLWRlbGV0ZS1pbWcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5saSBpbWcge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIGltZ3tcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICB3aWR0aDogMjUlOyAgXFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgLypALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxyXFxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH0gXFxyXFxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eToxfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOi0zMDBweDsgb3BhY2l0eTowfVxcclxcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cXHJcXG4gIH0qL1xcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjbGVhcklucHV0cywgZGlzcGxheU5vbmUsIHJlbmRlclByb2plY3RQYWdlLCByZW5kZXJUb2RvQ2FyZHMsIGNyZWF0ZVByb2plY3RFbGVtZW50LCByZW5kZXJQcm9qZWN0TGlzdH0gZnJvbSBcIi4vcmVuZGVyLWh0bWxcIlxyXG5pbXBvcnQge1RvZG99IGZyb20gXCIuLi90b2RvLmpzXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0XCJcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJwQXJyYXlcIikgPT09IGZhbHNlICYmIGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcInN0b3JhZ2VJZEluZGV4XCIpID09PSBmYWxzZSkge1xyXG4gICAgbGV0IHBBcnJheSA9IFtdXHJcbiAgICBsZXQgc3RvcmFnZUlkSW5kZXggPSAwO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BBcnJheScsSlNPTi5zdHJpbmdpZnkocEFycmF5KSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlSWRJbmRleCcsIHN0b3JhZ2VJZEluZGV4KVxyXG59XHJcblxyXG5cclxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QtaXRlbXMnKVxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1pdGVtcycpXHJcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKVxyXG5jb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbW9kYWxcIilcclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnRuXCIpXHJcbmNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1hZGQtYnRuJylcclxuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKVxyXG5jb25zdCB0b2RvU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc3VibWl0LWJ0bicpXHJcblxyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgcGFyc2VkQXJyYXkgPSBnZXRwQXJyYXkoKVxyXG5cclxuICAgIHJlbmRlclByb2plY3RMaXN0KHBhcnNlZEFycmF5LCBwcm9qZWN0Q29udGFpbmVyKVxyXG59XHJcblxyXG5cclxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdpbmRleC1wcm9qZWN0LWxpbmsnKSkge1xyXG4gICAgICAgIGxldCBwSW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4LXByb2plY3QtbGluaycpKVxyXG4gICAgICAgIGxldCBwYXJzZWRBcnJheSA9IGdldHBBcnJheSgpXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBwYXJzZWRBcnJheVtwSW5kZXhdXHJcblxyXG4gICAgICAgIHJlbmRlclRvZG9DYXJkcyhzZWxlY3RlZFByb2plY3QudG9kb3MsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNhcmRzJykpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vRW5hYmxlcyB1c2VyIHRvIGNsaWNrIG91dCBvZiBtb2RhbFxyXG53aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgdmFyIGxhc3QgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgIC8vY29uc29sZS5sb2cobGFzdClcclxuICAgIGlmKGUudGFyZ2V0ID09IHByb2plY3RNb2RhbCB8fCBlLnRhcmdldCA9PSB0b2RvTW9kYWwpe1xyXG4gICAgICAgIGRpc3BsYXlOb25lKHRvZG9Nb2RhbCwgcHJvamVjdE1vZGFsKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL01ha2VzIHByb2plY3QgbW9kYWwgdmlzaWJsZVxyXG5wcm9qZWN0QWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgIFxyXG59KVxyXG5cclxuLy9NYWtlcyB0b2RvIG1vZGFsIHZpc2libGVcclxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbn0pXHJcblxyXG5cclxucHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpO1xyXG4gICAgaWYgKHByb2plY3ROYW1lSW5wdXQudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgIGxldCByZXRyaWV2ZWRJbmRleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlSWRJbmRleCcpXHJcbiAgICAgICAgbGV0IHBhcnNlZEluZGV4ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRJbmRleClcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZEFycmF5ID0gZ2V0cEFycmF5KClcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHBhcnNlZEluZGV4LCBwcm9qZWN0TmFtZUlucHV0LnZhbHVlKVxyXG4gICAgICAgIHNldFN0b3JhZ2UobmV3UHJvamVjdCk7XHJcbiAgICAgICAgcGFyc2VkQXJyYXkucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgICAgIGNvbnN0IHN0cmluZ2VkUHJvamVjdCA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEFycmF5KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncEFycmF5Jywgc3RyaW5nZWRQcm9qZWN0KVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQobmV3UHJvamVjdC5pZCwgbmV3UHJvamVjdC50aXRsZSwgcHJvamVjdENvbnRhaW5lciwgbmV3UHJvamVjdClcclxuICAgICAgICBkaXNwbGF5Tm9uZShwcm9qZWN0TW9kYWwpXHJcbiAgICAgICAgY2xlYXJJbnB1dHMocHJvamVjdE5hbWVJbnB1dClcclxuXHJcbiAgICAgICAgYWRkVG9TdG9yYWdlSW5kZXgoKVxyXG4gICAgfSBcclxufSlcclxuXHJcblxyXG50b2RvU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGlvcml0eS1zZWxlY3RvcicpXHJcbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUtaW5wdXQnKVxyXG4gICAgbGV0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpXHJcblxyXG4gICAgaWYgKHRvZG9UaXRsZS52YWx1ZSAhPSBcIlwiICYmIHRvZG9EYXRlLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGFyc2VkQXJyYXkgPSBnZXRwQXJyYXkoKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbygwLCB0b2RvVGl0bGUudmFsdWUsIHRvZG9EYXRlLnZhbHVlLCBwcmlvcml0eVNlbGVjdG9yLnZhbHVlKVxyXG4gICAgICAgIGxldCBjSWQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jYXJkcycpLmdldEF0dHJpYnV0ZSgnaW5kZXgtaWQnKSlcclxuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwYXJzZWRBcnJheVtjSWRdXHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgbGV0IGN1cnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jYXJkcycpXHJcbiAgICAgICAgY3VycmVudFByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKVxyXG4gICAgICAgIHBhcnNlZEFycmF5W2NJZF0gPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgIGNvbnN0IHN0cmluZ2VkID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkQXJyYXkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BBcnJheScsIHN0cmluZ2VkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlclRvZG9DYXJkcyhwYXJzZWRBcnJheVtjSWRdLnRvZG9zLCBjdXJyKVxyXG5cclxuICAgICAgICBkaXNwbGF5Tm9uZSh0b2RvTW9kYWwpXHJcbiAgICAgICAgY2xlYXJJbnB1dHModG9kb1RpdGxlLCB0b2RvRGF0ZSlcclxuICAgICAgICBwcmlvcml0eVNlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IFRPRE9fV0lORE9XID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53XCIpO1xyXG5UT0RPX1dJTkRPVy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgYnRuID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoYnRuLmhhc0F0dHJpYnV0ZSgnaW5kZXgtdG9kby1kZWxldGUtbGluaycpKSB7IFxyXG4gICAgICAgIGxldCBwYXJzZWRBcnJheSA9IGdldHBBcnJheSgpXHJcblxyXG4gICAgICAgIGxldCBwcm9qSW5kZXhOdW0gPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jYXJkcycpLmdldEF0dHJpYnV0ZSgnaW5kZXgtaWQnKSk7ICAgIFxyXG5cclxuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwYXJzZWRBcnJheVtwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jYXJkcycpLmdldEF0dHJpYnV0ZSgnaW5kZXgtaWQnKSldO1xyXG4gICAgICAgIGxldCBjdXJyZW50VG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvcztcclxuXHJcbiAgICAgICAgY3VycmVudFByb2plY3QudG9kb3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleC10b2RvLWRlbGV0ZS1saW5rJykpXSA9IG51bGw7XHJcblxyXG4gICAgICAgIHBhcnNlZEFycmF5W3Byb2pJbmRleE51bV0gPSBjdXJyZW50UHJvamVjdFxyXG5cclxuICAgICAgICBjb25zdCBzdHJpbmdlZEFycmF5ID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkQXJyYXkpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncEFycmF5Jywgc3RyaW5nZWRBcnJheSlcclxuXHJcbiAgICAgICAgY3VycmVudFRvZG9zW3BhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgtdG9kby1kZWxldGUtbGluaycpKV0gPSBudWxsO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvcylcclxuICAgICAgICByZW5kZXJUb2RvQ2FyZHMoY3VycmVudFByb2plY3QudG9kb3MsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNhcmRzJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy9wYXNzXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuY29uc3QgU0lERV9CQVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcclxuXHJcblNJREVfQkFSLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBidG4gPSBlLnRhcmdldFxyXG4gICAgaWYgKGJ0bi5oYXNBdHRyaWJ1dGUoJ2luZGV4LWRlbGV0ZS1saW5rJykpIHtcclxuICAgICAgICBsZXQgcGFyc2VkQXJyYXkgPSBnZXRwQXJyYXkoKVxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdFRvRGVsZXRlID0gcGFyc2VkQXJyYXlbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleC1kZWxldGUtbGluaycpKV1cclxuICAgICAgICBwYXJzZWRBcnJheVtwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4LWRlbGV0ZS1saW5rJykpXSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0cmluZ2VkQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRBcnJheSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncEFycmF5Jywgc3RyaW5nZWRBcnJheSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdFRvRGVsZXRlLnRpdGxlKVxyXG5cclxuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdChwYXJzZWRBcnJheSwgcHJvamVjdENvbnRhaW5lcilcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jYXJkcycpLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRTdG9yYWdlKHByb2plY3QpIHtcclxuICAgIGxldCBwYXJzZWRBcnJheSA9IGdldHBBcnJheSgpXHJcblxyXG4gICAgcGFyc2VkQXJyYXkucHVzaChwcm9qZWN0KVxyXG5cclxuICAgIGNvbnN0IHN0cmluZ2VkQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRBcnJheSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwQXJyYXknLCBzdHJpbmdlZEFycmF5KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlSW5kZXgoKSB7XHJcbiAgICBsZXQgc3RvcmFnZUluZGV4ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZUlkSW5kZXgnKVxyXG4gICAgbGV0IHBhcnNlZEluZGV4ZXIgPSBKU09OLnBhcnNlKHN0b3JhZ2VJbmRleGVyKVxyXG4gICAgcGFyc2VkSW5kZXhlcisrO1xyXG4gICAgbGV0IHN0cmluZ2VkSW5kZXggPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJbmRleGVyKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VJZEluZGV4Jywgc3RyaW5nZWRJbmRleClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0cEFycmF5KCkge1xyXG4gICAgbGV0IHJldHJpZXZlZEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BBcnJheScpXHJcbiAgICBsZXQgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHJldHJpZXZlZEFycmF5KVxyXG5cclxuICAgIHJldHVybiBwYXJzZWRBcnJheVxyXG59IiwiaW1wb3J0IERlbGV0ZSBmcm9tICcuLi9pbWFnZXMvZGVsZXRlLWljb24uc3ZnJ1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuLi9pbWFnZXMvZWRpdC1pY29uLnN2ZydcclxuXHJcblxyXG4vL0NyZWF0ZXMgYSBUb2RvIGNhcmQgaW4gaHRtbFxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvRGl2KGlkPTAsIHRpdGxlLCBkYXRlLCBjb250YWluZXIsIHRvZG9BcnJJZCwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVkaXREaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpXHJcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuXHJcbiAgICBpZiAocHJpb3JpdHkgPT09IFwibG93XCIpIHtcclxuICAgICAgICBjYXJkRGl2LnN0eWxlLmJvcmRlckxlZnQgPSBcInNvbGlkIDVweCBncmVlblwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xyXG4gICAgICAgIGNhcmREaXYuc3R5bGUuYm9yZGVyTGVmdCA9IFwic29saWQgNXB4IG9yYW5nZVwiXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XHJcbiAgICAgICAgY2FyZERpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJzb2xpZCA1cHggcmVkXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlUC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZCh0aXRsZVApO1xyXG5cclxuICAgIGxldCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRhdGVQLnRleHRDb250ZW50ID0gZGF0ZTtcclxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRhdGVQKTtcclxuXHJcbiAgICBsZXQgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdpbmRleC10b2RvLWRlbGV0ZS1saW5rJywgdG9kb0FycklkKVxyXG4gICAgZGVsZXRlSW1nLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXHJcbiAgICBkZWxldGVJbWcuc3JjID0gRGVsZXRlO1xyXG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcclxuXHJcbiAgICBsZXQgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWRpdEltZy5jbGFzc0xpc3QuYWRkKCdlZGl0JylcclxuICAgIGVkaXRJbWcuc3JjID0gRWRpdDtcclxuICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdEltZyk7XHJcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChlZGl0RGl2KTtcclxuXHJcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0QXJyLCBjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwcm9qZWN0QXJyW2ldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdEFycltpXS5pZCwgcHJvamVjdEFycltpXS50aXRsZSwgY29udGFpbmVyLCBwcm9qZWN0QXJyW2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChpZCwgdGl0bGUsIGNvbnRhaW5lciwgcHJvamVjdE9iaikge1xyXG4gICAgaWYgKHByb2plY3RPYmogIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBkZWxldGVJbWcgPSBEZWxldGU7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsZXQgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwLWRlbGV0ZS1pbWcnKVxyXG4gICAgICAgIGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpbmRleC1kZWxldGUtbGluaycsIGlkKVxyXG4gICAgXHJcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpbmRleC1wcm9qZWN0LWxpbmsnLCBpZClcclxuICAgICAgICBQcm9qZWN0QWRkRXZlbnQobGlzdEl0ZW0sIHByb2plY3RPYmopXHJcbiAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBkZWxldGVJbWc7XHJcbiAgICBcclxuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpXHJcbiAgICBcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvL3Bhc3NcclxuICAgIH1cclxufVxyXG4gICAgXHJcblxyXG5mdW5jdGlvbiBjbGVhcklucHV0cygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5vbmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGFyZ3VtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKG5ld1Byb2plY3QsIGlkPTApIHsgXHJcbiAgICBpZiAobmV3UHJvamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBvbGRUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNhcmRzJylcclxuICAgICAgICBvbGRUb2RvTGlzdC5yZW1vdmUoKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHRvZG9DYXJkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9kb0NhcmRzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZHMnKVxyXG4gICAgICAgIHRvZG9DYXJkc0Rpdi5zZXRBdHRyaWJ1dGUoJ2luZGV4LWlkJywgaWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gbmV3UHJvamVjdC50b2Rvc1xyXG4gICAgICAgIHJlbmRlclRvZG9DYXJkcyh0b2RvTGlzdCwgdG9kb0NhcmRzRGl2KVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXHJcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvZG9DYXJkc0RpdiwgdGFyZ2V0KVxyXG4gICAgfSAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVFRUVFXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9kb0NhcmRzKFRvZG9BcnJheSwgY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICBsZXQgaW5kZXhlciA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFRvZG9BcnJheVtpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9EaXYoaW5kZXhlciwgVG9kb0FycmF5W2ldLnRpdGxlLCBUb2RvQXJyYXlbaV0uZGF0ZSwgY29udGFpbmVyLCBpLCBUb2RvQXJyYXlbaV0ucHJpb3JpdHkpXHJcbiAgICAgICAgICAgIGluZGV4ZXIrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0QWRkRXZlbnQocHJvamVjdCwgcHJvamVjdE9iaikge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdE9iaiwgcHJvamVjdE9iai5pZClcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlVG9kb0RpdiwgXHJcbiAgICBjcmVhdGVQcm9qZWN0RWxlbWVudCwgXHJcbiAgICBjbGVhcklucHV0cywgXHJcbiAgICBkaXNwbGF5Tm9uZSwgXHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZSwgXHJcbiAgICBQcm9qZWN0QWRkRXZlbnQsIFxyXG4gICAgcmVuZGVyVG9kb0NhcmRzLCBcclxuICAgIHJlbmRlclByb2plY3RMaXN0XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50fSBmcm9tIFwiLi9ET00tbW9kdWxlcy9yZW5kZXItaHRtbFwiXHJcblxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgdG9kb3M9W10pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2RvcztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdH0iLCJjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VG9kb30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7VG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXHJcbmltcG9ydCAqIGFzIGFsbCBmcm9tIFwiLi9ET00tbW9kdWxlcy9tb2RhbC1jb250cm9sXCJcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9