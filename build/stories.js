/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/componentA.js":
/*!**************************************!*\
  !*** ./src/components/componentA.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

function componentA() {
  return "<div>Component A</div>";
}

exports.componentA = componentA;

/***/ }),

/***/ "./src/components/componentB.js":
/*!**************************************!*\
  !*** ./src/components/componentB.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

function componentB() {
  return "\n        <div>\n            Component B\n        </div>\n    ";
}

exports.componentB = componentB;

/***/ }),

/***/ "./src/renderTemplate.js":
/*!*******************************!*\
  !*** ./src/renderTemplate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./components/componentA */ "./src/components/componentA.js"),
    componentA = _require.componentA;

var _require2 = __webpack_require__(/*! ./components/componentB */ "./src/components/componentB.js"),
    componentB = _require2.componentB;

function renderTemplate(alias, data) {
  return "\n        ".concat(componentA(), "\n        ").concat(componentB(), "\n    ");
}

exports.renderTemplate = renderTemplate;

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var _require = __webpack_require__(/*! ./renderTemplate */ "./src/renderTemplate.js"),
    renderTemplate = _require.renderTemplate;

var body = document.querySelector('body');
body.innerHTML = renderTemplate();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFNBQU8sd0JBQVA7QUFDSDs7QUFFREMsa0JBQUEsR0FBcUJELFVBQXJCOzs7Ozs7Ozs7O0FDSkEsU0FBU0UsVUFBVCxHQUFzQjtBQUNsQjtBQUtIOztBQUVERCxrQkFBQSxHQUFxQkMsVUFBckI7Ozs7Ozs7Ozs7QUNSQSxlQUF1QkMsbUJBQU8sQ0FBQywrREFBRCxDQUE5QjtBQUFBLElBQVFILFVBQVIsWUFBUUEsVUFBUjs7QUFDQSxnQkFBdUJHLG1CQUFPLENBQUMsK0RBQUQsQ0FBOUI7QUFBQSxJQUFRRCxVQUFSLGFBQVFBLFVBQVI7O0FBRUEsU0FBU0UsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQ2pDLDZCQUNNTixVQUFVLEVBRGhCLHVCQUVNRSxVQUFVLEVBRmhCO0FBSUg7O0FBRURELHNCQUFBLEdBQXlCRyxjQUF6Qjs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLGVBQTJCRCxtQkFBTyxDQUFDLGlEQUFELENBQWxDO0FBQUEsSUFBUUMsY0FBUixZQUFRQSxjQUFSOztBQUVBLElBQU1HLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFFQUYsSUFBSSxDQUFDRyxTQUFMLEdBQWlCTixjQUFjLEVBQS9CLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50QS5qcyIsIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50Qi5qcyIsIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL3JlbmRlclRlbXBsYXRlLmpzIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hyaS0yMDIxLXRhc2stMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb21wb25lbnRBKCkge1xuICAgIHJldHVybiBcIjxkaXY+Q29tcG9uZW50IEE8L2Rpdj5cIlxufVxuXG5leHBvcnRzLmNvbXBvbmVudEEgPSBjb21wb25lbnRBXG4iLCJmdW5jdGlvbiBjb21wb25lbnRCKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDb21wb25lbnQgQlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59XG5cbmV4cG9ydHMuY29tcG9uZW50QiA9IGNvbXBvbmVudEJcbiIsImNvbnN0IHsgY29tcG9uZW50QSB9ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbXBvbmVudEEnKVxuY29uc3QgeyBjb21wb25lbnRCIH0gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29tcG9uZW50QicpXG5cbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKGFsaWFzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgJHtjb21wb25lbnRBKCl9XG4gICAgICAgICR7Y29tcG9uZW50QigpfVxuICAgIGBcbn1cblxuZXhwb3J0cy5yZW5kZXJUZW1wbGF0ZSA9IHJlbmRlclRlbXBsYXRlXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgeyByZW5kZXJUZW1wbGF0ZSB9ID0gcmVxdWlyZSgnLi9yZW5kZXJUZW1wbGF0ZScpXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuYm9keS5pbm5lckhUTUwgPSByZW5kZXJUZW1wbGF0ZSgpXG4iXSwibmFtZXMiOlsiY29tcG9uZW50QSIsImV4cG9ydHMiLCJjb21wb25lbnRCIiwicmVxdWlyZSIsInJlbmRlclRlbXBsYXRlIiwiYWxpYXMiLCJkYXRhIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=