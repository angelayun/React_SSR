"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("../pages/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//渲染 index 组件 到页面
_reactDom.default.hydrate(_react.default.createElement(_index.default, null), document.getElementById('root'));