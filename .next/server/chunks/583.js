"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

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

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h8": () => (/* binding */ deleteUser),
  "PR": () => (/* binding */ getUser),
  "Rf": () => (/* binding */ getUsers),
  "l1": () => (/* binding */ postUser),
  "_W": () => (/* binding */ putUser)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
;// CONCATENATED MODULE: ./model/user.js

const userSchema = new external_mongoose_.Schema({
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    date: String,
    status: String
});
const Users = external_mongoose_.models.user || (0,external_mongoose_.model)("user", userSchema);
/* harmony default export */ const model_user = (Users);

;// CONCATENATED MODULE: ./database/controller.js
/** Controller */ 
// get : http://localhost:3000/api/users
async function getUsers(req, res) {
    try {
        const users = await model_user.find({});
        if (!users) return res.status(404).json({
            error: "Data not Found"
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({
            error: "Error While Fetching Data"
        });
    }
}
// get : http://localhost:3000/api/users/1
async function getUser(req, res) {
    try {
        const { userId  } = req.query;
        if (userId) {
            const user = await model_user.findById(userId);
            res.status(200).json(user);
        }
        res.status(404).json({
            error: "User not Selected...!"
        });
    } catch (error) {
        res.status(404).json({
            error: "Cannot get the User...!"
        });
    }
}
// post : http://localhost:3000/api/users
async function postUser(req, res) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({
            error: "Form Data Not Provided...!"
        });
        model_user.create(formData, function(err, data) {
            return res.status(200).json(data);
        });
    } catch (error) {
        return res.status(404).json({
            error
        });
    }
}
// put : http://localhost:3000/api/users/1
async function putUser(req, res) {
    try {
        const { userId  } = req.query;
        const formData = req.body;
        if (userId && formData) {
            const user = await model_user.findByIdAndUpdate(userId, formData);
            res.status(200).json(user);
        }
        res.status(404).json({
            error: "User Not Selected...!"
        });
    } catch (error) {
        res.status(404).json({
            error: "Error While Updating the Data...!"
        });
    }
}
// delete : http://localhost:3000/api/users/1
async function deleteUser(req, res) {
    try {
        const { userId  } = req.query;
        if (userId) {
            const user = await model_user.findByIdAndDelete(userId);
            return res.status(200).json(user);
        }
        res.status(404).json({
            error: "User Not Selected...!"
        });
    } catch (error) {
        res.status(404).json({
            error: "Error While Deleting the User...!"
        });
    }
}


/***/ })

};
;