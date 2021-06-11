"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const SessionController_1 = __importDefault(require("./controllers/SessionController"));
const PermissionController_1 = __importDefault(require("./controllers/PermissionController"));
const RoleController_1 = __importDefault(require("./controllers/RoleController"));
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const permission_1 = require("./middleWares/permission");
const ChartController_1 = __importDefault(require("./controllers/ChartController"));
const router = express_1.Router();
exports.router = router;
router.post('/users', UserController_1.default.create);
router.post('/sessions', SessionController_1.default.create);
router.post('/permissions', PermissionController_1.default.create);
router.post('/roles', RoleController_1.default.create);
router.post('/products', permission_1.is(["ROLE_ADMIN"]), ProductController_1.default.create);
router.get('/products', permission_1.is(["ROLE_ADMIN", "ROLE_USER"]), ProductController_1.default.index);
router.get('/products/:id', permission_1.is(["ROLE_ADMIN", "ROLE_USER"]), ProductController_1.default.show);
router.post('/charts', ChartController_1.default.create);