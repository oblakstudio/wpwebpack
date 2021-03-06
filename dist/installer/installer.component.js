"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var path_1 = __importDefault(require("path"));
var yargs_1 = __importDefault(require("yargs"));
var ora_1 = __importDefault(require("ora"));
var log_symbols_1 = __importDefault(require("log-symbols"));
var prompts_1 = __importDefault(require("prompts"));
var download_1 = __importDefault(require("download"));
var unzipper = __importStar(require("unzipper"));
var chalk_1 = require("chalk");
var execa_1 = require("execa");
var upgrader_component_1 = __importDefault(require("./upgrader.component"));
var Installer = /** @class */ (function () {
    function Installer(version) {
        var _a;
        var argv = yargs_1["default"].options({
            dir: {
                alias: 'd',
                demandOption: false,
                description: 'Directory to install WP Webpack to'
            }
        }).argv;
        this.releaseVer = version;
        this.installDir = path_1["default"].resolve(process.cwd(), ((_a = argv.dir) !== null && _a !== void 0 ? _a : ''));
        this.upgradeDir = path_1["default"].resolve(this.installDir, 'tmp');
        this.upgrading = false;
        this.spinner = ora_1["default"]({
            text: ''
        });
    }
    /**
     * Main installer function
     *
     * @return {Promise<0|1>} Program exit code
     */
    Installer.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var upgrade, _a, reason_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        try {
                            this.sanityCheck();
                        }
                        catch (error) {
                            this.exit(error.message);
                            return [2 /*return*/, 1];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        if (!(this.preinstallCheck())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.upgradePrompt()];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = false;
                        _b.label = 4;
                    case 4:
                        upgrade = _a;
                        return [4 /*yield*/, this.install(upgrade)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, 0];
                    case 6:
                        reason_1 = _b.sent();
                        this.exit(reason_1);
                        return [2 /*return*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Installer.prototype.sanityCheck = function () {
        console.clear();
        console.log("Welcome to " + chalk_1.cyan('WPwebpack') + " installer v" + this.releaseVer);
        console.log("Depending on your internet and computer speed, this might take a couple of minutes");
        var nodeVersion = parseInt(process.versions.node.split('.')[0]);
        if (nodeVersion < 12) {
            throw new Error("Incorrect Node.js version. Required: 12, Found:" + nodeVersion);
        }
    };
    Installer.prototype.preinstallCheck = function () {
        return fs_extra_1["default"].existsSync(path_1["default"].resolve(this.installDir, 'wpwp.config.js'));
    };
    /**
     * Displays confirm files promt during installation
     */
    Installer.prototype.upgradePrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var doUpgrade, doOverwrite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(log_symbols_1["default"].info, chalk_1.yellow('Detected WP-webpack instalation files.'));
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Upgrade? (y/n)'
                            })];
                    case 1:
                        doUpgrade = _a.sent();
                        if (doUpgrade.response == 'y') {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, prompts_1["default"]({
                                type: 'text',
                                name: 'response',
                                message: 'Overwrite? (y/n)'
                            })];
                    case 2:
                        doOverwrite = _a.sent();
                        if (doOverwrite.response !== 'y') {
                            throw new Error('Installation cancelled');
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Installer.prototype.install = function (upgrade) {
        return __awaiter(this, void 0, void 0, function () {
            var downloadDir, upgrader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        downloadDir = upgrade ? this.upgradeDir : this.installDir;
                        this.spinner.start(chalk_1.yellow('DOWNLOADING') + " WP-webpack files...");
                        return [4 /*yield*/, this.downloadRelease(this.releaseVer, downloadDir)];
                    case 1:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("DOWNLOADED") + " WP-webpack files");
                        if (!upgrade) return [3 /*break*/, 3];
                        upgrader = new upgrader_component_1["default"](this.installDir, this.upgradeDir);
                        return [4 /*yield*/, upgrader.run()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.spinner.start(chalk_1.yellow('Installing') + " packages...");
                        return [4 /*yield*/, this.installPackages()];
                    case 4:
                        _a.sent();
                        this.spinner.succeed(chalk_1.green("Installed") + " packages");
                        this.postInstall();
                        return [2 /*return*/];
                }
            });
        });
    };
    Installer.prototype.downloadRelease = function (version, dirPath) {
        return __awaiter(this, void 0, void 0, function () {
            var releaseFile, unzippedDir, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, download_1["default"]("https://github.com/oblakstudio/wpwebpack/releases/download/v" + version + "/wp-webpack-" + version + ".zip")];
                    case 1:
                        releaseFile = _a.sent();
                        return [4 /*yield*/, unzipper.Open.buffer(releaseFile)];
                    case 2:
                        unzippedDir = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, Promise.all(this.extractFiles(unzippedDir, dirPath))];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Installer.prototype.extractFiles = function (unzippedDir, dirPath) {
        var _this = this;
        return unzippedDir.files.filter(function (file) { return 'File' === file.type; }).map(function (file) { return __awaiter(_this, void 0, void 0, function () {
            var formattedPath, fullPath, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        formattedPath = [dirPath].concat(file.path);
                        fullPath = path_1["default"].resolve.apply(path_1["default"], formattedPath);
                        _b = (_a = fs_extra_1["default"]).outputFile;
                        _c = [fullPath];
                        return [4 /*yield*/, file.buffer()];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
                    case 2: return [2 /*return*/, _d.sent()];
                }
            });
        }); });
    };
    Installer.prototype.installPackages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        process.chdir(this.installDir);
                        return [4 /*yield*/, execa_1.command('yarn install')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Installer.prototype.postInstall = function () {
        // Basic info
        console.log();
        console.log(log_symbols_1["default"].success, chalk_1.green('ALL DONE!'), 'WPwebpack has been installed');
        console.log(log_symbols_1["default"].info, 'Files have been installed to: ', chalk_1.cyan(this.installDir));
        // Quickstart
        console.log();
        console.log(log_symbols_1["default"].info, 'You can find the QuickStart guide at:');
        console.log(chalk_1.blueBright('https://wpwebpack.js.org'));
    };
    Installer.prototype.exit = function (message) {
        if (message === void 0) { message = 'Installation cancelled'; }
        console.log(log_symbols_1["default"].info, chalk_1.yellow(message));
    };
    return Installer;
}());
exports["default"] = Installer;
