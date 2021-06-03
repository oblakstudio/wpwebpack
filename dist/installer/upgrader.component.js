"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-var-requires */
var fs_extra_1 = __importDefault(require("fs-extra"));
var log_symbols_1 = __importDefault(require("log-symbols"));
var merge_packages_1 = require("merge-packages");
var ora_1 = __importDefault(require("ora"));
var path_1 = __importDefault(require("path"));
var prompts_1 = __importDefault(require("prompts"));
var chalk_1 = require("chalk");
var Upgrader = /** @class */ (function () {
    function Upgrader(installDir, upgradeDir) {
        this.installDir = installDir;
        this.upgradeDir = upgradeDir;
        this.spinner = ora_1["default"]({
            text: ''
        });
    }
    Upgrader.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opts, buildFiles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.upgradeCheck()];
                    case 1:
                        opts = _a.sent();
                        return [4 /*yield*/, this.upgradePackageJson()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.upgradeConfig()];
                    case 3:
                        _a.sent();
                        if (!opts.webpack) return [3 /*break*/, 6];
                        this.spinner.start(chalk_1.yellow('Updating') + " build files...");
                        return [4 /*yield*/, this.getBuildFiles()];
                    case 4:
                        buildFiles = _a.sent();
                        return [4 /*yield*/, this.updateFiles(buildFiles)];
                    case 5:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("Updated") + " build files");
                        _a.label = 6;
                    case 6:
                        if (!opts.browserlist) return [3 /*break*/, 8];
                        this.spinner.start(chalk_1.yellow('Updating') + " browserlist...");
                        return [4 /*yield*/, this.updateFiles(['.browserslistrc'])];
                    case 7:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("Updated") + " browserlist");
                        _a.label = 8;
                    case 8:
                        if (!opts.editorconfig) return [3 /*break*/, 10];
                        this.spinner.start(chalk_1.yellow('Updating') + " editorconfig...");
                        return [4 /*yield*/, this.updateFiles(['.editorconfig'])];
                    case 9:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("Updated") + " editorconfig");
                        _a.label = 10;
                    case 10:
                        if (!opts.linters) return [3 /*break*/, 12];
                        this.spinner.start(chalk_1.yellow('Updating') + " linters...");
                        return [4 /*yield*/, this.updateFiles(['.eslintrc.json', '.stylelintrc'])];
                    case 11:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("Updated") + " linters");
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.cleanup()];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Upgrader.prototype.upgradePackageJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var installedConfig, upgradedConfig, newPackageJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        installedConfig = require(path_1["default"].resolve(this.installDir, 'package.json'));
                        //Clear unneded files
                        delete installedConfig.private;
                        delete installedConfig.repository;
                        upgradedConfig = require(path_1["default"].resolve(this.upgradeDir, 'package.json'));
                        delete upgradedConfig.private;
                        console.log(log_symbols_1["default"].info + " We will upgrade from v" + installedConfig.version + " to v" + upgradedConfig.version);
                        console.log(log_symbols_1["default"].info + " Updating package.json");
                        newPackageJson = merge_packages_1.mergeJson(installedConfig, upgradedConfig);
                        return [4 /*yield*/, fs_extra_1["default"].writeFile(path_1["default"].resolve(this.installDir, 'package.json'), JSON.stringify(newPackageJson, null, 4))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Upgrader.prototype.upgradeConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(log_symbols_1["default"].info + " Updating main config file");
                        return [4 /*yield*/, fs_extra_1["default"].rename(path_1["default"].resolve(this.upgradeDir, 'wpwp.config.js'), path_1["default"].resolve(this.installDir, 'wpwp.config.new.js'))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Upgrader.prototype.getBuildFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].readdir(path_1["default"].resolve(this.upgradeDir, 'assets/build'))];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (file) {
                            return "assets/build/" + file;
                        }).concat(['tsconfig.json', '.babelrc'])];
                }
            });
        });
    };
    Upgrader.prototype.updateFiles = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, files_1, file, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, files_1 = files;
                        _a.label = 1;
                    case 1:
                        if (!(_i < files_1.length)) return [3 /*break*/, 7];
                        file = files_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fs_extra_1["default"].remove(path_1["default"].resolve(this.installDir, file))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1["default"].rename(path_1["default"].resolve(this.upgradeDir, file), path_1["default"].resolve(this.installDir, file))];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log();
                        console.log(log_symbols_1["default"].error + " Cannot update " + file);
                        return [3 /*break*/, 6];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Upgrader.prototype.cleanup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].remove(this.upgradeDir)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Upgrader.prototype.upgradeCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var webpack, browserlist, editorconfig, linters, opts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(log_symbols_1["default"].info + " Welcome to WPwebpack upgrader. This will upgrade files needed for proper operation and packages defined in package.json");
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Upgrade build files (files in assets/build folder)? (y/n)'
                            })];
                    case 1:
                        webpack = _a.sent();
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Upgrade browserlist (.browserlistrc)? (y/n)'
                            })];
                    case 2:
                        browserlist = _a.sent();
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Upgrade editorconfig (.editorconfig)? (y/n)'
                            })];
                    case 3:
                        editorconfig = _a.sent();
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Upgrade linters (.eslintrc.json, .stylelintrc)? (y/n)'
                            })];
                    case 4:
                        linters = _a.sent();
                        opts = {
                            webpack: (webpack.response == 'y') ? true : false,
                            browserlist: (browserlist.response == 'y') ? true : false,
                            editorconfig: (editorconfig.response == 'y') ? true : false,
                            linters: (linters.response == 'y') ? true : false
                        };
                        return [2 /*return*/, opts];
                }
            });
        });
    };
    return Upgrader;
}());
exports["default"] = Upgrader;
