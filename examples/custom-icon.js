webpackJsonp([1],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_collapse_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_string_prototype_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

var arrowPath = 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' + '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' + '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' + '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

function expandIcon(_ref) {
  var isActive = _ref.isActive;

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'i',
    { style: { marginRight: '.5rem' } },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'svg',
      {
        viewBox: '0 0 1024 1024',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        style: {
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: 'rotate(' + (isActive ? 90 : 0) + 'deg)'
        }
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('path', { d: arrowPath, 'p-id': '5827' })
    )
  );
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
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
    }, _this.toggle = function () {
      _this.setState({
        accordion: !_this.state.accordion
      });
    }, _this.reRender = function () {
      _this.setState({
        time: random()
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
          { defaultActiveKey: '1', expandIcon: expandIcon },
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
            activeKey: activeKey,
            expandIcon: expandIcon
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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*! http://mths.be/repeat v0.2.0 by @mathias */
if (!String.prototype.repeat) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var repeat = function(count) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			// `ToInteger`
			var n = count ? Number(count) : 0;
			if (n != n) { // better `isNaN`
				n = 0;
			}
			// Account for out-of-bounds indices
			if (n < 0 || n == Infinity) {
				throw RangeError();
			}
			var result = '';
			while (n) {
				if (n % 2 == 1) {
					result += string;
				}
				if (n > 1) {
					string += string;
				}
				n >>= 1;
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'repeat', {
				'value': repeat,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.repeat = repeat;
		}
	}());
}


/***/ })

},[40]);
//# sourceMappingURL=custom-icon.js.map