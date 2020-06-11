webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_json_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/json_viewer */ \"./components/json_viewer.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/jay/hacking-workspace/hacking-software/json-viewer/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nfunction GetJsonInput(parseJson) {\n  return __jsx(\"div\", {\n    className: \"d-flex flex-column input-group w-50 my-4\",\n    style: {\n      height: '100vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex flex-row\",\n    style: {\n      height: '50vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group-prepend\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"input-group-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 6\n    }\n  }, \"Input \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }), \" JSON\")), __jsx(\"textarea\", {\n    id: \"json\",\n    className: \"form-control\",\n    \"aria-label\": \"Input JSON\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(\"button\", {\n    id: \"parse-json\",\n    type: \"button\",\n    onClick: function onClick() {\n      parseJson(document.getElementById('json').value);\n    },\n    className: \"btn btn-dark my-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, \"Parse\")));\n}\n\n_c = GetJsonInput;\n\nfunction ShowJson(json) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 3\n    }\n  }, __jsx(_components_json_viewer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    json: json,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }\n  }));\n}\n\n_c2 = ShowJson;\n\nfunction MainComponent(inp) {\n  if (inp.props.getInput) {\n    return GetJsonInput(inp.parseCallback);\n  }\n\n  return ShowJson(inp.props.json);\n}\n\n_c3 = MainComponent;\n\nvar JsonViewer = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(JsonViewer, _React$Component);\n\n  var _super = _createSuper(JsonViewer);\n\n  function JsonViewer(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, JsonViewer);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      getInput: true,\n      json: null\n    };\n    _this.parseJson = _this.parseJson.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(JsonViewer, [{\n    key: \"parseJson\",\n    value: function parseJson(jsonInput) {\n      console.log('parsing...', jsonInput);\n      this.setState({\n        getInput: false,\n        json: JSON.parse(jsonInput)\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      $(function () {\n        $('[data-toggle=\"tooltip\"]').tooltip();\n      });\n      $(function () {\n        $('[data-toggle=\"popover\"]').popover();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"Main\",\n        style: {\n          height: '500px'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 4\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 5\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 6\n        }\n      }, \"JSON Viewer\"), __jsx(\"script\", {\n        src: \"https://code.jquery.com/jquery-3.2.1.slim.min.js\",\n        integrity: \"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\",\n        crossorigin: \"anonymous\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 6\n        }\n      }), __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",\n        integrity: \"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",\n        crossOrigin: \"anonymous\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 6\n        }\n      }), __jsx(\"script\", {\n        src: \"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\",\n        integrity: \"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\",\n        crossorigin: \"anonymous\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 6\n        }\n      })), __jsx(\"nav\", {\n        className: \"navbar navbar-dark bg-dark \",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        className: \"navbar-brand\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 6\n        }\n      }, \"JSON Viewer\")), __jsx(\"a\", {\n        tabindex: \"0\",\n        \"class\": \"btn btn-lg btn-danger\",\n        role: \"button\",\n        \"data-toggle\": \"popover\",\n        \"data-trigger\": \"focus\",\n        title: \"Dismissible popover\",\n        \"data-content\": \"And here's some amazing content. It's very engaging. Right?\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 5\n        }\n      }, \"Dismissible popover\"), __jsx(\"div\", {\n        className: \"d-flex justify-content-center h-100\",\n        style: {\n          height: '100vh'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 5\n        }\n      }, __jsx(MainComponent, {\n        props: this.state,\n        parseCallback: this.parseJson,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 6\n        }\n      })));\n    }\n  }]);\n\n  return JsonViewer;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JsonViewer);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"GetJsonInput\");\n$RefreshReg$(_c2, \"ShowJson\");\n$RefreshReg$(_c3, \"MainComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkdldEpzb25JbnB1dCIsInBhcnNlSnNvbiIsImhlaWdodCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIlNob3dKc29uIiwianNvbiIsIk1haW5Db21wb25lbnQiLCJpbnAiLCJwcm9wcyIsImdldElucHV0IiwicGFyc2VDYWxsYmFjayIsIkpzb25WaWV3ZXIiLCJzdGF0ZSIsImJpbmQiLCJqc29uSW5wdXQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJKU09OIiwicGFyc2UiLCIkIiwidG9vbHRpcCIsInBvcG92ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxTQUF0QixFQUFpQztBQUNoQyxTQUNDO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQTBELFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFAsVUFERCxDQURELEVBTUM7QUFBVSxNQUFFLEVBQUMsTUFBYjtBQUFvQixhQUFTLEVBQUMsY0FBOUI7QUFBNkMsa0JBQVcsWUFBeEQ7QUFBQTtBQUFBO0FB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NkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsQ0FwQkQsRUF1QkM7QUFDQyxnQkFBUSxFQUFDLEdBRFY7QUFFQyxpQkFBTSx1QkFGUDtBQUdDLFlBQUksRUFBQyxRQUhOO0FBSUMsdUJBQVksU0FKYjtBQUtDLHdCQUFhLE9BTGQ7QUFNQyxhQUFLLEVBQUMscUJBTlA7QUFPQyx3QkFBYSw2REFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXZCRCxFQWtDQztBQUFLLGlCQUFTLEVBQUMscUNBQWY7QUFBcUQsYUFBSyxFQUFFO0FBQUVBLGdCQUFNLEVBQUU7QUFBVixTQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxhQUFEO0FBQWUsYUFBSyxFQUFFLEtBQUtZLEtBQTNCO0FBQWtDLHFCQUFhLEVBQUUsS0FBS2IsU0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBbENELENBREQ7QUF3Q0E7Ozs7RUFwRXVCd0IsNENBQUssQ0FBQ0MsUzs7QUF1RWhCYix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFyc2VkSnNvblZpZXdlciBmcm9tICcuLi9jb21wb25lbnRzL2pzb25fdmlld2VyJztcblxuZnVuY3Rpb24gR2V0SnNvbklucHV0KHBhcnNlSnNvbikge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGlucHV0LWdyb3VwIHctNTAgbXktNFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cblx0XHRcdFx0XHRcdElucHV0IDxiciAvPiBKU09OXG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHRleHRhcmVhIGlkPVwianNvblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJJbnB1dCBKU09OXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGlkPVwicGFyc2UtanNvblwiXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0b25DbGljaz17ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRwYXJzZUpzb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzb24nKS52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbXktNFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRQYXJzZVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBTaG93SnNvbihqc29uKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxQYXJzZWRKc29uVmlld2VyIGpzb249e2pzb259IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIE1haW5Db21wb25lbnQoaW5wKSB7XG5cdGlmIChpbnAucHJvcHMuZ2V0SW5wdXQpIHtcblx0XHRyZXR1cm4gR2V0SnNvbklucHV0KGlucC5wYXJzZUNhbGxiYWNrKTtcblx0fVxuXHRyZXR1cm4gU2hvd0pzb24oaW5wLnByb3BzLmpzb24pO1xufVxuXG5jbGFzcyBKc29uVmlld2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGdldElucHV0OiB0cnVlLFxuXHRcdFx0anNvbjogbnVsbFxuXHRcdH07XG5cdFx0dGhpcy5wYXJzZUpzb24gPSB0aGlzLnBhcnNlSnNvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0cGFyc2VKc29uKGpzb25JbnB1dCkge1xuXHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nLi4uJywganNvbklucHV0KTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGdldElucHV0OiBmYWxzZSxcblx0XHRcdGpzb246IEpTT04ucGFyc2UoanNvbklucHV0KVxuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0JChmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cdFx0ICB9KVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1haW5cIiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBweCcgfX0+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5KU09OIFZpZXdlcjwvdGl0bGU+XG5cdFx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMi4xLnNsaW0ubWluLmpzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1LSjNvMkRLdElrdllJSzNVRU56bU03S0NrUnIvckU5L1FwZzZhQVpHSndGRE1WTkEvR3BHRkY5M2hYcEc1S2tOXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTIuOS91bWQvcG9wcGVyLm1pbi5qc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtQXBOYmdoOUIrWTFRS3R2M1JuN1czbWdQeGhVOUsvU2NRc0FQN2hVaWJYMzlqN2Zha0ZQc2t2WHVzdmZhMGI0UVwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrIFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+SlNPTiBWaWV3ZXI8L2Rpdj5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tbGcgYnRuLWRhbmdlclwiXG5cdFx0XHRcdFx0cm9sZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0ZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJcblx0XHRcdFx0XHRkYXRhLXRyaWdnZXI9XCJmb2N1c1wiXG5cdFx0XHRcdFx0dGl0bGU9XCJEaXNtaXNzaWJsZSBwb3BvdmVyXCJcblx0XHRcdFx0XHRkYXRhLWNvbnRlbnQ9XCJBbmQgaGVyZSdzIHNvbWUgYW1hemluZyBjb250ZW50LiBJdCdzIHZlcnkgZW5nYWdpbmcuIFJpZ2h0P1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHREaXNtaXNzaWJsZSBwb3BvdmVyXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBoLTEwMFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cblx0XHRcdFx0XHQ8TWFpbkNvbXBvbmVudCBwcm9wcz17dGhpcy5zdGF0ZX0gcGFyc2VDYWxsYmFjaz17dGhpcy5wYXJzZUpzb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBKc29uVmlld2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})