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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.__esModule = true;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express = require("express");
var node_fetch_1 = require("node-fetch");
var path = require("path");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client/build')));
app.post('/recipeResults', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var apiKey, api, ingredients, recipeInfo, sort, number, url, data, json, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                apiKey = "apiKey=".concat(process.env.REACT_APP_KEY);
                api = "https://api.spoonacular.com/recipes/complexSearch?";
                ingredients = "&query=".concat(req.body.ingredients);
                recipeInfo = '&addRecipeInformation=true';
                sort = '&sort=random';
                number = '&number=30';
                url = api + apiKey + ingredients + recipeInfo + number + sort;
                return [4 /*yield*/, (0, node_fetch_1["default"])(url)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                json = _a.sent();
                console.log(process.env.REACT_APP_KEY);
                res.send(json);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/cuisineRecipes', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var apiKey, api, query, cuisine, recipeInfo, number, sort, url, data, json, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                apiKey = "apiKey=".concat(process.env.REACT_APP_KEY);
                api = "https://api.spoonacular.com/recipes/complexSearch?";
                query = "&query=''";
                cuisine = "&cuisine=".concat(req.body.cuisine);
                recipeInfo = '&addRecipeInformation=true';
                number = '&number=30';
                sort = '&sort=random';
                url = api + apiKey + query + cuisine + recipeInfo + number + sort;
                return [4 /*yield*/, (0, node_fetch_1["default"])(url)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                json = _a.sent();
                res.send(json);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/randomRecipe', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var apiKey, api, recipeInfo, number, url, data, json, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                apiKey = "apiKey=".concat(process.env.REACT_APP_KEY);
                api = "https://api.spoonacular.com/recipes/random?";
                recipeInfo = '&addRecipeInformation=true';
                number = '&number=1';
                url = api + apiKey + recipeInfo + number;
                return [4 /*yield*/, (0, node_fetch_1["default"])(url)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                json = _a.sent();
                res.send(json);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                next(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
module.exports = app;
