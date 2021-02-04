(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

/***/ "./components/home/social-media.js":
/*!*****************************************!*\
  !*** ./components/home/social-media.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
var _this = undefined,
    _jsxFileName = "D:\\ADDUCS\\SAMAHAN SYSTEM DEVELOPMENT\\samahan-nextjs\\components\\home\\social-media.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    headerWithDivider: {
      display: 'flex',
      alignItems: 'center'
    },
    dividerSocialMedia: {
      flexGrow: 1,
      height: 1,
      backgroundColor: "#000",
      marginLeft: 20
    }
  };
});

var List = function List() {
  _s();

  // Get the data of the current list.
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classes.headerWithDivider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Social Media"), __jsx("div", {
    className: classes.dividerSocialMedia,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    spacing: 6,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__["TwitterTimelineEmbed"], {
    sourceType: "profile",
    screenName: "addusamahan",
    options: {
      height: 800,
      width: '80vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__["TwitterTimelineEmbed"], {
    sourceType: "profile",
    screenName: "IHelpSAMAHAN",
    options: {
      height: 800,
      width: '80vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))));
};

_s(List, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/Grid.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: className,
    ref: ref
  }, other));
});
 true ? Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(SPACINGS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
var StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = Object(_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__["default"])('Grid');
  StyledGrid.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StyledGrid);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/Typography.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/Typography.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(align))], display !== 'initial' && classes["display".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(display))]),
    ref: ref
  }, other));
});
 true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Controls the display type
   */
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Applies the theme typography styles.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Typography__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : undefined);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requirePropFactory; });
function requirePropFactory(componentNameInError) {
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var VALIDATOR_ARG_ERROR_MESSAGE='The typeValidator argument must be a function with the signature function(props, propName, componentName).',MESSAGE_ARG_ERROR_MESSAGE='The error message is optional, but must be a string if provided.',propIsRequired=function propIsRequired(a,b,c,d){if('boolean'==typeof a)return a;return'function'==typeof a?a(b,c,d):!(!0!==!!a)&&!!a},propExists=function propExists(a,b){return Object.hasOwnProperty.call(a,b)},missingPropError=function missingPropError(a,b,c,d){return d?new Error(d):new Error('Required '+a[b]+' `'+b+'`'+(' was not specified in `'+c+'`.'))},guardAgainstInvalidArgTypes=function guardAgainstInvalidArgTypes(a,b){if('function'!=typeof a)throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);if(!!b&&'string'!=typeof b)throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE)},isRequiredIf=function isRequiredIf(a,b,c){return guardAgainstInvalidArgTypes(a,c),function(d,e,f){for(var _len=arguments.length,g=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++)g[_key-3]=arguments[_key];return propIsRequired(b,d,e,f)?propExists(d,e)?a.apply(void 0,[d,e,f].concat(g)):missingPropError(d,e,f,c):a.apply(void 0,[d,e,f].concat(g));// Is not required, so just run typeValidator.
}};exports.default=isRequiredIf;

//# sourceMappingURL=isRequiredIf.js.map

/***/ }),

/***/ "./node_modules/react-twitter-embed/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-twitter-embed/dist/index.es.js ***!
  \***********************************************************/
/*! exports provided: TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTimelineEmbed", function() { return TwitterTimelineEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return TwitterShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterFollowButton", function() { return TwitterFollowButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterHashtagButton", function() { return TwitterHashtagButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMentionButton", function() { return TwitterMentionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTweetEmbed", function() { return TwitterTweetEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMomentShare", function() { return TwitterMomentShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterDMButton", function() { return TwitterDMButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterVideoEmbed", function() { return TwitterVideoEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterOnAirButton", function() { return TwitterOnAirButton; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-proptype-conditional-require */ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js");
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);











var twitterWidgetJs = 'https://platform.twitter.com/widgets.js';

var TwitterTimelineEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTimelineEmbed, _Component);

  function TwitterTimelineEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTimelineEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTimelineEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTimelineEmbed, [{
    key: "buildChromeOptions",
    value: function buildChromeOptions(options) {
      options.chrome = '';

      if (this.props.noHeader) {
        options.chrome = options.chrome + ' noheader';
      }

      if (this.props.noFooter) {
        options.chrome = options.chrome + ' nofooter';
      }

      if (this.props.noBorders) {
        options.chrome = options.chrome + ' noborders';
      }

      if (this.props.noScrollbar) {
        options.chrome = options.chrome + ' noscrollbar';
      }

      if (this.props.transparent) {
        options.chrome = options.chrome + ' transparent';
      }

      return options;
    }
  }, {
    key: "buildOptions",
    value: function buildOptions() {
      var options = Object.assign({}, this.props.options);

      if (this.props.autoHeight) {
        options.height = this.refs.embedContainer.parentNode.offsetHeight;
      }

      options = Object.assign({}, options, {
        theme: this.props.theme,
        linkColor: this.props.linkColor,
        borderColor: this.props.borderColor,
        lang: this.props.lang
      });
      return options;
    }
  }, {
    key: "renderWidget",
    value: function renderWidget(options) {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTimeline({
          sourceType: this.props.sourceType,
          screenName: this.props.screenName,
          userId: this.props.userId,
          ownerScreenName: this.props.ownerScreenName,
          slug: this.props.slug,
          id: this.props.id || this.props.widgetId,
          url: this.props.url
        }, this.refs.embedContainer, options).then(function (element) {
          _this2.setState({
            isLoading: false
          });

          if (onLoad) {
            onLoad(element);
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterTimelineEmbed, aborting load.');
            return;
          }

          var options = _this3.buildOptions();
          /** Append chrome options */


          options = _this3.buildChromeOptions(options);

          _this3.renderWidget(options);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterTimelineEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTimelineEmbed, "propTypes", {
  /**
       * This can be either of profile, likes, list, collection, URL, widget
       */
  sourceType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['profile', 'likes', 'list', 'collection', 'url', 'widget']).isRequired,

  /**
       * username of twitter handle as String
       */
  screenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return !props.hasOwnProperty('userId') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * UserId of twitter handle as number
       */
  userId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, function (props) {
    return !props.hasOwnProperty('screenName') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * To show list, used along with slug
       */
  ownerScreenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, used along with ownerScreenName
       */
  slug: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, unique list id
       * Also used with collections, in that case its valid collection id
       */
  id: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]), function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('ownerScreenName') && !props.hasOwnProperty('slug') || props.sourceType === 'collection';
  }),

  /**
       * To show twitter content with url.
       * Supported content includes profiles, likes, lists, and collections.
       */
  url: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'url';
  }),

  /**
       * To show custom widget
       */
  widgetId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'widget';
  }),

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
       * Automatically fit into parent container height
       */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * With dark or light theme
       */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['dark', 'light']),

  /**
       * With custom link colors. Note: Only Hex colors are supported.
       */
  linkColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * With custom border colors. Note: Only Hex colors are supported.
       */
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * Hide the header from timeline
       */
  noHeader: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the footer from timeline
       */
  noFooter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the border from timeline
       */
  noBorders: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the scrollbars
       */
  noScrollbar: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Enable Transparancy
       */
  transparent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Custom language code. Supported codes here: https://developer.twitter.com/en/docs/twitter-for-websites/twitter-for-websites-supported-languages/overview.html
       */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterShareButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterShareButton, _Component);

  function TwitterShareButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterShareButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterShareButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterShareButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterShareButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createShareButton(_this2.props.url, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterShareButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterShareButton, "propTypes", {
  /**
  * Url for sharing
  */
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
  * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterFollowButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterFollowButton, _Component);

  function TwitterFollowButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterFollowButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterFollowButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterFollowButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterFollowButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createFollowButton(_this2.props.screenName, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterFollowButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterFollowButton, "propTypes", {
  /**
       * Username of twitter user which will be followed on click
       */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterHashtagButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterHashtagButton, _Component);

  function TwitterHashtagButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterHashtagButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterHashtagButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterHashtagButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterHashtagButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createHashtagButton(_this2.props.tag, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterHashtagButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterHashtagButton, "propTypes", {
  /**
       * Tag name for hashtag button
       */
  tag: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterMentionButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMentionButton, _Component);

  function TwitterMentionButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMentionButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMentionButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMentionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMentionButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createMentionButton(_this2.props.screenName, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterMentionButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMentionButton, "propTypes", {
  /**
   * Username to which you will need to tweet
   */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterTweetEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTweetEmbed, _Component);

  function TwitterTweetEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTweetEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTweetEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTweetEmbed, [{
    key: "renderWidget",
    value: function renderWidget() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (!window.twttr) {
        console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.');
        return;
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTweet(this.props.tweetId, this.refs.embedContainer, this.props.options).then(function (element) {
          _this2.setState({
            isLoading: false
          });

          if (onLoad) {
            onLoad(element);
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          _this3.renderWidget();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterTweetEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTweetEmbed, "propTypes", {
  /**
       * Tweet id that needs to be shown
       */
  tweetId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterMomentShare =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMomentShare, _Component);

  function TwitterMomentShare(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMomentShare);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMomentShare).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMomentShare, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMomentShare, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createMoment(_this2.props.momentId, _this2.refs.shareMoment, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "shareMoment"
      }));
    }
  }]);

  return TwitterMomentShare;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMomentShare, "propTypes", {
  /**
   * id of Twitter moment to show
   */
  momentId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterDMButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterDMButton, _Component);

  function TwitterDMButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterDMButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterDMButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterDMButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterDMButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createDMButton(_this2.props.id, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterDMButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterDMButton, "propTypes", {
  /**
  * Twitter user id for DM button
  */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
  * Additional options to be added to the button
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterVideoEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterVideoEmbed, _Component);

  function TwitterVideoEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterVideoEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterVideoEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterVideoEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterVideoEmbed, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createVideo(_this2.props.id, _this2.refs.embedContainer).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterVideoEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterVideoEmbed, "propTypes", {
  /**
       * Id of video tweet.
       */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterOnAirButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterOnAirButton, _Component);

  function TwitterOnAirButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterOnAirButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterOnAirButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterOnAirButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterOnAirButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createPeriscopeOnAirButton(_this2.props.username, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterOnAirButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterOnAirButton, "propTypes", {
  /**
   * Username for which you require periscope on air button
   */
  username: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3NvY2lhbC1tZWRpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZC9HcmlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9yZXF1aXJlUHJvcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXByb3B0eXBlLWNvbmRpdGlvbmFsLXJlcXVpcmUvZGlzdC9pc1JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10d2l0dGVyLWVtYmVkL2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zY3JpcHRqcy9kaXN0L3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWFkZXJXaXRoRGl2aWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZGl2aWRlclNvY2lhbE1lZGlhIiwiZmxleEdyb3ciLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwiTGlzdCIsImNsYXNzZXMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFFdkNDLHFCQUFpQixFQUFFO0FBQ2pCQyxhQUFPLEVBQUUsTUFEUTtBQUVqQkMsZ0JBQVUsRUFBRTtBQUZLLEtBRm9CO0FBTXZDQyxzQkFBa0IsRUFBRTtBQUNsQkMsY0FBUSxFQUFFLENBRFE7QUFFbEJDLFlBQU0sRUFBRSxDQUZVO0FBR2xCQyxxQkFBZSxFQUFFLE1BSEM7QUFJbEJDLGdCQUFVLEVBQUU7QUFKTTtBQU5tQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFjQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRVksT0FBTyxDQUFDVCxpQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUN0WXpCO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNnQztBQUMzRDtBQUNJO0FBQ1g7QUFDc0I7QUFDRDtBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxzREFBc0QsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsNERBQTRELEtBQUs7QUFDakU7QUFDQTtBQUNBLEtBQUs7O0FBRUwseURBQXlELEtBQUs7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5cclxuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIFxyXG4gIGhlYWRlcldpdGhEaXZpZGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgZGl2aWRlclNvY2lhbE1lZGlhOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogMSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMFxyXG4gIH1cclxufSkpO1xyXG5cclxuY29uc3QgTGlzdCA9ICgpID0+IHtcclxuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJXaXRoRGl2aWRlcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XHJcbiAgICAgICAgICBTb2NpYWwgTWVkaWFcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlclNvY2lhbE1lZGlhfT48L2Rpdj5cclxuICAgICAgPC9kaXY+PGJyIC8+XHJcblxyXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Nn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ+XHJcbiAgICAgICAgICA8VHdpdHRlclRpbWVsaW5lRW1iZWRcclxuICAgICAgICAgICAgc291cmNlVHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICBzY3JlZW5OYW1lPVwiYWRkdXNhbWFoYW5cIlxyXG4gICAgICAgICAgICBvcHRpb25zPXt7aGVpZ2h0OiA4MDAsIHdpZHRoOiAnODB2dyd9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBtZD5cclxuICAgICAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZFxyXG4gICAgICAgICAgICBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHNjcmVlbk5hbWU9XCJJSGVscFNBTUFIQU5cIlxyXG4gICAgICAgICAgICBvcHRpb25zPXt7aGVpZ2h0OiA4MDAsIHdpZHRoOiAnODB2dyd9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gQSBncmlkIGNvbXBvbmVudCB1c2luZyB0aGUgZm9sbG93aW5nIGxpYnMgYXMgaW5zcGlyYXRpb24uXG4vL1xuLy8gRm9yIHRoZSBpbXBsZW1lbnRhdGlvbjpcbi8vIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4zL2xheW91dC9ncmlkL1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20va3Jpc3RvZmVyam9zZXBoL2ZsZXhib3hncmlkL2Jsb2IvbWFzdGVyL3NyYy9jc3MvZmxleGJveGdyaWQuY3NzXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9yb3lsZWUwNzA0L3JlYWN0LWZsZXhib3gtZ3JpZFxuLy8gLSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXJqcy5vcmcvbGF0ZXN0L2xheW91dC9pbnRyb2R1Y3Rpb25cbi8vXG4vLyBGb2xsb3cgdGhpcyBmbGV4Ym94IEd1aWRlIHRvIGJldHRlciB1bmRlcnN0YW5kIHRoZSB1bmRlcmx5aW5nIG1vZGVsOlxuLy8gLSBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9hLWd1aWRlLXRvLWZsZXhib3gvXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcmVxdWlyZVByb3BGYWN0b3J5IGZyb20gJy4uL3V0aWxzL3JlcXVpcmVQcm9wRmFjdG9yeSc7XG52YXIgU1BBQ0lOR1MgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xudmFyIEdSSURfU0laRVMgPSBbJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKGdsb2JhbFN0eWxlcywgdGhlbWUsIGJyZWFrcG9pbnQpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICBHUklEX1NJWkVTLmZvckVhY2goZnVuY3Rpb24gKHNpemUpIHtcbiAgICB2YXIga2V5ID0gXCJncmlkLVwiLmNvbmNhdChicmVha3BvaW50LCBcIi1cIikuY29uY2F0KHNpemUpO1xuXG4gICAgaWYgKHNpemUgPT09IHRydWUpIHtcbiAgICAgIC8vIEZvciB0aGUgYXV0byBsYXlvdXRpbmdcbiAgICAgIHN0eWxlc1trZXldID0ge1xuICAgICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaXplID09PSAnYXV0bycpIHtcbiAgICAgIHN0eWxlc1trZXldID0ge1xuICAgICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgICAgZmxleEdyb3c6IDAsXG4gICAgICAgIG1heFdpZHRoOiAnbm9uZSdcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBLZWVwIDcgc2lnbmlmaWNhbnQgbnVtYmVycy5cblxuXG4gICAgdmFyIHdpZHRoID0gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChzaXplIC8gMTIgKiAxMGU3KSAvIDEwZTUsIFwiJVwiKTsgLy8gQ2xvc2UgdG8gdGhlIGJvb3RzdHJhcCBpbXBsZW1lbnRhdGlvbjpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi84ZmNjYWEyNDM5ZTk3ZWM3MmE0YjdkYzQyY2NjMWY2NDk3OTBhZGIwL3Njc3MvbWl4aW5zL19ncmlkLnNjc3MjTDQxXG5cbiAgICBzdHlsZXNba2V5XSA9IHtcbiAgICAgIGZsZXhCYXNpczogd2lkdGgsXG4gICAgICBmbGV4R3JvdzogMCxcbiAgICAgIG1heFdpZHRoOiB3aWR0aFxuICAgIH07XG4gIH0pOyAvLyBObyBuZWVkIGZvciBhIG1lZGlhIHF1ZXJ5IGZvciB0aGUgZmlyc3Qgc2l6ZS5cblxuICBpZiAoYnJlYWtwb2ludCA9PT0gJ3hzJykge1xuICAgIF9leHRlbmRzKGdsb2JhbFN0eWxlcywgc3R5bGVzKTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxTdHlsZXNbdGhlbWUuYnJlYWtwb2ludHMudXAoYnJlYWtwb2ludCldID0gc3R5bGVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldCh2YWwpIHtcbiAgdmFyIGRpdiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIHBhcnNlID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gXCJcIi5jb25jYXQocGFyc2UgLyBkaXYpLmNvbmNhdChTdHJpbmcodmFsKS5yZXBsYWNlKFN0cmluZyhwYXJzZSksICcnKSB8fCAncHgnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHdXR0ZXIodGhlbWUsIGJyZWFrcG9pbnQpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICBTUEFDSU5HUy5mb3JFYWNoKGZ1bmN0aW9uIChzcGFjaW5nKSB7XG4gICAgdmFyIHRoZW1lU3BhY2luZyA9IHRoZW1lLnNwYWNpbmcoc3BhY2luZyk7XG5cbiAgICBpZiAodGhlbWVTcGFjaW5nID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3R5bGVzW1wic3BhY2luZy1cIi5jb25jYXQoYnJlYWtwb2ludCwgXCItXCIpLmNvbmNhdChzcGFjaW5nKV0gPSB7XG4gICAgICBtYXJnaW46IFwiLVwiLmNvbmNhdChnZXRPZmZzZXQodGhlbWVTcGFjaW5nLCAyKSksXG4gICAgICB3aWR0aDogXCJjYWxjKDEwMCUgKyBcIi5jb25jYXQoZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZyksIFwiKVwiKSxcbiAgICAgICcmID4gJGl0ZW0nOiB7XG4gICAgICAgIHBhZGRpbmc6IGdldE9mZnNldCh0aGVtZVNwYWNpbmcsIDIpXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59IC8vIERlZmF1bHQgQ1NTIHZhbHVlc1xuLy8gZmxleDogJzAgMSBhdXRvJyxcbi8vIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuLy8gYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuLy8gZmxleFdyYXA6ICdub3dyYXAnLFxuLy8ganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcblxuXG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb250YWluZXI9e3RydWV9YC4gKi9cbiAgICBjb250YWluZXI6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgaXRlbT17dHJ1ZX1gLiAqL1xuICAgIGl0ZW06IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAnMCcgLy8gRm9yIGluc3RhbmNlLCBpdCdzIHVzZWZ1bCB3aGVuIHVzZWQgd2l0aCBhIGBmaWd1cmVgIGVsZW1lbnQuXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgemVyb01pbldpZHRoPXt0cnVlfWAuICovXG4gICAgemVyb01pbldpZHRoOiB7XG4gICAgICBtaW5XaWR0aDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXJlY3Rpb249XCJjb2x1bW5cImAuICovXG4gICAgJ2RpcmVjdGlvbi14cy1jb2x1bW4nOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXJlY3Rpb249XCJjb2x1bW4tcmV2ZXJzZVwiYC4gKi9cbiAgICAnZGlyZWN0aW9uLXhzLWNvbHVtbi1yZXZlcnNlJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXJlY3Rpb249XCJyb3ctcmV2ZXJzZVwiYC4gKi9cbiAgICAnZGlyZWN0aW9uLXhzLXJvdy1yZXZlcnNlJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB3cmFwPVwibm93cmFwXCJgLiAqL1xuICAgICd3cmFwLXhzLW5vd3JhcCc6IHtcbiAgICAgIGZsZXhXcmFwOiAnbm93cmFwJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB3cmFwPVwicmV2ZXJzZVwiYC4gKi9cbiAgICAnd3JhcC14cy13cmFwLXJldmVyc2UnOiB7XG4gICAgICBmbGV4V3JhcDogJ3dyYXAtcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25JdGVtcz1cImNlbnRlclwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtY2VudGVyJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcImAuICovXG4gICAgJ2FsaWduLWl0ZW1zLXhzLWZsZXgtc3RhcnQnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJgLiAqL1xuICAgICdhbGlnbi1pdGVtcy14cy1mbGV4LWVuZCc6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCJgLiAqL1xuICAgICdhbGlnbi1pdGVtcy14cy1iYXNlbGluZSc6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25Db250ZW50PVwiY2VudGVyXCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLWNlbnRlcic6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25Db250ZW50PVwiZmxleC1zdGFydFwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1mbGV4LXN0YXJ0Jzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25Db250ZW50PVwiZmxleC1lbmRcImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtZmxleC1lbmQnOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25Db250ZW50PVwic3BhY2UtYmV0d2VlblwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1zcGFjZS1iZXR3ZWVuJzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ25Db250ZW50PVwic3BhY2UtYXJvdW5kXCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLXNwYWNlLWFyb3VuZCc6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBganVzdGlmeT1cImNlbnRlclwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1jZW50ZXInOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBganVzdGlmeT1cImZsZXgtZW5kXCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLWZsZXgtZW5kJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBganVzdGlmeT1cInNwYWNlLWJldHdlZW5cImAuICovXG4gICAgJ2p1c3RpZnkteHMtc3BhY2UtYmV0d2Vlbic6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1zcGFjZS1hcm91bmQnOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1zcGFjZS1ldmVubHknOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seSdcbiAgICB9XG4gIH0sIGdlbmVyYXRlR3V0dGVyKHRoZW1lLCAneHMnKSwgdGhlbWUuYnJlYWtwb2ludHMua2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICAvLyBVc2Ugc2lkZSBlZmZlY3Qgb3ZlciBpbW11dGFiaWxpdHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICBnZW5lcmF0ZUdyaWQoYWNjdW11bGF0b3IsIHRoZW1lLCBrZXkpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwge30pKTtcbn07XG52YXIgR3JpZCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEdyaWQocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduQ29udGVudCA9IHByb3BzLmFsaWduQ29udGVudCxcbiAgICAgIGFsaWduQ29udGVudCA9IF9wcm9wcyRhbGlnbkNvbnRlbnQgPT09IHZvaWQgMCA/ICdzdHJldGNoJyA6IF9wcm9wcyRhbGlnbkNvbnRlbnQsXG4gICAgICBfcHJvcHMkYWxpZ25JdGVtcyA9IHByb3BzLmFsaWduSXRlbXMsXG4gICAgICBhbGlnbkl0ZW1zID0gX3Byb3BzJGFsaWduSXRlbXMgPT09IHZvaWQgMCA/ICdzdHJldGNoJyA6IF9wcm9wcyRhbGlnbkl0ZW1zLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVQcm9wID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBjb250YWluZXIgPSBfcHJvcHMkY29udGFpbmVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjb250YWluZXIsXG4gICAgICBfcHJvcHMkZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3Byb3BzJGRpcmVjdGlvbiA9PT0gdm9pZCAwID8gJ3JvdycgOiBfcHJvcHMkZGlyZWN0aW9uLFxuICAgICAgX3Byb3BzJGl0ZW0gPSBwcm9wcy5pdGVtLFxuICAgICAgaXRlbSA9IF9wcm9wcyRpdGVtID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpdGVtLFxuICAgICAgX3Byb3BzJGp1c3RpZnkgPSBwcm9wcy5qdXN0aWZ5LFxuICAgICAganVzdGlmeSA9IF9wcm9wcyRqdXN0aWZ5ID09PSB2b2lkIDAgPyAnZmxleC1zdGFydCcgOiBfcHJvcHMkanVzdGlmeSxcbiAgICAgIF9wcm9wcyRsZyA9IHByb3BzLmxnLFxuICAgICAgbGcgPSBfcHJvcHMkbGcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGxnLFxuICAgICAgX3Byb3BzJG1kID0gcHJvcHMubWQsXG4gICAgICBtZCA9IF9wcm9wcyRtZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbWQsXG4gICAgICBfcHJvcHMkc20gPSBwcm9wcy5zbSxcbiAgICAgIHNtID0gX3Byb3BzJHNtID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzbSxcbiAgICAgIF9wcm9wcyRzcGFjaW5nID0gcHJvcHMuc3BhY2luZyxcbiAgICAgIHNwYWNpbmcgPSBfcHJvcHMkc3BhY2luZyA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRzcGFjaW5nLFxuICAgICAgX3Byb3BzJHdyYXAgPSBwcm9wcy53cmFwLFxuICAgICAgd3JhcCA9IF9wcm9wcyR3cmFwID09PSB2b2lkIDAgPyAnd3JhcCcgOiBfcHJvcHMkd3JhcCxcbiAgICAgIF9wcm9wcyR4bCA9IHByb3BzLnhsLFxuICAgICAgeGwgPSBfcHJvcHMkeGwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHhsLFxuICAgICAgX3Byb3BzJHhzID0gcHJvcHMueHMsXG4gICAgICB4cyA9IF9wcm9wcyR4cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkeHMsXG4gICAgICBfcHJvcHMkemVyb01pbldpZHRoID0gcHJvcHMuemVyb01pbldpZHRoLFxuICAgICAgemVyb01pbldpZHRoID0gX3Byb3BzJHplcm9NaW5XaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkemVyb01pbldpZHRoLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsaWduQ29udGVudFwiLCBcImFsaWduSXRlbXNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiY29udGFpbmVyXCIsIFwiZGlyZWN0aW9uXCIsIFwiaXRlbVwiLCBcImp1c3RpZnlcIiwgXCJsZ1wiLCBcIm1kXCIsIFwic21cIiwgXCJzcGFjaW5nXCIsIFwid3JhcFwiLCBcInhsXCIsIFwieHNcIiwgXCJ6ZXJvTWluV2lkdGhcIl0pO1xuXG4gIHZhciBjbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lUHJvcCwgY29udGFpbmVyICYmIFtjbGFzc2VzLmNvbnRhaW5lciwgc3BhY2luZyAhPT0gMCAmJiBjbGFzc2VzW1wic3BhY2luZy14cy1cIi5jb25jYXQoU3RyaW5nKHNwYWNpbmcpKV1dLCBpdGVtICYmIGNsYXNzZXMuaXRlbSwgemVyb01pbldpZHRoICYmIGNsYXNzZXMuemVyb01pbldpZHRoLCBkaXJlY3Rpb24gIT09ICdyb3cnICYmIGNsYXNzZXNbXCJkaXJlY3Rpb24teHMtXCIuY29uY2F0KFN0cmluZyhkaXJlY3Rpb24pKV0sIHdyYXAgIT09ICd3cmFwJyAmJiBjbGFzc2VzW1wid3JhcC14cy1cIi5jb25jYXQoU3RyaW5nKHdyYXApKV0sIGFsaWduSXRlbXMgIT09ICdzdHJldGNoJyAmJiBjbGFzc2VzW1wiYWxpZ24taXRlbXMteHMtXCIuY29uY2F0KFN0cmluZyhhbGlnbkl0ZW1zKSldLCBhbGlnbkNvbnRlbnQgIT09ICdzdHJldGNoJyAmJiBjbGFzc2VzW1wiYWxpZ24tY29udGVudC14cy1cIi5jb25jYXQoU3RyaW5nKGFsaWduQ29udGVudCkpXSwganVzdGlmeSAhPT0gJ2ZsZXgtc3RhcnQnICYmIGNsYXNzZXNbXCJqdXN0aWZ5LXhzLVwiLmNvbmNhdChTdHJpbmcoanVzdGlmeSkpXSwgeHMgIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLXhzLVwiLmNvbmNhdChTdHJpbmcoeHMpKV0sIHNtICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC1zbS1cIi5jb25jYXQoU3RyaW5nKHNtKSldLCBtZCAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQtbWQtXCIuY29uY2F0KFN0cmluZyhtZCkpXSwgbGcgIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLWxnLVwiLmNvbmNhdChTdHJpbmcobGcpKV0sIHhsICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC14bC1cIi5jb25jYXQoU3RyaW5nKHhsKSldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEdyaWQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGFsaWduLWNvbnRlbnRgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBhbGlnbkNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0cmV0Y2gnLCAnY2VudGVyJywgJ2ZsZXgtc3RhcnQnLCAnZmxleC1lbmQnLCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1pdGVtc2Agc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGFsaWduSXRlbXM6IFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJywgJ2ZsZXgtZW5kJywgJ3N0cmV0Y2gnLCAnYmFzZWxpbmUnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIHRoZSBmbGV4ICpjb250YWluZXIqIGJlaGF2aW9yLlxuICAgKiBZb3Ugc2hvdWxkIGJlIHdyYXBwaW5nICppdGVtcyogd2l0aCBhICpjb250YWluZXIqLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQgaXMgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ3Jvdy1yZXZlcnNlJywgJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSB0aGUgZmxleCAqaXRlbSogYmVoYXZpb3IuXG4gICAqIFlvdSBzaG91bGQgYmUgd3JhcHBpbmcgKml0ZW1zKiB3aXRoIGEgKmNvbnRhaW5lciouXG4gICAqL1xuICBpdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGp1c3RpZnktY29udGVudGAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBqdXN0aWZ5OiBQcm9wVHlwZXMub25lT2YoWydmbGV4LXN0YXJ0JywgJ2NlbnRlcicsICdmbGV4LWVuZCcsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCcsICdzcGFjZS1ldmVubHknXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYGxnYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKi9cbiAgbGc6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBtZGAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICovXG4gIG1kOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgc21gIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMgaWYgbm90IG92ZXJyaWRkZW4uXG4gICAqL1xuICBzbTogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHR5cGUgYGl0ZW1gIGNvbXBvbmVudC5cbiAgICogSXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHR5cGUgYGNvbnRhaW5lcmAgY29tcG9uZW50LlxuICAgKi9cbiAgc3BhY2luZzogUHJvcFR5cGVzLm9uZU9mKFNQQUNJTkdTKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGZsZXgtd3JhcGAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIHdyYXA6IFByb3BUeXBlcy5vbmVPZihbJ25vd3JhcCcsICd3cmFwJywgJ3dyYXAtcmV2ZXJzZSddKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgeGxgIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMuXG4gICAqL1xuICB4bDogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgdGhlIHNjcmVlbiBzaXplcyB3aXRoIHRoZSBsb3dlc3QgcHJpb3JpdHkuXG4gICAqL1xuICB4czogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaXQgc2V0cyBgbWluLXdpZHRoOiAwYCBvbiB0aGUgaXRlbS5cbiAgICogUmVmZXIgdG8gdGhlIGxpbWl0YXRpb25zIHNlY3Rpb24gb2YgdGhlIGRvY3VtZW50YXRpb24gdG8gYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHVzZSBjYXNlLlxuICAgKi9cbiAgemVyb01pbldpZHRoOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbnZhciBTdHlsZWRHcmlkID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUdyaWQnXG59KShHcmlkKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHJlcXVpcmVQcm9wID0gcmVxdWlyZVByb3BGYWN0b3J5KCdHcmlkJyk7XG4gIFN0eWxlZEdyaWQucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIFN0eWxlZEdyaWQucHJvcFR5cGVzLCB7XG4gICAgYWxpZ25Db250ZW50OiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgYWxpZ25JdGVtczogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGRpcmVjdGlvbjogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGp1c3RpZnk6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBsZzogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICBtZDogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICBzbTogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICBzcGFjaW5nOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgd3JhcDogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIHhzOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIHplcm9NaW5XaWR0aDogcmVxdWlyZVByb3AoJ2l0ZW0nKVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkR3JpZDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9HcmlkJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkyXCJgLiAqL1xuICAgIGJvZHkyOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkxXCJgLiAqL1xuICAgIGJvZHkxOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNhcHRpb25cImAuICovXG4gICAgY2FwdGlvbjogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJ1dHRvblwiYC4gKi9cbiAgICBidXR0b246IHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgxXCJgLiAqL1xuICAgIGgxOiB0aGVtZS50eXBvZ3JhcGh5LmgxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgyXCJgLiAqL1xuICAgIGgyOiB0aGVtZS50eXBvZ3JhcGh5LmgyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgzXCJgLiAqL1xuICAgIGgzOiB0aGVtZS50eXBvZ3JhcGh5LmgzLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg0XCJgLiAqL1xuICAgIGg0OiB0aGVtZS50eXBvZ3JhcGh5Lmg0LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg1XCJgLiAqL1xuICAgIGg1OiB0aGVtZS50eXBvZ3JhcGh5Lmg1LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg2XCJgLiAqL1xuICAgIGg2OiB0aGVtZS50eXBvZ3JhcGh5Lmg2LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMVwiYC4gKi9cbiAgICBzdWJ0aXRsZTE6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMlwiYC4gKi9cbiAgICBzdWJ0aXRsZTI6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm92ZXJsaW5lXCJgLiAqL1xuICAgIG92ZXJsaW5lOiB0aGVtZS50eXBvZ3JhcGh5Lm92ZXJsaW5lLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInNyT25seVwiYC4gT25seSBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzLiAqL1xuICAgIHNyT25seToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImxlZnRcImAuICovXG4gICAgYWxpZ25MZWZ0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImNlbnRlclwiYC4gKi9cbiAgICBhbGlnbkNlbnRlcjoge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImp1c3RpZnlcImAuICovXG4gICAgYWxpZ25KdXN0aWZ5OiB7XG4gICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBub3dyYXA9e3RydWV9YC4gKi9cbiAgICBub1dyYXA6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGd1dHRlckJvdHRvbT17dHJ1ZX1gLiAqL1xuICAgIGd1dHRlckJvdHRvbToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMC4zNWVtJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwYXJhZ3JhcGg9e3RydWV9YC4gKi9cbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTZcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIGNvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFByaW1hcnlcImAuICovXG4gICAgY29sb3JUZXh0UHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclRleHRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNwbGF5PVwiaW5saW5lXCJgLiAqL1xuICAgIGRpc3BsYXlJbmxpbmU6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc3BsYXk9XCJibG9ja1wiYC4gKi9cbiAgICBkaXNwbGF5QmxvY2s6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG4gIH07XG59O1xudmFyIGRlZmF1bHRWYXJpYW50TWFwcGluZyA9IHtcbiAgaDE6ICdoMScsXG4gIGgyOiAnaDInLFxuICBoMzogJ2gzJyxcbiAgaDQ6ICdoNCcsXG4gIGg1OiAnaDUnLFxuICBoNjogJ2g2JyxcbiAgc3VidGl0bGUxOiAnaDYnLFxuICBzdWJ0aXRsZTI6ICdoNicsXG4gIGJvZHkxOiAncCcsXG4gIGJvZHkyOiAncCdcbn07XG52YXIgVHlwb2dyYXBoeSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFR5cG9ncmFwaHkocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGFsaWduLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnaW5pdGlhbCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzcGxheSA9IHByb3BzLmRpc3BsYXksXG4gICAgICBkaXNwbGF5ID0gX3Byb3BzJGRpc3BsYXkgPT09IHZvaWQgMCA/ICdpbml0aWFsJyA6IF9wcm9wcyRkaXNwbGF5LFxuICAgICAgX3Byb3BzJGd1dHRlckJvdHRvbSA9IHByb3BzLmd1dHRlckJvdHRvbSxcbiAgICAgIGd1dHRlckJvdHRvbSA9IF9wcm9wcyRndXR0ZXJCb3R0b20gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGd1dHRlckJvdHRvbSxcbiAgICAgIF9wcm9wcyRub1dyYXAgPSBwcm9wcy5ub1dyYXAsXG4gICAgICBub1dyYXAgPSBfcHJvcHMkbm9XcmFwID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRub1dyYXAsXG4gICAgICBfcHJvcHMkcGFyYWdyYXBoID0gcHJvcHMucGFyYWdyYXBoLFxuICAgICAgcGFyYWdyYXBoID0gX3Byb3BzJHBhcmFncmFwaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkcGFyYWdyYXBoLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnYm9keTEnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBfcHJvcHMkdmFyaWFudE1hcHBpbmcgPSBwcm9wcy52YXJpYW50TWFwcGluZyxcbiAgICAgIHZhcmlhbnRNYXBwaW5nID0gX3Byb3BzJHZhcmlhbnRNYXBwaW5nID09PSB2b2lkIDAgPyBkZWZhdWx0VmFyaWFudE1hcHBpbmcgOiBfcHJvcHMkdmFyaWFudE1hcHBpbmcsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNwbGF5XCIsIFwiZ3V0dGVyQm90dG9tXCIsIFwibm9XcmFwXCIsIFwicGFyYWdyYXBoXCIsIFwidmFyaWFudFwiLCBcInZhcmlhbnRNYXBwaW5nXCJdKTtcblxuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50IHx8IChwYXJhZ3JhcGggPyAncCcgOiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XSB8fCBkZWZhdWx0VmFyaWFudE1hcHBpbmdbdmFyaWFudF0pIHx8ICdzcGFuJztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbdmFyaWFudF0sIGNvbG9yICE9PSAnaW5pdGlhbCcgJiYgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIG5vV3JhcCAmJiBjbGFzc2VzLm5vV3JhcCwgZ3V0dGVyQm90dG9tICYmIGNsYXNzZXMuZ3V0dGVyQm90dG9tLCBwYXJhZ3JhcGggJiYgY2xhc3Nlcy5wYXJhZ3JhcGgsIGFsaWduICE9PSAnaW5oZXJpdCcgJiYgY2xhc3Nlc1tcImFsaWduXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKV0sIGRpc3BsYXkgIT09ICdpbml0aWFsJyAmJiBjbGFzc2VzW1wiZGlzcGxheVwiLmNvbmNhdChjYXBpdGFsaXplKGRpc3BsYXkpKV0pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFR5cG9ncmFwaHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB0ZXh0LWFsaWduIG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnaW5pdGlhbCcsICdpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3RleHRQcmltYXJ5JywgJ3RleHRTZWNvbmRhcnknLCAnZXJyb3InXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICogT3ZlcnJpZGVzIHRoZSBiZWhhdmlvciBvZiB0aGUgYHZhcmlhbnRNYXBwaW5nYCBwcm9wLlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXNwbGF5IHR5cGVcbiAgICovXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbJ2luaXRpYWwnLCAnYmxvY2snLCAnaW5saW5lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBndXR0ZXJCb3R0b206IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgbm90IHdyYXAsIGJ1dCBpbnN0ZWFkIHdpbGwgdHJ1bmNhdGUgd2l0aCBhIHRleHQgb3ZlcmZsb3cgZWxsaXBzaXMuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0ZXh0IG92ZXJmbG93IGNhbiBvbmx5IGhhcHBlbiB3aXRoIGJsb2NrIG9yIGlubGluZS1ibG9jayBsZXZlbCBlbGVtZW50c1xuICAgKiAodGhlIGVsZW1lbnQgbmVlZHMgdG8gaGF2ZSBhIHdpZHRoIGluIG9yZGVyIHRvIG92ZXJmbG93KS5cbiAgICovXG4gIG5vV3JhcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBoYXZlIGEgYm90dG9tIG1hcmdpbi5cbiAgICovXG4gIHBhcmFncmFwaDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIHRoZW1lIHR5cG9ncmFwaHkgc3R5bGVzLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZScsICdzck9ubHknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCBtYXBzIHRoZSB2YXJpYW50IHByb3AgdG8gYSByYW5nZSBvZiBkaWZmZXJlbnQgSFRNTCBlbGVtZW50IHR5cGVzLlxuICAgKiBGb3IgaW5zdGFuY2UsIHN1YnRpdGxlMSB0byBgPGg2PmAuXG4gICAqIElmIHlvdSB3aXNoIHRvIGNoYW5nZSB0aGF0IG1hcHBpbmcsIHlvdSBjYW4gcHJvdmlkZSB5b3VyIG93bi5cbiAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiB1c2UgdGhlIGBjb21wb25lbnRgIHByb3AuXG4gICAqL1xuICB2YXJpYW50TWFwcGluZzogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUeXBvZ3JhcGh5J1xufSkoVHlwb2dyYXBoeSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHlwb2dyYXBoeSc7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZVByb3BGYWN0b3J5KGNvbXBvbmVudE5hbWVJbkVycm9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICB2YXIgcmVxdWlyZVByb3AgPSBmdW5jdGlvbiByZXF1aXJlUHJvcChyZXF1aXJlZFByb3ApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJyAmJiAhcHJvcHNbcmVxdWlyZWRQcm9wXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIHByb3AgYFwiLmNvbmNhdChwcm9wRnVsbE5hbWVTYWZlLCBcImAgb2YgXCIpICsgXCJgXCIuY29uY2F0KGNvbXBvbmVudE5hbWVJbkVycm9yLCBcImAgbXVzdCBiZSB1c2VkIG9uIGBcIikuY29uY2F0KHJlcXVpcmVkUHJvcCwgXCJgLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHJlcXVpcmVQcm9wO1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO3ZhciBWQUxJREFUT1JfQVJHX0VSUk9SX01FU1NBR0U9J1RoZSB0eXBlVmFsaWRhdG9yIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbiB3aXRoIHRoZSBzaWduYXR1cmUgZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKS4nLE1FU1NBR0VfQVJHX0VSUk9SX01FU1NBR0U9J1RoZSBlcnJvciBtZXNzYWdlIGlzIG9wdGlvbmFsLCBidXQgbXVzdCBiZSBhIHN0cmluZyBpZiBwcm92aWRlZC4nLHByb3BJc1JlcXVpcmVkPWZ1bmN0aW9uIHByb3BJc1JlcXVpcmVkKGEsYixjLGQpe2lmKCdib29sZWFuJz09dHlwZW9mIGEpcmV0dXJuIGE7cmV0dXJuJ2Z1bmN0aW9uJz09dHlwZW9mIGE/YShiLGMsZCk6ISghMCE9PSEhYSkmJiEhYX0scHJvcEV4aXN0cz1mdW5jdGlvbiBwcm9wRXhpc3RzKGEsYil7cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYil9LG1pc3NpbmdQcm9wRXJyb3I9ZnVuY3Rpb24gbWlzc2luZ1Byb3BFcnJvcihhLGIsYyxkKXtyZXR1cm4gZD9uZXcgRXJyb3IoZCk6bmV3IEVycm9yKCdSZXF1aXJlZCAnK2FbYl0rJyBgJytiKydgJysoJyB3YXMgbm90IHNwZWNpZmllZCBpbiBgJytjKydgLicpKX0sZ3VhcmRBZ2FpbnN0SW52YWxpZEFyZ1R5cGVzPWZ1bmN0aW9uIGd1YXJkQWdhaW5zdEludmFsaWRBcmdUeXBlcyhhLGIpe2lmKCdmdW5jdGlvbichPXR5cGVvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoVkFMSURBVE9SX0FSR19FUlJPUl9NRVNTQUdFKTtpZighIWImJidzdHJpbmcnIT10eXBlb2YgYil0aHJvdyBuZXcgVHlwZUVycm9yKE1FU1NBR0VfQVJHX0VSUk9SX01FU1NBR0UpfSxpc1JlcXVpcmVkSWY9ZnVuY3Rpb24gaXNSZXF1aXJlZElmKGEsYixjKXtyZXR1cm4gZ3VhcmRBZ2FpbnN0SW52YWxpZEFyZ1R5cGVzKGEsYyksZnVuY3Rpb24oZCxlLGYpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGc9QXJyYXkoMzxfbGVuP19sZW4tMzowKSxfa2V5PTM7X2tleTxfbGVuO19rZXkrKylnW19rZXktM109YXJndW1lbnRzW19rZXldO3JldHVybiBwcm9wSXNSZXF1aXJlZChiLGQsZSxmKT9wcm9wRXhpc3RzKGQsZSk/YS5hcHBseSh2b2lkIDAsW2QsZSxmXS5jb25jYXQoZykpOm1pc3NpbmdQcm9wRXJyb3IoZCxlLGYsYyk6YS5hcHBseSh2b2lkIDAsW2QsZSxmXS5jb25jYXQoZykpOy8vIElzIG5vdCByZXF1aXJlZCwgc28ganVzdCBydW4gdHlwZVZhbGlkYXRvci5cbn19O2V4cG9ydHMuZGVmYXVsdD1pc1JlcXVpcmVkSWY7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUmVxdWlyZWRJZi5qcy5tYXAiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaXNSZXF1aXJlZElmIGZyb20gJ3JlYWN0LXByb3B0eXBlLWNvbmRpdGlvbmFsLXJlcXVpcmUnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ2V4ZW52JztcblxudmFyIHR3aXR0ZXJXaWRnZXRKcyA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuXG52YXIgVHdpdHRlclRpbWVsaW5lRW1iZWQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJUaW1lbGluZUVtYmVkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0dGVyVGltZWxpbmVFbWJlZChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2l0dGVyVGltZWxpbmVFbWJlZCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyVGltZWxpbmVFbWJlZCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdHRlclRpbWVsaW5lRW1iZWQsIFt7XG4gICAga2V5OiBcImJ1aWxkQ2hyb21lT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZENocm9tZU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5jaHJvbWUgPSAnJztcblxuICAgICAgaWYgKHRoaXMucHJvcHMubm9IZWFkZXIpIHtcbiAgICAgICAgb3B0aW9ucy5jaHJvbWUgPSBvcHRpb25zLmNocm9tZSArICcgbm9oZWFkZXInO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ub0Zvb3Rlcikge1xuICAgICAgICBvcHRpb25zLmNocm9tZSA9IG9wdGlvbnMuY2hyb21lICsgJyBub2Zvb3Rlcic7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm5vQm9yZGVycykge1xuICAgICAgICBvcHRpb25zLmNocm9tZSA9IG9wdGlvbnMuY2hyb21lICsgJyBub2JvcmRlcnMnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ub1Njcm9sbGJhcikge1xuICAgICAgICBvcHRpb25zLmNocm9tZSA9IG9wdGlvbnMuY2hyb21lICsgJyBub3Njcm9sbGJhcic7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIG9wdGlvbnMuY2hyb21lID0gb3B0aW9ucy5jaHJvbWUgKyAnIHRyYW5zcGFyZW50JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZE9wdGlvbnMoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMub3B0aW9ucyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSB0aGlzLnJlZnMuZW1iZWRDb250YWluZXIucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHRoZW1lOiB0aGlzLnByb3BzLnRoZW1lLFxuICAgICAgICBsaW5rQ29sb3I6IHRoaXMucHJvcHMubGlua0NvbG9yLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5wcm9wcy5ib3JkZXJDb2xvcixcbiAgICAgICAgbGFuZzogdGhpcy5wcm9wcy5sYW5nXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyV2lkZ2V0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb25Mb2FkID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG5cbiAgICAgIGlmICghdGhpcy5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlVGltZWxpbmUoe1xuICAgICAgICAgIHNvdXJjZVR5cGU6IHRoaXMucHJvcHMuc291cmNlVHlwZSxcbiAgICAgICAgICBzY3JlZW5OYW1lOiB0aGlzLnByb3BzLnNjcmVlbk5hbWUsXG4gICAgICAgICAgdXNlcklkOiB0aGlzLnByb3BzLnVzZXJJZCxcbiAgICAgICAgICBvd25lclNjcmVlbk5hbWU6IHRoaXMucHJvcHMub3duZXJTY3JlZW5OYW1lLFxuICAgICAgICAgIHNsdWc6IHRoaXMucHJvcHMuc2x1ZyxcbiAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnByb3BzLndpZGdldElkLFxuICAgICAgICAgIHVybDogdGhpcy5wcm9wcy51cmxcbiAgICAgICAgfSwgdGhpcy5yZWZzLmVtYmVkQ29udGFpbmVyLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgIG9uTG9hZChlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSByZXF1aXJlKCdzY3JpcHRqcycpO1xuXG4gICAgICAgIHNjcmlwdCh0d2l0dGVyV2lkZ2V0SnMsICd0d2l0dGVyLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghd2luZG93LnR3dHRyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJUaW1lbGluZUVtYmVkLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBvcHRpb25zID0gX3RoaXMzLmJ1aWxkT3B0aW9ucygpO1xuICAgICAgICAgIC8qKiBBcHBlbmQgY2hyb21lIG9wdGlvbnMgKi9cblxuXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzMy5idWlsZENocm9tZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgICBfdGhpczMucmVuZGVyV2lkZ2V0KG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmlzTW91bnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5pc0xvYWRpbmc7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGlzTG9hZGluZyAmJiBwbGFjZWhvbGRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJlbWJlZENvbnRhaW5lclwiXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFR3aXR0ZXJUaW1lbGluZUVtYmVkO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdHRlclRpbWVsaW5lRW1iZWQsIFwicHJvcFR5cGVzXCIsIHtcbiAgLyoqXG4gICAgICAgKiBUaGlzIGNhbiBiZSBlaXRoZXIgb2YgcHJvZmlsZSwgbGlrZXMsIGxpc3QsIGNvbGxlY3Rpb24sIFVSTCwgd2lkZ2V0XG4gICAgICAgKi9cbiAgc291cmNlVHlwZTogUHJvcFR5cGVzLm9uZU9mKFsncHJvZmlsZScsICdsaWtlcycsICdsaXN0JywgJ2NvbGxlY3Rpb24nLCAndXJsJywgJ3dpZGdldCddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgICAgICogdXNlcm5hbWUgb2YgdHdpdHRlciBoYW5kbGUgYXMgU3RyaW5nXG4gICAgICAgKi9cbiAgc2NyZWVuTmFtZTogaXNSZXF1aXJlZElmKFByb3BUeXBlcy5zdHJpbmcsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiAhcHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZXJJZCcpICYmIChwcm9wcy5zb3VyY2VUeXBlID09PSAncHJvZmlsZScgfHwgcHJvcHMuc291cmNlVHlwZSA9PT0gJ2xpa2VzJyk7XG4gIH0pLFxuXG4gIC8qKlxuICAgICAgICogVXNlcklkIG9mIHR3aXR0ZXIgaGFuZGxlIGFzIG51bWJlclxuICAgICAgICovXG4gIHVzZXJJZDogaXNSZXF1aXJlZElmKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiAhcHJvcHMuaGFzT3duUHJvcGVydHkoJ3NjcmVlbk5hbWUnKSAmJiAocHJvcHMuc291cmNlVHlwZSA9PT0gJ3Byb2ZpbGUnIHx8IHByb3BzLnNvdXJjZVR5cGUgPT09ICdsaWtlcycpO1xuICB9KSxcblxuICAvKipcbiAgICAgICAqIFRvIHNob3cgbGlzdCwgdXNlZCBhbG9uZyB3aXRoIHNsdWdcbiAgICAgICAqL1xuICBvd25lclNjcmVlbk5hbWU6IGlzUmVxdWlyZWRJZihQcm9wVHlwZXMuc3RyaW5nLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuc291cmNlVHlwZSA9PT0gJ2xpc3QnICYmICFwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaWQnKTtcbiAgfSksXG5cbiAgLyoqXG4gICAgICAgKiBUbyBzaG93IGxpc3QsIHVzZWQgYWxvbmcgd2l0aCBvd25lclNjcmVlbk5hbWVcbiAgICAgICAqL1xuICBzbHVnOiBpc1JlcXVpcmVkSWYoUHJvcFR5cGVzLnN0cmluZywgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnNvdXJjZVR5cGUgPT09ICdsaXN0JyAmJiAhcHJvcHMuaGFzT3duUHJvcGVydHkoJ2lkJyk7XG4gIH0pLFxuXG4gIC8qKlxuICAgICAgICogVG8gc2hvdyBsaXN0LCB1bmlxdWUgbGlzdCBpZFxuICAgICAgICogQWxzbyB1c2VkIHdpdGggY29sbGVjdGlvbnMsIGluIHRoYXQgY2FzZSBpdHMgdmFsaWQgY29sbGVjdGlvbiBpZFxuICAgICAgICovXG4gIGlkOiBpc1JlcXVpcmVkSWYoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuc291cmNlVHlwZSA9PT0gJ2xpc3QnICYmICFwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnb3duZXJTY3JlZW5OYW1lJykgJiYgIXByb3BzLmhhc093blByb3BlcnR5KCdzbHVnJykgfHwgcHJvcHMuc291cmNlVHlwZSA9PT0gJ2NvbGxlY3Rpb24nO1xuICB9KSxcblxuICAvKipcbiAgICAgICAqIFRvIHNob3cgdHdpdHRlciBjb250ZW50IHdpdGggdXJsLlxuICAgICAgICogU3VwcG9ydGVkIGNvbnRlbnQgaW5jbHVkZXMgcHJvZmlsZXMsIGxpa2VzLCBsaXN0cywgYW5kIGNvbGxlY3Rpb25zLlxuICAgICAgICovXG4gIHVybDogaXNSZXF1aXJlZElmKFByb3BUeXBlcy5zdHJpbmcsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5zb3VyY2VUeXBlID09PSAndXJsJztcbiAgfSksXG5cbiAgLyoqXG4gICAgICAgKiBUbyBzaG93IGN1c3RvbSB3aWRnZXRcbiAgICAgICAqL1xuICB3aWRnZXRJZDogaXNSZXF1aXJlZElmKFByb3BUeXBlcy5zdHJpbmcsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5zb3VyY2VUeXBlID09PSAnd2lkZ2V0JztcbiAgfSksXG5cbiAgLyoqXG4gICAgICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0d2l0dGVyIHdpZGdldCBwbHVnaW5cbiAgICAgICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgICAgICogQXV0b21hdGljYWxseSBmaXQgaW50byBwYXJlbnQgY29udGFpbmVyIGhlaWdodFxuICAgICAgICovXG4gIGF1dG9IZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgICAgICogV2l0aCBkYXJrIG9yIGxpZ2h0IHRoZW1lXG4gICAgICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbJ2RhcmsnLCAnbGlnaHQnXSksXG5cbiAgLyoqXG4gICAgICAgKiBXaXRoIGN1c3RvbSBsaW5rIGNvbG9ycy4gTm90ZTogT25seSBIZXggY29sb3JzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICAgKi9cbiAgbGlua0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgICAgICogV2l0aCBjdXN0b20gYm9yZGVyIGNvbG9ycy4gTm90ZTogT25seSBIZXggY29sb3JzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICAgKi9cbiAgYm9yZGVyQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAgICAgKiBIaWRlIHRoZSBoZWFkZXIgZnJvbSB0aW1lbGluZVxuICAgICAgICovXG4gIG5vSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICAgICAqIEhpZGUgdGhlIGZvb3RlciBmcm9tIHRpbWVsaW5lXG4gICAgICAgKi9cbiAgbm9Gb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgICAgICogSGlkZSB0aGUgYm9yZGVyIGZyb20gdGltZWxpbmVcbiAgICAgICAqL1xuICBub0JvcmRlcnM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgICAgICogSGlkZSB0aGUgc2Nyb2xsYmFyc1xuICAgICAgICovXG4gIG5vU2Nyb2xsYmFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICAgICAqIEVuYWJsZSBUcmFuc3BhcmFuY3lcbiAgICAgICAqL1xuICB0cmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAgICAgKiBDdXN0b20gbGFuZ3VhZ2UgY29kZS4gU3VwcG9ydGVkIGNvZGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVyLnR3aXR0ZXIuY29tL2VuL2RvY3MvdHdpdHRlci1mb3Itd2Vic2l0ZXMvdHdpdHRlci1mb3Itd2Vic2l0ZXMtc3VwcG9ydGVkLWxhbmd1YWdlcy9vdmVydmlldy5odG1sXG4gICAgICAgKi9cbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgd2hpbGUgdHdlZXQgaXMgbG9hZGluZ1xuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgbG9hZCwgcmV0dXJuIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbnZhciBUd2l0dGVyU2hhcmVCdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJTaGFyZUJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHdpdHRlclNoYXJlQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXR0ZXJTaGFyZUJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyU2hhcmVCdXR0b24pLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFR3aXR0ZXJTaGFyZUJ1dHRvbiwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uTG9hZCA9IHRoaXMucHJvcHMub25Mb2FkO1xuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSByZXF1aXJlKCdzY3JpcHRqcycpO1xuXG4gICAgICAgIHNjcmlwdCh0d2l0dGVyV2lkZ2V0SnMsICd0d2l0dGVyLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghd2luZG93LnR3dHRyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJTaGFyZUJ1dHRvbiwgYWJvcnRpbmcgbG9hZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmNyZWF0ZVNoYXJlQnV0dG9uKF90aGlzMi5wcm9wcy51cmwsIF90aGlzMi5yZWZzLmVtYmVkQ29udGFpbmVyLCBfdGhpczIucHJvcHMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgIG9uTG9hZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmlzTW91bnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5pc0xvYWRpbmc7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGlzTG9hZGluZyAmJiBwbGFjZWhvbGRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJlbWJlZENvbnRhaW5lclwiXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFR3aXR0ZXJTaGFyZUJ1dHRvbjtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFR3aXR0ZXJTaGFyZUJ1dHRvbiwgXCJwcm9wVHlwZXNcIiwge1xuICAvKipcbiAgKiBVcmwgZm9yIHNoYXJpbmdcbiAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICogQWRkaXRpb25hbCBvcHRpb25zIGZvciBvdmVycmlkaW5nIGNvbmZpZy4gRGV0YWlscyBhdCA6IGh0dHBzOi8vZGV2LnR3aXR0ZXIuY29tL3dlYi90d2VldC1idXR0b24vcGFyYW1ldGVyc1xuICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciB3aGlsZSB0d2VldCBpcyBsb2FkaW5nXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBsb2FkLCByZXR1cm4gaHRtbCBlbGVtZW50XG4gICAqL1xuICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jXG59KTtcblxudmFyIFR3aXR0ZXJGb2xsb3dCdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJGb2xsb3dCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFR3aXR0ZXJGb2xsb3dCdXR0b24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdpdHRlckZvbGxvd0J1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyRm9sbG93QnV0dG9uKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUd2l0dGVyRm9sbG93QnV0dG9uLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb25Mb2FkID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG5cbiAgICAgIGlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IHJlcXVpcmUoJ3NjcmlwdGpzJyk7XG5cbiAgICAgICAgc2NyaXB0KHR3aXR0ZXJXaWRnZXRKcywgJ3R3aXR0ZXItZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF3aW5kb3cudHd0dHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWx1cmUgdG8gbG9hZCB3aW5kb3cudHd0dHIgaW4gVHdpdHRlckZvbGxvd0J1dHRvbiwgYWJvcnRpbmcgbG9hZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmNyZWF0ZUZvbGxvd0J1dHRvbihfdGhpczIucHJvcHMuc2NyZWVuTmFtZSwgX3RoaXMyLnJlZnMuZW1iZWRDb250YWluZXIsIF90aGlzMi5wcm9wcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgb25Mb2FkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaXNNb3VudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpc0xvYWRpbmcgPSB0aGlzLnN0YXRlLmlzTG9hZGluZztcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaXNMb2FkaW5nICYmIHBsYWNlaG9sZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcImVtYmVkQ29udGFpbmVyXCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdHRlckZvbGxvd0J1dHRvbjtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFR3aXR0ZXJGb2xsb3dCdXR0b24sIFwicHJvcFR5cGVzXCIsIHtcbiAgLyoqXG4gICAgICAgKiBVc2VybmFtZSBvZiB0d2l0dGVyIHVzZXIgd2hpY2ggd2lsbCBiZSBmb2xsb3dlZCBvbiBjbGlja1xuICAgICAgICovXG4gIHNjcmVlbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICAgICAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhZGRlZCB0byB0aGUgYnV0dG9uXG4gICAgICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgd2hpbGUgdHdlZXQgaXMgbG9hZGluZ1xuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgbG9hZCwgcmV0dXJuIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbnZhciBUd2l0dGVySGFzaHRhZ0J1dHRvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHdpdHRlckhhc2h0YWdCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFR3aXR0ZXJIYXNodGFnQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXR0ZXJIYXNodGFnQnV0dG9uKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFR3aXR0ZXJIYXNodGFnQnV0dG9uKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUd2l0dGVySGFzaHRhZ0J1dHRvbiwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uTG9hZCA9IHRoaXMucHJvcHMub25Mb2FkO1xuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSByZXF1aXJlKCdzY3JpcHRqcycpO1xuXG4gICAgICAgIHNjcmlwdCh0d2l0dGVyV2lkZ2V0SnMsICd0d2l0dGVyLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghd2luZG93LnR3dHRyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJIYXNodGFnQnV0dG9uLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMyLmlzTW91bnRDYW5jZWxlZCkge1xuICAgICAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlSGFzaHRhZ0J1dHRvbihfdGhpczIucHJvcHMudGFnLCBfdGhpczIucmVmcy5lbWJlZENvbnRhaW5lciwgX3RoaXMyLnByb3BzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgICAgICBvbkxvYWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5pc01vdW50Q2FuY2VsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGlzTG9hZGluZyA9IHRoaXMuc3RhdGUuaXNMb2FkaW5nO1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpc0xvYWRpbmcgJiYgcGxhY2Vob2xkZXIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IFwiZW1iZWRDb250YWluZXJcIlxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUd2l0dGVySGFzaHRhZ0J1dHRvbjtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFR3aXR0ZXJIYXNodGFnQnV0dG9uLCBcInByb3BUeXBlc1wiLCB7XG4gIC8qKlxuICAgICAgICogVGFnIG5hbWUgZm9yIGhhc2h0YWcgYnV0dG9uXG4gICAgICAgKi9cbiAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAgICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYWRkZWQgdG8gdGhlIGJ1dHRvblxuICAgICAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIHdoaWxlIHR3ZWV0IGlzIGxvYWRpbmdcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGxvYWQsIHJldHVybiBodG1sIGVsZW1lbnRcbiAgICovXG4gIG9uTG9hZDogUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG52YXIgVHdpdHRlck1lbnRpb25CdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJNZW50aW9uQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0dGVyTWVudGlvbkJ1dHRvbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2l0dGVyTWVudGlvbkJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyTWVudGlvbkJ1dHRvbikuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdHRlck1lbnRpb25CdXR0b24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvbkxvYWQgPSB0aGlzLnByb3BzLm9uTG9hZDtcblxuICAgICAgaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgICAgICB2YXIgc2NyaXB0ID0gcmVxdWlyZSgnc2NyaXB0anMnKTtcblxuICAgICAgICBzY3JpcHQodHdpdHRlcldpZGdldEpzLCAndHdpdHRlci1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXdpbmRvdy50d3R0cikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbHVyZSB0byBsb2FkIHdpbmRvdy50d3R0ciBpbiBUd2l0dGVyTWVudGlvbkJ1dHRvbiwgYWJvcnRpbmcgbG9hZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmNyZWF0ZU1lbnRpb25CdXR0b24oX3RoaXMyLnByb3BzLnNjcmVlbk5hbWUsIF90aGlzMi5yZWZzLmVtYmVkQ29udGFpbmVyLCBfdGhpczIucHJvcHMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgIG9uTG9hZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmlzTW91bnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5pc0xvYWRpbmc7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGlzTG9hZGluZyAmJiBwbGFjZWhvbGRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJlbWJlZENvbnRhaW5lclwiXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFR3aXR0ZXJNZW50aW9uQnV0dG9uO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdHRlck1lbnRpb25CdXR0b24sIFwicHJvcFR5cGVzXCIsIHtcbiAgLyoqXG4gICAqIFVzZXJuYW1lIHRvIHdoaWNoIHlvdSB3aWxsIG5lZWQgdG8gdHdlZXRcbiAgICovXG4gIHNjcmVlbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBvcHRpb25zIGZvciBvdmVycmlkaW5nIGNvbmZpZy5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIHdoaWxlIHR3ZWV0IGlzIGxvYWRpbmdcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGxvYWQsIHJldHVybiBodG1sIGVsZW1lbnRcbiAgICovXG4gIG9uTG9hZDogUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG52YXIgVHdpdHRlclR3ZWV0RW1iZWQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJUd2VldEVtYmVkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0dGVyVHdlZXRFbWJlZChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2l0dGVyVHdlZXRFbWJlZCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyVHdlZXRFbWJlZCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdHRlclR3ZWV0RW1iZWQsIFt7XG4gICAga2V5OiBcInJlbmRlcldpZGdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJXaWRnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uTG9hZCA9IHRoaXMucHJvcHMub25Mb2FkO1xuXG4gICAgICBpZiAoIXdpbmRvdy50d3R0cikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJUd2VldEVtYmVkLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlVHdlZXQodGhpcy5wcm9wcy50d2VldElkLCB0aGlzLnJlZnMuZW1iZWRDb250YWluZXIsIHRoaXMucHJvcHMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICBvbkxvYWQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgICAgICB2YXIgc2NyaXB0ID0gcmVxdWlyZSgnc2NyaXB0anMnKTtcblxuICAgICAgICBzY3JpcHQodHdpdHRlcldpZGdldEpzLCAndHdpdHRlci1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucmVuZGVyV2lkZ2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaXNNb3VudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpc0xvYWRpbmcgPSB0aGlzLnN0YXRlLmlzTG9hZGluZztcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaXNMb2FkaW5nICYmIHBsYWNlaG9sZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcImVtYmVkQ29udGFpbmVyXCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdHRlclR3ZWV0RW1iZWQ7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUd2l0dGVyVHdlZXRFbWJlZCwgXCJwcm9wVHlwZXNcIiwge1xuICAvKipcbiAgICAgICAqIFR3ZWV0IGlkIHRoYXQgbmVlZHMgdG8gYmUgc2hvd25cbiAgICAgICAqL1xuICB0d2VldElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAgICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0d2l0dGVyIHdpZGdldCBwbHVnaW5cbiAgICAgICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciB3aGlsZSB0d2VldCBpcyBsb2FkaW5nXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBsb2FkLCByZXR1cm4gaHRtbCBlbGVtZW50XG4gICAqL1xuICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jXG59KTtcblxudmFyIFR3aXR0ZXJNb21lbnRTaGFyZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHdpdHRlck1vbWVudFNoYXJlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0dGVyTW9tZW50U2hhcmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdpdHRlck1vbWVudFNoYXJlKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFR3aXR0ZXJNb21lbnRTaGFyZSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdHRlck1vbWVudFNoYXJlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb25Mb2FkID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG5cbiAgICAgIGlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IHJlcXVpcmUoJ3NjcmlwdGpzJyk7XG5cbiAgICAgICAgc2NyaXB0KHR3aXR0ZXJXaWRnZXRKcywgJ3R3aXR0ZXItZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF3aW5kb3cudHd0dHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWx1cmUgdG8gbG9hZCB3aW5kb3cudHd0dHIgaW4gVHdpdHRlck1vbWVudFNoYXJlLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMyLmlzTW91bnRDYW5jZWxlZCkge1xuICAgICAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlTW9tZW50KF90aGlzMi5wcm9wcy5tb21lbnRJZCwgX3RoaXMyLnJlZnMuc2hhcmVNb21lbnQsIF90aGlzMi5wcm9wcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgb25Mb2FkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaXNNb3VudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpc0xvYWRpbmcgPSB0aGlzLnN0YXRlLmlzTG9hZGluZztcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaXNMb2FkaW5nICYmIHBsYWNlaG9sZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcInNoYXJlTW9tZW50XCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdHRlck1vbWVudFNoYXJlO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdHRlck1vbWVudFNoYXJlLCBcInByb3BUeXBlc1wiLCB7XG4gIC8qKlxuICAgKiBpZCBvZiBUd2l0dGVyIG1vbWVudCB0byBzaG93XG4gICAqL1xuICBtb21lbnRJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIG92ZXJyaWRpbmcgY29uZmlnLlxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgd2hpbGUgdHdlZXQgaXMgbG9hZGluZ1xuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgbG9hZCwgcmV0dXJuIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbnZhciBUd2l0dGVyRE1CdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFR3aXR0ZXJETUJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHdpdHRlckRNQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXR0ZXJETUJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUd2l0dGVyRE1CdXR0b24pLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFR3aXR0ZXJETUJ1dHRvbiwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uTG9hZCA9IHRoaXMucHJvcHMub25Mb2FkO1xuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSByZXF1aXJlKCdzY3JpcHRqcycpO1xuXG4gICAgICAgIHNjcmlwdCh0d2l0dGVyV2lkZ2V0SnMsICd0d2l0dGVyLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghd2luZG93LnR3dHRyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJETUJ1dHRvbiwgYWJvcnRpbmcgbG9hZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi5pc01vdW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmNyZWF0ZURNQnV0dG9uKF90aGlzMi5wcm9wcy5pZCwgX3RoaXMyLnJlZnMuZW1iZWRDb250YWluZXIsIF90aGlzMi5wcm9wcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgb25Mb2FkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaXNNb3VudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpc0xvYWRpbmcgPSB0aGlzLnN0YXRlLmlzTG9hZGluZztcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaXNMb2FkaW5nICYmIHBsYWNlaG9sZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcImVtYmVkQ29udGFpbmVyXCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdHRlckRNQnV0dG9uO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdHRlckRNQnV0dG9uLCBcInByb3BUeXBlc1wiLCB7XG4gIC8qKlxuICAqIFR3aXR0ZXIgdXNlciBpZCBmb3IgRE0gYnV0dG9uXG4gICovXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICogQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFkZGVkIHRvIHRoZSBidXR0b25cbiAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgd2hpbGUgdHdlZXQgaXMgbG9hZGluZ1xuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgbG9hZCwgcmV0dXJuIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbnZhciBUd2l0dGVyVmlkZW9FbWJlZCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHdpdHRlclZpZGVvRW1iZWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFR3aXR0ZXJWaWRlb0VtYmVkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXR0ZXJWaWRlb0VtYmVkKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFR3aXR0ZXJWaWRlb0VtYmVkKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUd2l0dGVyVmlkZW9FbWJlZCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uTG9hZCA9IHRoaXMucHJvcHMub25Mb2FkO1xuXG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSByZXF1aXJlKCdzY3JpcHRqcycpO1xuXG4gICAgICAgIHNjcmlwdCh0d2l0dGVyV2lkZ2V0SnMsICd0d2l0dGVyLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghd2luZG93LnR3dHRyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsdXJlIHRvIGxvYWQgd2luZG93LnR3dHRyIGluIFR3aXR0ZXJWaWRlb0VtYmVkLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMyLmlzTW91bnRDYW5jZWxlZCkge1xuICAgICAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlVmlkZW8oX3RoaXMyLnByb3BzLmlkLCBfdGhpczIucmVmcy5lbWJlZENvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgIG9uTG9hZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmlzTW91bnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5pc0xvYWRpbmc7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGlzTG9hZGluZyAmJiBwbGFjZWhvbGRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJlbWJlZENvbnRhaW5lclwiXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFR3aXR0ZXJWaWRlb0VtYmVkO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdHRlclZpZGVvRW1iZWQsIFwicHJvcFR5cGVzXCIsIHtcbiAgLyoqXG4gICAgICAgKiBJZCBvZiB2aWRlbyB0d2VldC5cbiAgICAgICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciB3aGlsZSB0d2VldCBpcyBsb2FkaW5nXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBsb2FkLCByZXR1cm4gaHRtbCBlbGVtZW50XG4gICAqL1xuICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jXG59KTtcblxudmFyIFR3aXR0ZXJPbkFpckJ1dHRvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHdpdHRlck9uQWlyQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0dGVyT25BaXJCdXR0b24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdpdHRlck9uQWlyQnV0dG9uKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFR3aXR0ZXJPbkFpckJ1dHRvbikuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdHRlck9uQWlyQnV0dG9uLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb25Mb2FkID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG5cbiAgICAgIGlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IHJlcXVpcmUoJ3NjcmlwdGpzJyk7XG5cbiAgICAgICAgc2NyaXB0KHR3aXR0ZXJXaWRnZXRKcywgJ3R3aXR0ZXItZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF3aW5kb3cudHd0dHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWx1cmUgdG8gbG9hZCB3aW5kb3cudHd0dHIgaW4gVHdpdHRlck9uQWlyQnV0dG9uLCBhYm9ydGluZyBsb2FkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMyLmlzTW91bnRDYW5jZWxlZCkge1xuICAgICAgICAgICAgd2luZG93LnR3dHRyLndpZGdldHMuY3JlYXRlUGVyaXNjb3BlT25BaXJCdXR0b24oX3RoaXMyLnByb3BzLnVzZXJuYW1lLCBfdGhpczIucmVmcy5lbWJlZENvbnRhaW5lciwgX3RoaXMyLnByb3BzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgICAgICBvbkxvYWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5pc01vdW50Q2FuY2VsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGlzTG9hZGluZyA9IHRoaXMuc3RhdGUuaXNMb2FkaW5nO1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpc0xvYWRpbmcgJiYgcGxhY2Vob2xkZXIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IFwiZW1iZWRDb250YWluZXJcIlxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUd2l0dGVyT25BaXJCdXR0b247XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUd2l0dGVyT25BaXJCdXR0b24sIFwicHJvcFR5cGVzXCIsIHtcbiAgLyoqXG4gICAqIFVzZXJuYW1lIGZvciB3aGljaCB5b3UgcmVxdWlyZSBwZXJpc2NvcGUgb24gYWlyIGJ1dHRvblxuICAgKi9cbiAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBvcHRpb25zIGZvciBvdmVycmlkaW5nIGNvbmZpZy5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIHdoaWxlIHR3ZWV0IGlzIGxvYWRpbmdcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGxvYWQsIHJldHVybiBodG1sIGVsZW1lbnRcbiAgICovXG4gIG9uTG9hZDogUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG5leHBvcnQgeyBUd2l0dGVyVGltZWxpbmVFbWJlZCwgVHdpdHRlclNoYXJlQnV0dG9uLCBUd2l0dGVyRm9sbG93QnV0dG9uLCBUd2l0dGVySGFzaHRhZ0J1dHRvbiwgVHdpdHRlck1lbnRpb25CdXR0b24sIFR3aXR0ZXJUd2VldEVtYmVkLCBUd2l0dGVyTW9tZW50U2hhcmUsIFR3aXR0ZXJETUJ1dHRvbiwgVHdpdHRlclZpZGVvRW1iZWQsIFR3aXR0ZXJPbkFpckJ1dHRvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCIvKiFcbiAgKiAkc2NyaXB0LmpzIEpTIGxvYWRlciAmIGRlcGVuZGVuY3kgbWFuYWdlclxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvc2NyaXB0LmpzXG4gICogKGMpIER1c3RpbiBEaWF6IDIwMTQgfCBMaWNlbnNlIE1JVFxuICAqL1xuXG4oZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSB0aGlzW25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnJHNjcmlwdCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgICAsIHMgPSAnc3RyaW5nJ1xuICAgICwgZiA9IGZhbHNlXG4gICAgLCBwdXNoID0gJ3B1c2gnXG4gICAgLCByZWFkeVN0YXRlID0gJ3JlYWR5U3RhdGUnXG4gICAgLCBvbnJlYWR5c3RhdGVjaGFuZ2UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAgICwgbGlzdCA9IHt9XG4gICAgLCBpZHMgPSB7fVxuICAgICwgZGVsYXkgPSB7fVxuICAgICwgc2NyaXB0cyA9IHt9XG4gICAgLCBzY3JpcHRwYXRoXG4gICAgLCB1cmxBcmdzXG5cbiAgZnVuY3Rpb24gZXZlcnkoYXIsIGZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBhci5sZW5ndGg7IGkgPCBqOyArK2kpIGlmICghZm4oYXJbaV0pKSByZXR1cm4gZlxuICAgIHJldHVybiAxXG4gIH1cbiAgZnVuY3Rpb24gZWFjaChhciwgZm4pIHtcbiAgICBldmVyeShhciwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBmbihlbClcbiAgICAgIHJldHVybiAxXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uICRzY3JpcHQocGF0aHMsIGlkT3JEb25lLCBvcHREb25lKSB7XG4gICAgcGF0aHMgPSBwYXRoc1twdXNoXSA/IHBhdGhzIDogW3BhdGhzXVxuICAgIHZhciBpZE9yRG9uZUlzRG9uZSA9IGlkT3JEb25lICYmIGlkT3JEb25lLmNhbGxcbiAgICAgICwgZG9uZSA9IGlkT3JEb25lSXNEb25lID8gaWRPckRvbmUgOiBvcHREb25lXG4gICAgICAsIGlkID0gaWRPckRvbmVJc0RvbmUgPyBwYXRocy5qb2luKCcnKSA6IGlkT3JEb25lXG4gICAgICAsIHF1ZXVlID0gcGF0aHMubGVuZ3RoXG4gICAgZnVuY3Rpb24gbG9vcEZuKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmNhbGwgPyBpdGVtKCkgOiBsaXN0W2l0ZW1dXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgaWYgKCEtLXF1ZXVlKSB7XG4gICAgICAgIGxpc3RbaWRdID0gMVxuICAgICAgICBkb25lICYmIGRvbmUoKVxuICAgICAgICBmb3IgKHZhciBkc2V0IGluIGRlbGF5KSB7XG4gICAgICAgICAgZXZlcnkoZHNldC5zcGxpdCgnfCcpLCBsb29wRm4pICYmICFlYWNoKGRlbGF5W2RzZXRdLCBsb29wRm4pICYmIChkZWxheVtkc2V0XSA9IFtdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZWFjaChwYXRocywgZnVuY3Rpb24gbG9hZGluZyhwYXRoLCBmb3JjZSkge1xuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICAgICAgXG4gICAgICAgIGlmICghZm9yY2UgJiYgIS9eaHR0cHM/OlxcL1xcLy8udGVzdChwYXRoKSAmJiBzY3JpcHRwYXRoKSB7XG4gICAgICAgICAgcGF0aCA9IChwYXRoLmluZGV4T2YoJy5qcycpID09PSAtMSkgPyBzY3JpcHRwYXRoICsgcGF0aCArICcuanMnIDogc2NyaXB0cGF0aCArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzY3JpcHRzW3BhdGhdKSB7XG4gICAgICAgICAgaWYgKGlkKSBpZHNbaWRdID0gMVxuICAgICAgICAgIHJldHVybiAoc2NyaXB0c1twYXRoXSA9PSAyKSA/IGNhbGxiYWNrKCkgOiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbG9hZGluZyhwYXRoLCB0cnVlKSB9LCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0c1twYXRoXSA9IDFcbiAgICAgICAgaWYgKGlkKSBpZHNbaWRdID0gMVxuICAgICAgICBjcmVhdGUocGF0aCwgY2FsbGJhY2spXG4gICAgICB9KVxuICAgIH0sIDApXG4gICAgcmV0dXJuICRzY3JpcHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShwYXRoLCBmbikge1xuICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSwgbG9hZGVkXG4gICAgZWwub25sb2FkID0gZWwub25lcnJvciA9IGVsW29ucmVhZHlzdGF0ZWNoYW5nZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKGVsW3JlYWR5U3RhdGVdICYmICEoL15jfGxvYWRlLy50ZXN0KGVsW3JlYWR5U3RhdGVdKSkpIHx8IGxvYWRlZCkgcmV0dXJuO1xuICAgICAgZWwub25sb2FkID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IG51bGxcbiAgICAgIGxvYWRlZCA9IDFcbiAgICAgIHNjcmlwdHNbcGF0aF0gPSAyXG4gICAgICBmbigpXG4gICAgfVxuICAgIGVsLmFzeW5jID0gMVxuICAgIGVsLnNyYyA9IHVybEFyZ3MgPyBwYXRoICsgKHBhdGguaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyB1cmxBcmdzIDogcGF0aDtcbiAgICBoZWFkLmluc2VydEJlZm9yZShlbCwgaGVhZC5sYXN0Q2hpbGQpXG4gIH1cblxuICAkc2NyaXB0LmdldCA9IGNyZWF0ZVxuXG4gICRzY3JpcHQub3JkZXIgPSBmdW5jdGlvbiAoc2NyaXB0cywgaWQsIGRvbmUpIHtcbiAgICAoZnVuY3Rpb24gY2FsbGJhY2socykge1xuICAgICAgcyA9IHNjcmlwdHMuc2hpZnQoKVxuICAgICAgIXNjcmlwdHMubGVuZ3RoID8gJHNjcmlwdChzLCBpZCwgZG9uZSkgOiAkc2NyaXB0KHMsIGNhbGxiYWNrKVxuICAgIH0oKSlcbiAgfVxuXG4gICRzY3JpcHQucGF0aCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgc2NyaXB0cGF0aCA9IHBcbiAgfVxuICAkc2NyaXB0LnVybEFyZ3MgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdXJsQXJncyA9IHN0cjtcbiAgfVxuICAkc2NyaXB0LnJlYWR5ID0gZnVuY3Rpb24gKGRlcHMsIHJlYWR5LCByZXEpIHtcbiAgICBkZXBzID0gZGVwc1twdXNoXSA/IGRlcHMgOiBbZGVwc11cbiAgICB2YXIgbWlzc2luZyA9IFtdO1xuICAgICFlYWNoKGRlcHMsIGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGxpc3RbZGVwXSB8fCBtaXNzaW5nW3B1c2hdKGRlcCk7XG4gICAgfSkgJiYgZXZlcnkoZGVwcywgZnVuY3Rpb24gKGRlcCkge3JldHVybiBsaXN0W2RlcF19KSA/XG4gICAgICByZWFkeSgpIDogIWZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlbGF5W2tleV0gPSBkZWxheVtrZXldIHx8IFtdXG4gICAgICBkZWxheVtrZXldW3B1c2hdKHJlYWR5KVxuICAgICAgcmVxICYmIHJlcShtaXNzaW5nKVxuICAgIH0oZGVwcy5qb2luKCd8JykpXG4gICAgcmV0dXJuICRzY3JpcHRcbiAgfVxuXG4gICRzY3JpcHQuZG9uZSA9IGZ1bmN0aW9uIChpZE9yRG9uZSkge1xuICAgICRzY3JpcHQoW251bGxdLCBpZE9yRG9uZSlcbiAgfVxuXG4gIHJldHVybiAkc2NyaXB0XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=