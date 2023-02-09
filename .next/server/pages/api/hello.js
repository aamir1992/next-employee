"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongo = async ()=>{
    try {
        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority");
        if (connection.readyState == 1) {
            console.log("Database Connected");
        }
    } catch (errors) {
        return Promise.reject(errors);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);


/***/ }),

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(299);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    (0,_database_conn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    res.status(200).json({
        name: "John Doe"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(668));
module.exports = __webpack_exports__;

})();