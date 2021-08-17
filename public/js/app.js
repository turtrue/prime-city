/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/advantage.js":
/*!***********************************!*\
  !*** ./resources/js/advantage.js ***!
  \***********************************/
/***/ (() => {

var paragraph = document.querySelector('#advantage-paragraph');

if (paragraph) {
  var text = ['Собственный парк спецтехники', 'Квалифицированный персонал', 'Собственная мобильная лаборатория неразрушающего контроля', 'Индивидуальный подход в решении каждого вопроса', 'Более десяти лет успешной реализации проектов по обустройству нефтяных и газовых месторождений на всей территории Российской федерации'];
  var counter = 0;
  setInterval(function () {
    paragraph.classList.add('hide');
    setTimeout(function () {
      paragraph.textContent = text[counter];
      paragraph.classList.remove('hide');
    }, 700);
    counter++;
    if (counter >= text.length) counter = 0;
  }, 5000);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./header */ "./resources/js/header.js");

__webpack_require__(/*! ./advantage */ "./resources/js/advantage.js");

__webpack_require__(/*! ./object */ "./resources/js/object.js");

__webpack_require__(/*! ./slider */ "./resources/js/slider.js");

__webpack_require__(/*! ./certificate */ "./resources/js/certificate.js");

__webpack_require__(/*! ./modal */ "./resources/js/modal.js");

/***/ }),

/***/ "./resources/js/certificate.js":
/*!*************************************!*\
  !*** ./resources/js/certificate.js ***!
  \*************************************/
/***/ (() => {

var images = document.querySelectorAll('.slider__item > img');
var modal = document.querySelector('.modal');
var view = document.querySelector('.modal__view > img');
images.forEach(function (img) {
  img.addEventListener('click', function () {
    var src = img.getAttribute('src');
    src = src.replace(/.jpg/, "-full.jpg");
    view.setAttribute('src', src);
    modal.classList.add('active');
    document.body.classList.add('overflow-hidden');
  });
});

/***/ }),

/***/ "./resources/js/header.js":
/*!********************************!*\
  !*** ./resources/js/header.js ***!
  \********************************/
/***/ (() => {

var burger = document.querySelector('#burger');
var header = document.querySelector('#header');
var nav = document.querySelector('.nav'); // window.addEventListener('scroll', menuFixed);
// menuFixed();
// function menuFixed() {
//     header.classList.toggle('sticky', window.scrollY > 0);
// }

nav.addEventListener('click', function (event) {
  var isLink = event.target.classList.contains('nav__link');

  if (isLink) {
    header.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
});
burger.addEventListener('click', function () {
  header.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});

/***/ }),

/***/ "./resources/js/modal.js":
/*!*******************************!*\
  !*** ./resources/js/modal.js ***!
  \*******************************/
/***/ (() => {

var modal = document.querySelector('.modal');

if (modal) {
  modal.addEventListener('click', function (event) {
    var isModal = event.target.classList.contains('modal');
    var isClose = event.target.classList.contains('modal__close');

    if (isModal || isClose) {
      modal.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    }
  });
}

/***/ }),

/***/ "./resources/js/object.js":
/*!********************************!*\
  !*** ./resources/js/object.js ***!
  \********************************/
/***/ (() => {

var images = document.querySelectorAll('.object__image');
var modal = document.querySelector('.modal');
var view = document.querySelector('.modal__view > img');

if (images.length) {
  var reveal = function reveal() {
    images.forEach(function (img) {
      var windowHeight = window.innerHeight;
      var imgTop = img.getBoundingClientRect().top;
      var imgPoint = 150;

      if (imgTop < windowHeight - imgPoint) {
        img.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      var src = img.getAttribute('src');
      src = src.replace(/.jpg/, "-full.jpg");
      view.setAttribute('src', src);
      modal.classList.add('active');
      document.body.classList.add('overflow-hidden');
    });
  });
}

/***/ }),

/***/ "./resources/js/slider.js":
/*!********************************!*\
  !*** ./resources/js/slider.js ***!
  \********************************/
/***/ (() => {

var track = document.querySelector('.slider__track');
var prev = document.querySelector('#slider-prev');
var next = document.querySelector('#slider-next');

if (track) {
  var btnVisible = function btnVisible(condition, firstBtn, secondBtn) {
    if (condition) {
      firstBtn.classList.add('hide');
      secondBtn.classList.remove('hide');
    } else {
      secondBtn.classList.remove('hide');
    }
  };

  var movingTrack = function movingTrack() {
    track.style.transform = "translateX(-".concat(numbers[counter] * step, "%)");
  };

  var addClass = function addClass(array, cls) {
    var currentItem = array[counter + 1];
    currentItem.classList.add(cls);
  };

  var removeClass = function removeClass(array, cls) {
    array.forEach(function (item) {
      return item.classList.remove(cls);
    });
  };

  var nextSlide = function nextSlide() {
    removeClass(items, 'active');
    addClass(items, 'active');
    movingTrack();
  };

  var items = document.querySelectorAll('.slider__item');

  var _prev = document.querySelector('#slider-prev');

  var _next = document.querySelector('#slider-next');

  var itemsLength = items.length; // Вычисление длины одного элемента слайдера

  var widthItem = 100 / 3; // Установка длины трека

  track.style.width = "".concat(widthItem * itemsLength, "%"); // Установка длины элементов слайдера

  items.forEach(function (item) {
    item.style.width = "".concat(widthItem, "%");
  }); // Заполнение массива номерами элементов слайдера

  var length = itemsLength - 2;
  var numbers = Array.apply(null, {
    length: length
  }).map(Number.call, Number); // Вычисление одного шага

  var step = 100 / itemsLength;
  var counter = 0; // Начальная позиция трека

  movingTrack(); // Кнопка назад

  _prev.addEventListener('click', function () {
    counter--;
    var condition = counter < 1;
    btnVisible(condition, _prev, _next);
    nextSlide();
  }); // Кнопка вперед


  _next.addEventListener('click', function () {
    counter++;
    var condition = counter >= numbers.length - 1;
    btnVisible(condition, _next, _prev);
    nextSlide();
  });
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;