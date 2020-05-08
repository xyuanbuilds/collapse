webpackJsonp([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      time: random(),
      accordion: false,
      activeKey: ['4']
    }, _this.onChange = function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });
    }, _this.setActivityKey = function () {
      _this.setState({
        activeKey: ['2']
      });
    }, _this.reRender = function () {
      _this.setState({
        time: random()
      });
    }, _this.toggle = function () {
      _this.setState({
        accordion: !_this.state.accordion
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Test, [{
    key: 'getItems',
    value: function getItems() {
      var items = [];
      for (var i = 0, len = 3; i < len; i++) {
        var key = i + 1;
        items.push(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
          { header: 'This is panel header ' + key, key: key, disabled: i === 0 },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'p',
            null,
            text.repeat(this.state.time)
          )
        ));
      }
      items.push(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
        { header: 'This is panel header 4', key: '4' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default.a,
          { defaultActiveKey: '1' },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
            { header: 'This is panel nest panel', key: '1', id: 'header-test' },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'p',
              null,
              text
            )
          )
        )
      ));

      items.push(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
        { header: 'This is panel header 5', key: '5' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default.a,
          { defaultActiveKey: '1' },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
            { header: 'This is panel nest panel', key: '1', id: 'another-test' },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'form',
              null,
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'label',
                { htmlFor: 'test' },
                'Name:\xA0'
              ),
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { type: 'text', id: 'test' })
            )
          )
        )
      ));

      items.push(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"],
        { header: 'This is panel header 6', key: '6', extra: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'span',
            null,
            'Extra Node'
          ) },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          null,
          'Panel with extra'
        )
      ));

      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      var accordion = this.state.accordion;
      var btn = accordion ? 'Mode: accordion' : 'Mode: collapse';
      var activeKey = this.state.activeKey;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 400 } },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          { onClick: this.reRender },
          'reRender'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          { onClick: this.toggle },
          btn
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          { onClick: this.setActivityKey },
          'active header 2'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default.a,
          {
            accordion: accordion,
            onChange: this.onChange,
            activeKey: activeKey
          },
          this.getItems()
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ })

},[39]);
//# sourceMappingURL=simple.js.map