/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Ball.js":
/*!*****************************!*\
  !*** ./src/scripts/Ball.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ \"./src/scripts/Mobile.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ \"./src/scripts/Game.js\");\n\r\n\r\n// default values for a Ball : image and shifts\r\nconst BALL_IMAGE_SRC = './images/balle24.png';\r\nconst SHIFT_X = 8;\r\nconst SHIFT_Y = 4;\r\n/**\r\n * a Ball is a paddles with a ball as image and that bounces in a Game (inside the game's canvas)\r\n */\r\nclass Ball extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  /**  build a ball\r\n   *\r\n   * @param  {number} x       the x coordinate\r\n   * @param  {number} y       the y coordinate\r\n   * @param  {Game} theGame   the Game this ball belongs to\r\n   */\r\n  constructor(x, y, theGame,radius,speed) {\r\n    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);\r\n    this.theGame = theGame;\r\n    this.radius = 10;\r\n    this.speed = speed;\r\n  }\r\n\r\n\r\n  /**\r\n   * when moving a ball bounces inside the limit of its game's canvas\r\n   */\r\n   move(canvas){\r\n    if(!this.OutsideLeftRight(canvas)){\r\n          super.move(canvas);\r\n          return true;\r\n        }\r\n    else {\r\n      this.resetBall();\r\n      super.move(canvas);\r\n      return false;\r\n    }\r\n      \r\n}\r\n  /*collisionWith(paddles){\r\n    return this.x <= paddles.x + paddles.getWidth() && this.x >= paddles.x && this.y <= paddles.y+paddles.getHeight() && this.y >= paddles.y;\r\n\r\n}\r\n*/\r\nOutsideLeftRight(canvas){\r\n  return this.x < 0 || this.x>=canvas.width-this.getHeight();\r\n}\r\ncollisondet(paddles){\r\n  paddles.top = paddles.y;\r\n  paddles.bottom = paddles.y + paddles.getHeight();\r\n  paddles.left =paddles.x;\r\n  paddles.right = paddles.x + paddles.getWidth();\r\n  this.top= this.y - this.radius;\r\n  this.left = this.x - this.radius;\r\n  this.bottom = this.y + this.radius;\r\n  this.right = this.x+ this.radius;\r\n  return this.right >paddles.left && this.bottom>paddles.top && this.left < paddles.right && this.top <paddles.bottom;\r\n\r\n}\r\n\r\n/*\r\nupdate(){\r\n  let player =(this.x<canvas.height/2)?user:Com;\r\n// the ball has a velocity\r\n  this.x += this.shiftX;\r\n  this.y += this.shiftY;\r\n      // computer plays for itself, and we must be able to beat it\r\n    // simple AI\r\n  com.y += ((this.y - (com.y + com.height/2)))*0.1;\r\n  // when the ball collides with bottom and top walls we inverse the y velocity.\r\n  if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {\r\n    this.shiftY -=this.shiftY;\r\n    \r\n  }\r\n  if (collisiondet(player)) {\r\n    // le centre de collision de la balle avec le mobile \r\n    let colidPoint = (this.y - (player.y + player.height/2));\r\n    colidPoint = colidPoint/( player.height/2);\r\n\r\n    let angleRad = (Math.PI/4)*colidPoint;\r\n      // change the X and Y velocity direction\r\n    let direction = (this.x + this.radius < canvas.width/2) ? 1 : -1;\r\n    this.velocityX = direction * this.speed * Math.cos(angleRad);\r\n    this.velocityY = this.speed * Math.sin(angleRad);\r\n      \r\n      // speed up the ball everytime a paddle hits it.\r\n    this.speed += 0.1;\r\n\r\n    \r\n  }\r\n  // update the score \r\n  if( this.x - this.radius < 0 ){\r\n    scorevisitor++;\r\n    resetBall();\r\n}else if( this.x + this.radius > canvas.width){\r\n    scoreplayer++;\r\n    resetBall();\r\n}\r\n}\r\n*/\r\n// when COM or USER scores, we reset the ball ( remmetre en place la balle )\r\n resetBall(){\r\n  this.shiftX = -this.shiftX;\r\n  \r\n}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://pong/./src/scripts/Ball.js?");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./src/scripts/Ball.js\");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle.js */ \"./src/scripts/Paddle.js\");\n\r\n\r\n//const player = document.getElementById('player');\r\n//const com = document.getElementById('com');\r\n/**\r\n * a Game animates a ball bouncing in a canvas\r\n */\r\nclass Game {\r\n\r\n  /**\r\n   * build a Game\r\n   *\r\n   * @param  {Canvas} canvas the canvas of the game\r\n   */\r\n  constructor(canvas) {\r\n    this.raf = null;\r\n    this._ctxt = null;\r\n    this.canvas = canvas;\r\n    this.paddles = new Map().set(\"left\", new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](40,this.canvas.height/2)).set(\"right\",new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas.width-40,this.canvas.height/2));\r\n    this.ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width/2, this.canvas.height/2, this); // la balle au centre \r\n    //this.player = null;\r\n    this.com = null;\r\n    this._scoreHome = 0;\r\n    this._scoreVisitor = 0;\r\n  }\r\n  /** start this game animation */\r\n  start() {\r\n    this.animate();\r\n  }\r\n  /** stop this game animation */\r\n  stop() {\r\n    window.cancelAnimationFrame(this.raf);\r\n  }\r\n  get context() {\r\n    return this._ctxt;\r\n  }\r\n  set context(ctxt) {\r\n    this._ctxt = ctxt\r\n  }\r\n  get canvas() {\r\n    return this._canvas;\r\n  }\r\n  set canvas(canvas) {\r\n    this._canvas = canvas\r\n  }\r\n\r\n\r\n  /** animate the game : move and draw */\r\n  animate() {\r\n    this.ctxt = this.canvas.getContext(\"2d\");\r\n    this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    this.moveAndDraw();\r\n    this.ballEvenement();\r\n    this.raf = window.requestAnimationFrame(this.animate.bind(this));\r\n  }\r\n  /** move then draw the bouncing ball */\r\n  moveAndDraw() {\r\n    const ctxt = this.canvas.getContext(\"2d\");\r\n    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    this.paddles.forEach(elt =>elt.move(this.canvas));\r\n    this.paddles.forEach(elt =>elt.draw(ctxt));\r\n    this.ball.move(this.canvas);\r\n    this.ball.draw(ctxt);\r\n    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));\r\n  }\r\n  rightPaddleStopMoving(){\r\n    this.paddles.get(\"right\").stopMoving();\r\n}\r\nrightPaddleUp(){\r\n  this.paddles.get(\"right\").moveUp();\r\n\r\n}\r\n\r\nrightPaddleDown(){\r\n  this.paddles.get(\"right\").moveDown();\r\n}\r\n\r\nleftPaddleStopMoving(){\r\n  this.paddles.get(\"left\").stopMoving();\r\n \r\n}\r\nleftPaddleUp(){\r\n  this.paddles.get(\"left\").moveUp();\r\n \r\n\r\n}\r\n\r\nleftPaddleDown(){\r\n  this.paddles.get(\"left\").moveDown();\r\n  \r\n}\r\nupdateScore(score){\r\n  this.score=score;\r\n  document.getElementById(\"score\").textContent = this.score;\r\n\r\n}\r\nballEvenement() {\r\n  if (this.ball) {\r\n      this.ball.draw(this.ctxt);\r\n      if (!this.ball == false) {\r\n        for (let key of this.paddles.keys()) {\r\n          this.ball.collisondet(this.paddles.get(key))\r\n          this.ball.move(this.canvas);\r\n\r\n        }   \r\n          \r\n        }\r\n       \r\n  }\r\n}\r\n\r\n  keyDownActionHandler(event) {\r\n    switch (event.key) {\r\n        case \"ArrowUp\":\r\n        case \"UP\":\r\n          this.leftPaddleUp();\r\n          this.rightPaddleUp();\r\n            break;\r\n        case \"ArrowDown\":\r\n        case \"DOWN\":\r\n          this.leftPaddleDown();\r\n          this.rightPaddleDown();\r\n            break;\r\n        default:\r\n            return;\r\n    }\r\n    event.preventDefault();\r\n}\r\nkeyUpActionHandler(event) {\r\n  switch (event.key) {\r\n      case \"ArrowUp\":\r\n      case \"Up\":\r\n      case \"ArrowDown\":\r\n      case \"Down\":\r\n        this.leftPaddleStopMoving();\r\n         this.rightPaddleStopMoving();\r\n          break;\r\n      default:\r\n          return;\r\n  }\r\n  event.preventDefault();\r\n}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://pong/./src/scripts/Game.js?");

/***/ }),

/***/ "./src/scripts/Mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/Mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mobile)\n/* harmony export */ });\n/**\r\n  A mobile is defined by its coordinates, an image and a \"speed\" defined by horizontal and vertical shift values\r\n*/\r\nclass Mobile {\r\n  /**\r\n   * buils a Mobile\r\n   *\r\n   * @param  {number} x          the x coordinate of this mobile\r\n   * @param  {number} y          the y coordinate of this mobile\r\n   * @param  {string} imgSrc     this mobile's image src\r\n   * @param  {number} shiftX = 0 the horizontal shift \"speed\"\r\n   * @param  {number} shiftY = 0 the vertical shift \"speed\"\r\n   */\r\n  constructor(x, y, imgSrc, shiftX = 0, shiftY = 0) {\r\n    this.y = y;\r\n    this.x = x;\r\n\t  this.img = new Image();\r\n    this.img.src = imgSrc;\r\n    this.shiftX = shiftX;\r\n    this.shiftY = shiftY;\r\n  }\r\n\r\n  /** @return {number} the width of the mobile, ie. its images's width */\r\n  getWidth() {\r\n    return this.img.width;\r\n  }\r\n  /** @return {number} the width of the mobile, ie. its images's height */\r\n  getHeight() {\r\n    return this.img.height;\r\n  }\r\n  /** this mobile moves : horizontal and vertical shifts are added to coordinates */\r\n  move() {\r\n    this.x = this.x + this.shiftX;\r\n    this.y = this.y + this.shiftY;\r\n  }\r\n  /** draw this mobile's image at its coordinates in the given context\r\n  * @param {CanvasRenderingContext2D} ctxt - the drawing context\r\n  */\r\n  draw(ctxt) {\r\n    ctxt.drawImage(this.img,this.x,this.y);\r\n  }\r\n  /** this mobile stops moving : speed becomes 0 */\r\n  stopMoving() {\r\n    this.shiftX = 0;\r\n    this.shiftY = 0;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://pong/./src/scripts/Mobile.js?");

/***/ }),

/***/ "./src/scripts/MoveState.js":
/*!**********************************!*\
  !*** ./src/scripts/MoveState.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MoveState)\n/* harmony export */ });\nconst UP = Symbol('UP');\r\nconst DOWN = Symbol('DOWN');\r\nconst NONE = Symbol('NONE');\r\n\r\nclass MoveState {\r\n  static get UP() { return UP; }\r\n  static get DOWN() { return DOWN; }\r\n  static get NONE() { return NONE; }\r\n}\n\n//# sourceURL=webpack://pong/./src/scripts/MoveState.js?");

/***/ }),

/***/ "./src/scripts/Paddle.js":
/*!*******************************!*\
  !*** ./src/scripts/Paddle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ \"./src/scripts/Mobile.js\");\n/* harmony import */ var _MoveState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveState.js */ \"./src/scripts/MoveState.js\");\n\r\n\r\n\r\nconst  image_Paddle= './images/paddle.png';\r\nconst shiftY = 8;\r\nclass Paddle extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n        super(x, y, image_Paddle, 0,shiftY );\r\n        this._moving = _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].NONE;\r\n}\r\n    get up () {\r\n        return (this._moving == _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP);\r\n    }\r\n    \r\n   \r\n    get down () {\r\n        return (this._moving == _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN);\r\n    }\r\n    \r\n   \r\n    get moving() {\r\n        return this._moving;\r\n    }\r\n\r\n    \r\n    set moving(moving) {\r\n        this._moving = moving;\r\n    }\r\n\r\n    \r\n    moveDown() {\r\n        this.shiftY += this.shiftY;\r\n        this.moving = _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN;\r\n    }\r\n\r\n   \r\n    moveUp() {\r\n        this.shiftY -=this.shiftY ;\r\n        this.moving = _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP;\r\n    }\r\n    stopMoving() {\r\n        this.moving = _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].NONE;\r\n    }\r\n    move(canvas) {\r\n        if (this.moving === _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN) {\r\n            this.y = Math.min(520, this.y + this.shiftY);\r\n        }\r\n        // déplace sans sortir des limites \r\n        if (this.moving === _MoveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP) {\r\n            this.y = Math.max(0, this.y + this.shiftY);\r\n        }\r\n    }\r\n\r\n  \r\n  \r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://pong/./src/scripts/Paddle.js?");

/***/ }),

/***/ "./src/scripts/pong.js":
/*!*****************************!*\
  !*** ./src/scripts/pong.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/scripts/Game.js\");\n\r\n\r\nconst init = () => {\r\n  const theField = document.getElementById(\"field\");\r\n  const theGame = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](theField);\r\n  document.getElementById('start').addEventListener(\"click\", () => startGame(theGame) );\r\n  window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));\r\n  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));\r\n}\r\n\r\nwindow.addEventListener(\"load\",init);\r\n\r\n// true iff game is started\r\nlet started = false;\r\n/** start and stop a game\r\n * @param {Game} theGame - the game to start and stop\r\n */\r\nconst startGame = theGame => {\r\n  if (!started) {\r\n    theGame.start();\r\n    document.getElementById('start').value = 'stop';\r\n  }\r\n  else {\r\n    document.getElementById('start').value = 'jouer';\r\n    theGame.stop();\r\n  }\r\n  started = ! started;\r\n}\r\n\n\n//# sourceURL=webpack://pong/./src/scripts/pong.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pong.js");
/******/ 	
/******/ })()
;