/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
function header(title, subtitle) {
  return "\n        <div class=\"header\">\n            <h1 class=\"header__title\">".concat(title, "<h1>\n            <h2 class=\"header__subtitle\">").concat(subtitle, "</h2>\n        </div>\n    ");
}

/***/ }),

/***/ "./src/pages/vote.js":
/*!***************************!*\
  !*** ./src/pages/vote.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vote": () => (/* binding */ vote)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");

function vote(data) {
  return (0,_components_header__WEBPACK_IMPORTED_MODULE_0__.header)(data.title, data.subtitle);
}

/***/ }),

/***/ "./src/renderTemplate.js":
/*!*******************************!*\
  !*** ./src/renderTemplate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
/* harmony import */ var _pages_vote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/vote */ "./src/pages/vote.js");

function renderTemplate(alias, data) {
  if (alias === 'leaders') {
    return (0,_pages_vote__WEBPACK_IMPORTED_MODULE_0__.vote)(data);
  } else {
    return 'wrong alias param.';
  }
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTemplate */ "./src/renderTemplate.js");

var body = document.querySelector('body');
body.innerHTML = (0,_renderTemplate__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)('leaders', {
  'title': 'Больше всего коммитов',
  'subtitle': 'Спринт № 213',
  'emoji': '👑',
  'users': [{
    'id': 3,
    'name': 'Дарья Ковалева',
    'avatar': '3.jpg',
    'valueText': '32'
  }, {
    'id': 9,
    'name': 'Сергей Бережной',
    'avatar': '9.jpg',
    'valueText': '27'
  }, {
    'id': 7,
    'name': 'Дмитрий Андриянов',
    'avatar': '7.jpg',
    'valueText': '22'
  }, {
    'id': 6,
    'name': 'Андрей Мокроусов',
    'avatar': '6.jpg',
    'valueText': '20'
  }, {
    'id': 8,
    'name': 'Александр Иванков',
    'avatar': '8.jpg',
    'valueText': '19'
  }]
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxRQUF2QixFQUFpQztBQUNwQyw2RkFFb0NELEtBRnBDLDhEQUd1Q0MsUUFIdkM7QUFNSDs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFFTyxTQUFTQyxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDdkIsU0FBT0osMERBQU0sQ0FBQ0ksSUFBSSxDQUFDSCxLQUFOLEVBQWFHLElBQUksQ0FBQ0YsUUFBbEIsQ0FBYjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUVPLFNBQVNHLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCRixJQUEvQixFQUFxQztBQUN4QyxNQUFJRSxLQUFLLEtBQUssU0FBZCxFQUF5QjtBQUNyQixXQUFPSCxpREFBSSxDQUFDQyxJQUFELENBQVg7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLG9CQUFQO0FBQ0g7QUFDSjs7Ozs7O1VDUkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBTUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUVBRixJQUFJLENBQUNHLFNBQUwsR0FBaUJMLCtEQUFjLENBQUMsU0FBRCxFQUFZO0FBQ3ZDLFdBQVMsdUJBRDhCO0FBRXZDLGNBQVksY0FGMkI7QUFHdkMsV0FBUyxJQUg4QjtBQUl2QyxXQUFTLENBQ0w7QUFBQyxVQUFNLENBQVA7QUFBVSxZQUFRLGdCQUFsQjtBQUFvQyxjQUFVLE9BQTlDO0FBQXVELGlCQUFhO0FBQXBFLEdBREssRUFFTDtBQUFDLFVBQU0sQ0FBUDtBQUFVLFlBQVEsaUJBQWxCO0FBQXFDLGNBQVUsT0FBL0M7QUFBd0QsaUJBQWE7QUFBckUsR0FGSyxFQUdMO0FBQUMsVUFBTSxDQUFQO0FBQVUsWUFBUSxtQkFBbEI7QUFBdUMsY0FBVSxPQUFqRDtBQUEwRCxpQkFBYTtBQUF2RSxHQUhLLEVBSUw7QUFBQyxVQUFNLENBQVA7QUFBVSxZQUFRLGtCQUFsQjtBQUFzQyxjQUFVLE9BQWhEO0FBQXlELGlCQUFhO0FBQXRFLEdBSkssRUFLTDtBQUFDLFVBQU0sQ0FBUDtBQUFVLFlBQVEsbUJBQWxCO0FBQXVDLGNBQVUsT0FBakQ7QUFBMEQsaUJBQWE7QUFBdkUsR0FMSztBQUo4QixDQUFaLENBQS9CLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTEvLi9zcmMvcGFnZXMvdm90ZS5qcyIsIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL3JlbmRlclRlbXBsYXRlLmpzIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hyaS0yMDIxLXRhc2stMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hyaS0yMDIxLXRhc2stMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0xLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoZWFkZXIodGl0bGUsIHN1YnRpdGxlKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX190aXRsZVwiPiR7dGl0bGV9PGgxPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyX19zdWJ0aXRsZVwiPiR7c3VidGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB2b3RlKGRhdGEpIHtcbiAgICByZXR1cm4gaGVhZGVyKGRhdGEudGl0bGUsIGRhdGEuc3VidGl0bGUpXG59XG4iLCJpbXBvcnQgeyB2b3RlIH0gZnJvbSAnLi9wYWdlcy92b3RlJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoYWxpYXMsIGRhdGEpIHtcbiAgICBpZiAoYWxpYXMgPT09ICdsZWFkZXJzJykge1xuICAgICAgICByZXR1cm4gdm90ZShkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnd3JvbmcgYWxpYXMgcGFyYW0uJ1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyVGVtcGxhdGUgfSBmcm9tICcuL3JlbmRlclRlbXBsYXRlJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmJvZHkuaW5uZXJIVE1MID0gcmVuZGVyVGVtcGxhdGUoJ2xlYWRlcnMnLCB7XG4gICAgJ3RpdGxlJzogJ9CR0L7Qu9GM0YjQtSDQstGB0LXQs9C+INC60L7QvNC80LjRgtC+0LInLFxuICAgICdzdWJ0aXRsZSc6ICfQodC/0YDQuNC90YIg4oSWIDIxMycsXG4gICAgJ2Vtb2ppJzogJ/CfkZEnLFxuICAgICd1c2Vycyc6IFtcbiAgICAgICAgeydpZCc6IDMsICduYW1lJzogJ9CU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsCcsICdhdmF0YXInOiAnMy5qcGcnLCAndmFsdWVUZXh0JzogJzMyJ30sXG4gICAgICAgIHsnaWQnOiA5LCAnbmFtZSc6ICfQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuScsICdhdmF0YXInOiAnOS5qcGcnLCAndmFsdWVUZXh0JzogJzI3J30sXG4gICAgICAgIHsnaWQnOiA3LCAnbmFtZSc6ICfQlNC80LjRgtGA0LjQuSDQkNC90LTRgNC40Y/QvdC+0LInLCAnYXZhdGFyJzogJzcuanBnJywgJ3ZhbHVlVGV4dCc6ICcyMid9LFxuICAgICAgICB7J2lkJzogNiwgJ25hbWUnOiAn0JDQvdC00YDQtdC5INCc0L7QutGA0L7Rg9GB0L7QsicsICdhdmF0YXInOiAnNi5qcGcnLCAndmFsdWVUZXh0JzogJzIwJ30sXG4gICAgICAgIHsnaWQnOiA4LCAnbmFtZSc6ICfQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LInLCAnYXZhdGFyJzogJzguanBnJywgJ3ZhbHVlVGV4dCc6ICcxOSd9XG4gICAgXVxufSlcbiJdLCJuYW1lcyI6WyJoZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwidm90ZSIsImRhdGEiLCJyZW5kZXJUZW1wbGF0ZSIsImFsaWFzIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=