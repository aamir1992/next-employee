"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(299);
/* harmony import */ var _database_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);


async function handler(req, res) {
    (0,_database_conn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().catch(()=>res.status(405).json({
            error: "Error in the Connection"
        })
    );
    // type of request
    const { method  } = req;
    switch(method){
        case "GET":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .getUser */ .PR)(req, res);
            break;
        case "PUT":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .putUser */ ._W)(req, res);
            break;
        case "DELETE":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .deleteUser */ .h8)(req, res);
            break;
        default:
            res.setHeader("Allow", [
                "GET",
                "POST",
                "PUT",
                "DELETE"
            ]);
            res.status(405).end(`Method ${method} Not Allowd`);
            break;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [583], () => (__webpack_exec__(311)));
module.exports = __webpack_exports__;

})();