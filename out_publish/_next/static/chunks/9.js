(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./components/cco/banner.js":
/*!**********************************!*\
  !*** ./components/cco/banner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ "./utils/constants.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(utils_constants__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "D:\\ADDUCS\\SAMAHAN SYSTEM DEVELOPMENT\\samahan-nextjs\\components\\cco\\banner.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    headerContainer: {
      width: '80%',
      margin: 'auto'
    },
    contentContainer: {
      width: '90%',
      margin: 'auto'
    },
    motionLogoContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    motionLogo: {
      position: 'absolute',
      left: 100,
      top: 50,
      width: 'calc(200px + 20vw)',
      zIndex: -1
    }
  };
});

var Page = function Page() {
  _s();

  // Get the data of the current list.
  var classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "row",
    spacing: 3,
    alignItems: "center",
    className: classes.headerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "".concat(utils_constants__WEBPACK_IMPORTED_MODULE_6__["cdnURL"], "/Asset%202.svg"),
    className: classes.motionLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    sm: true,
    className: classes.motionLogoContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    sm: 8,
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"],
    elevation: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h1",
    component: "h2",
    style: {
      lineHeight: '0.8em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "CAMPUS CLUBS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h1",
    component: "h2",
    style: {
      lineHeight: '0.8em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "ORGANIZATION"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 22
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle1",
    component: "h2",
    style: {
      lineHeight: '1.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Umbrella organization for all recognized student organizations in the university"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle1",
    component: "h2",
    style: {
      lineHeight: '1.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "samahan.addu.edu.ph")));
};

_s(Page, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

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

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
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
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

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
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['elevation', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Paper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var frontendURL = "https://samahan.addu.edu.ph";
var backendURL = "https://samahan-api.addu.edu.ph";
var cdnURL = "https://samahan-cdn.imfast.io";
module.exports = {
  frontendURL: frontendURL,
  backendURL: backendURL,
  cdnURL: cdnURL
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jY28vYmFubmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyaWQvR3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9HcmlkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL1BhcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UeXBvZ3JhcGh5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvcmVxdWlyZVByb3BGYWN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVhZGVyQ29udGFpbmVyIiwid2lkdGgiLCJtYXJnaW4iLCJjb250ZW50Q29udGFpbmVyIiwibW90aW9uTG9nb0NvbnRhaW5lciIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsInVwIiwibW90aW9uTG9nbyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsIlBhZ2UiLCJjbGFzc2VzIiwiY2RuVVJMIiwiUGFwZXIiLCJsaW5lSGVpZ2h0IiwiZnJvbnRlbmRVUkwiLCJiYWNrZW5kVVJMIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxtQkFBZSxFQUFFO0FBQ2ZDLFdBQUssRUFBRSxLQURRO0FBRWZDLFlBQU0sRUFBRTtBQUZPLEtBRHNCO0FBS3ZDQyxvQkFBZ0IsRUFBRTtBQUNoQkYsV0FBSyxFQUFFLEtBRFM7QUFFaEJDLFlBQU0sRUFBRTtBQUZRLEtBTHFCO0FBVXZDRSx1QkFBbUIsRUFBRTtBQUNuQkMsYUFBTyxFQUFFO0FBRFEsT0FFaEJOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGZ0IsRUFFYTtBQUM1QkYsYUFBTyxFQUFFO0FBRG1CLEtBRmIsQ0FWb0I7QUFnQnZDRyxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLFVBREE7QUFFVkMsVUFBSSxFQUFFLEdBRkk7QUFHVkMsU0FBRyxFQUFFLEVBSEs7QUFJVlYsV0FBSyxFQUFFLG9CQUpHO0FBS1ZXLFlBQU0sRUFBRSxDQUFDO0FBTEM7QUFoQjJCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXlCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBRUEsTUFBTUMsT0FBTyxHQUFHakIsU0FBUyxFQUF6QjtBQUVBLFNBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsS0FBMUI7QUFBZ0MsV0FBTyxFQUFFLENBQXpDO0FBQTRDLGNBQVUsRUFBQyxRQUF2RDtBQUFnRSxhQUFTLEVBQUVpQixPQUFPLENBQUNkLGVBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsWUFB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QUNwQkEsa0RBQU1LLFdBQVcsR0FBRyw2QkFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsaUNBQW5CO0FBQ0EsSUFBTUosTUFBTSxHQUFHLCtCQUFmO0FBRUFLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFSCxhQUFXLEVBQVhBLFdBQUY7QUFBZUMsWUFBVSxFQUFWQSxVQUFmO0FBQTJCSixRQUFNLEVBQU5BO0FBQTNCLENBQWpCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmltcG9ydCB7IGNkblVSTCB9IGZyb20gJ3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBoZWFkZXJDb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgfSxcclxuICBjb250ZW50Q29udGFpbmVyOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJ1xyXG4gIH0sXHJcbiAgXHJcbiAgbW90aW9uTG9nb0NvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdGlvbkxvZ286IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMTAwLFxyXG4gICAgdG9wOiA1MCxcclxuICAgIHdpZHRoOiAnY2FsYygyMDBweCArIDIwdncpJyxcclxuICAgIHpJbmRleDogLTFcclxuICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgPGltZyBzcmM9e2Ake2NkblVSTH0vQXNzZXQlMjAyLnN2Z2B9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3Rpb25Mb2dvfSAvPlxyXG4gICAgICA8R3JpZCBpdGVtIHNtIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3Rpb25Mb2dvQ29udGFpbmVyfT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHNtPXs4fSBjb21wb25lbnQ9e1BhcGVyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGNvbXBvbmVudD1cImgyXCIgc3R5bGU9e3sgbGluZUhlaWdodDogJzAuOGVtJyB9fT5cclxuICAgICAgICAgIENBTVBVUyBDTFVCU1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjb21wb25lbnQ9XCJoMlwiIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcwLjhlbScgfX0+XHJcbiAgICAgICAgICBPUkdBTklaQVRJT05cclxuICAgICAgICA8L1R5cG9ncmFwaHk+PGJyIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbXBvbmVudD1cImgyXCIgc3R5bGU9e3sgbGluZUhlaWdodDogJzEuNWVtJyB9fT5cclxuICAgICAgICAgIFVtYnJlbGxhIG9yZ2FuaXphdGlvbiBmb3IgYWxsIHJlY29nbml6ZWQgc3R1ZGVudCBvcmdhbml6YXRpb25zIGluIHRoZSB1bml2ZXJzaXR5XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoMlwiIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcxLjVlbScgfX0+XHJcbiAgICAgICAgICBzYW1haGFuLmFkZHUuZWR1LnBoXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIEEgZ3JpZCBjb21wb25lbnQgdXNpbmcgdGhlIGZvbGxvd2luZyBsaWJzIGFzIGluc3BpcmF0aW9uLlxuLy9cbi8vIEZvciB0aGUgaW1wbGVtZW50YXRpb246XG4vLyAtIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMy9sYXlvdXQvZ3JpZC9cbi8vIC0gaHR0cHM6Ly9naXRodWIuY29tL2tyaXN0b2Zlcmpvc2VwaC9mbGV4Ym94Z3JpZC9ibG9iL21hc3Rlci9zcmMvY3NzL2ZsZXhib3hncmlkLmNzc1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20vcm95bGVlMDcwNC9yZWFjdC1mbGV4Ym94LWdyaWRcbi8vIC0gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyanMub3JnL2xhdGVzdC9sYXlvdXQvaW50cm9kdWN0aW9uXG4vL1xuLy8gRm9sbG93IHRoaXMgZmxleGJveCBHdWlkZSB0byBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgdW5kZXJseWluZyBtb2RlbDpcbi8vIC0gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94L1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHJlcXVpcmVQcm9wRmFjdG9yeSBmcm9tICcuLi91dGlscy9yZXF1aXJlUHJvcEZhY3RvcnknO1xudmFyIFNQQUNJTkdTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbnZhciBHUklEX1NJWkVTID0gWydhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR3JpZChnbG9iYWxTdHlsZXMsIHRoZW1lLCBicmVha3BvaW50KSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgR1JJRF9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgdmFyIGtleSA9IFwiZ3JpZC1cIi5jb25jYXQoYnJlYWtwb2ludCwgXCItXCIpLmNvbmNhdChzaXplKTtcblxuICAgIGlmIChzaXplID09PSB0cnVlKSB7XG4gICAgICAvLyBGb3IgdGhlIGF1dG8gbGF5b3V0aW5nXG4gICAgICBzdHlsZXNba2V5XSA9IHtcbiAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHtcbiAgICAgICAgZmxleEJhc2lzOiAnYXV0bycsXG4gICAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgICBtYXhXaWR0aDogJ25vbmUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gS2VlcCA3IHNpZ25pZmljYW50IG51bWJlcnMuXG5cblxuICAgIHZhciB3aWR0aCA9IFwiXCIuY29uY2F0KE1hdGgucm91bmQoc2l6ZSAvIDEyICogMTBlNykgLyAxMGU1LCBcIiVcIik7IC8vIENsb3NlIHRvIHRoZSBib290c3RyYXAgaW1wbGVtZW50YXRpb246XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvOGZjY2FhMjQzOWU5N2VjNzJhNGI3ZGM0MmNjYzFmNjQ5NzkwYWRiMC9zY3NzL21peGlucy9fZ3JpZC5zY3NzI0w0MVxuXG4gICAgc3R5bGVzW2tleV0gPSB7XG4gICAgICBmbGV4QmFzaXM6IHdpZHRoLFxuICAgICAgZmxleEdyb3c6IDAsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9O1xuICB9KTsgLy8gTm8gbmVlZCBmb3IgYSBtZWRpYSBxdWVyeSBmb3IgdGhlIGZpcnN0IHNpemUuXG5cbiAgaWYgKGJyZWFrcG9pbnQgPT09ICd4cycpIHtcbiAgICBfZXh0ZW5kcyhnbG9iYWxTdHlsZXMsIHN0eWxlcyk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsU3R5bGVzW3RoZW1lLmJyZWFrcG9pbnRzLnVwKGJyZWFrcG9pbnQpXSA9IHN0eWxlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQodmFsKSB7XG4gIHZhciBkaXYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gIHZhciBwYXJzZSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHBhcnNlIC8gZGl2KS5jb25jYXQoU3RyaW5nKHZhbCkucmVwbGFjZShTdHJpbmcocGFyc2UpLCAnJykgfHwgJ3B4Jyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR3V0dGVyKHRoZW1lLCBicmVha3BvaW50KSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgU1BBQ0lOR1MuZm9yRWFjaChmdW5jdGlvbiAoc3BhY2luZykge1xuICAgIHZhciB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKHNwYWNpbmcpO1xuXG4gICAgaWYgKHRoZW1lU3BhY2luZyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0eWxlc1tcInNwYWNpbmctXCIuY29uY2F0KGJyZWFrcG9pbnQsIFwiLVwiKS5jb25jYXQoc3BhY2luZyldID0ge1xuICAgICAgbWFyZ2luOiBcIi1cIi5jb25jYXQoZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZywgMikpLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KGdldE9mZnNldCh0aGVtZVNwYWNpbmcpLCBcIilcIiksXG4gICAgICAnJiA+ICRpdGVtJzoge1xuICAgICAgICBwYWRkaW5nOiBnZXRPZmZzZXQodGhlbWVTcGFjaW5nLCAyKVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufSAvLyBEZWZhdWx0IENTUyB2YWx1ZXNcbi8vIGZsZXg6ICcwIDEgYXV0bycsXG4vLyBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbi8vIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0Jyxcbi8vIGZsZXhXcmFwOiAnbm93cmFwJyxcbi8vIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG5cblxuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29udGFpbmVyPXt0cnVlfWAuICovXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGl0ZW09e3RydWV9YC4gKi9cbiAgICBpdGVtOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogJzAnIC8vIEZvciBpbnN0YW5jZSwgaXQncyB1c2VmdWwgd2hlbiB1c2VkIHdpdGggYSBgZmlndXJlYCBlbGVtZW50LlxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHplcm9NaW5XaWR0aD17dHJ1ZX1gLiAqL1xuICAgIHplcm9NaW5XaWR0aDoge1xuICAgICAgbWluV2lkdGg6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwiY29sdW1uXCJgLiAqL1xuICAgICdkaXJlY3Rpb24teHMtY29sdW1uJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwiY29sdW1uLXJldmVyc2VcImAuICovXG4gICAgJ2RpcmVjdGlvbi14cy1jb2x1bW4tcmV2ZXJzZSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwicm93LXJldmVyc2VcImAuICovXG4gICAgJ2RpcmVjdGlvbi14cy1yb3ctcmV2ZXJzZSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgd3JhcD1cIm5vd3JhcFwiYC4gKi9cbiAgICAnd3JhcC14cy1ub3dyYXAnOiB7XG4gICAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgd3JhcD1cInJldmVyc2VcImAuICovXG4gICAgJ3dyYXAteHMtd3JhcC1yZXZlcnNlJzoge1xuICAgICAgZmxleFdyYXA6ICd3cmFwLXJldmVyc2UnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJjZW50ZXJcImAuICovXG4gICAgJ2FsaWduLWl0ZW1zLXhzLWNlbnRlcic6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJgLiAqL1xuICAgICdhbGlnbi1pdGVtcy14cy1mbGV4LXN0YXJ0Jzoge1xuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtZmxleC1lbmQnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJiYXNlbGluZVwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtYmFzZWxpbmUnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImNlbnRlclwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1jZW50ZXInOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImZsZXgtc3RhcnRcImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtZmxleC1zdGFydCc6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImZsZXgtZW5kXCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLWZsZXgtZW5kJzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cInNwYWNlLWJldHdlZW5cImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtc3BhY2UtYmV0d2Vlbic6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cInNwYWNlLWFyb3VuZFwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1zcGFjZS1hcm91bmQnOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJjZW50ZXJcImAuICovXG4gICAgJ2p1c3RpZnkteHMtY2VudGVyJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJmbGV4LWVuZFwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1mbGV4LWVuZCc6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLXNwYWNlLWJldHdlZW4nOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcImAuICovXG4gICAgJ2p1c3RpZnkteHMtc3BhY2UtYXJvdW5kJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcImAuICovXG4gICAgJ2p1c3RpZnkteHMtc3BhY2UtZXZlbmx5Jzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknXG4gICAgfVxuICB9LCBnZW5lcmF0ZUd1dHRlcih0aGVtZSwgJ3hzJyksIHRoZW1lLmJyZWFrcG9pbnRzLmtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgLy8gVXNlIHNpZGUgZWZmZWN0IG92ZXIgaW1tdXRhYmlsaXR5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAgZ2VuZXJhdGVHcmlkKGFjY3VtdWxhdG9yLCB0aGVtZSwga2V5KTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIHt9KSk7XG59O1xudmFyIEdyaWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcmlkKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhbGlnbkNvbnRlbnQgPSBwcm9wcy5hbGlnbkNvbnRlbnQsXG4gICAgICBhbGlnbkNvbnRlbnQgPSBfcHJvcHMkYWxpZ25Db250ZW50ID09PSB2b2lkIDAgPyAnc3RyZXRjaCcgOiBfcHJvcHMkYWxpZ25Db250ZW50LFxuICAgICAgX3Byb3BzJGFsaWduSXRlbXMgPSBwcm9wcy5hbGlnbkl0ZW1zLFxuICAgICAgYWxpZ25JdGVtcyA9IF9wcm9wcyRhbGlnbkl0ZW1zID09PSB2b2lkIDAgPyAnc3RyZXRjaCcgOiBfcHJvcHMkYWxpZ25JdGVtcyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgY29udGFpbmVyID0gX3Byb3BzJGNvbnRhaW5lciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIGRpcmVjdGlvbiA9IF9wcm9wcyRkaXJlY3Rpb24gPT09IHZvaWQgMCA/ICdyb3cnIDogX3Byb3BzJGRpcmVjdGlvbixcbiAgICAgIF9wcm9wcyRpdGVtID0gcHJvcHMuaXRlbSxcbiAgICAgIGl0ZW0gPSBfcHJvcHMkaXRlbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaXRlbSxcbiAgICAgIF9wcm9wcyRqdXN0aWZ5ID0gcHJvcHMuanVzdGlmeSxcbiAgICAgIGp1c3RpZnkgPSBfcHJvcHMkanVzdGlmeSA9PT0gdm9pZCAwID8gJ2ZsZXgtc3RhcnQnIDogX3Byb3BzJGp1c3RpZnksXG4gICAgICBfcHJvcHMkbGcgPSBwcm9wcy5sZyxcbiAgICAgIGxnID0gX3Byb3BzJGxnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRsZyxcbiAgICAgIF9wcm9wcyRtZCA9IHByb3BzLm1kLFxuICAgICAgbWQgPSBfcHJvcHMkbWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG1kLFxuICAgICAgX3Byb3BzJHNtID0gcHJvcHMuc20sXG4gICAgICBzbSA9IF9wcm9wcyRzbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc20sXG4gICAgICBfcHJvcHMkc3BhY2luZyA9IHByb3BzLnNwYWNpbmcsXG4gICAgICBzcGFjaW5nID0gX3Byb3BzJHNwYWNpbmcgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkc3BhY2luZyxcbiAgICAgIF9wcm9wcyR3cmFwID0gcHJvcHMud3JhcCxcbiAgICAgIHdyYXAgPSBfcHJvcHMkd3JhcCA9PT0gdm9pZCAwID8gJ3dyYXAnIDogX3Byb3BzJHdyYXAsXG4gICAgICBfcHJvcHMkeGwgPSBwcm9wcy54bCxcbiAgICAgIHhsID0gX3Byb3BzJHhsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR4bCxcbiAgICAgIF9wcm9wcyR4cyA9IHByb3BzLnhzLFxuICAgICAgeHMgPSBfcHJvcHMkeHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHhzLFxuICAgICAgX3Byb3BzJHplcm9NaW5XaWR0aCA9IHByb3BzLnplcm9NaW5XaWR0aCxcbiAgICAgIHplcm9NaW5XaWR0aCA9IF9wcm9wcyR6ZXJvTWluV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHplcm9NaW5XaWR0aCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhbGlnbkNvbnRlbnRcIiwgXCJhbGlnbkl0ZW1zXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImNvbnRhaW5lclwiLCBcImRpcmVjdGlvblwiLCBcIml0ZW1cIiwgXCJqdXN0aWZ5XCIsIFwibGdcIiwgXCJtZFwiLCBcInNtXCIsIFwic3BhY2luZ1wiLCBcIndyYXBcIiwgXCJ4bFwiLCBcInhzXCIsIFwiemVyb01pbldpZHRoXCJdKTtcblxuICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3AsIGNvbnRhaW5lciAmJiBbY2xhc3Nlcy5jb250YWluZXIsIHNwYWNpbmcgIT09IDAgJiYgY2xhc3Nlc1tcInNwYWNpbmcteHMtXCIuY29uY2F0KFN0cmluZyhzcGFjaW5nKSldXSwgaXRlbSAmJiBjbGFzc2VzLml0ZW0sIHplcm9NaW5XaWR0aCAmJiBjbGFzc2VzLnplcm9NaW5XaWR0aCwgZGlyZWN0aW9uICE9PSAncm93JyAmJiBjbGFzc2VzW1wiZGlyZWN0aW9uLXhzLVwiLmNvbmNhdChTdHJpbmcoZGlyZWN0aW9uKSldLCB3cmFwICE9PSAnd3JhcCcgJiYgY2xhc3Nlc1tcIndyYXAteHMtXCIuY29uY2F0KFN0cmluZyh3cmFwKSldLCBhbGlnbkl0ZW1zICE9PSAnc3RyZXRjaCcgJiYgY2xhc3Nlc1tcImFsaWduLWl0ZW1zLXhzLVwiLmNvbmNhdChTdHJpbmcoYWxpZ25JdGVtcykpXSwgYWxpZ25Db250ZW50ICE9PSAnc3RyZXRjaCcgJiYgY2xhc3Nlc1tcImFsaWduLWNvbnRlbnQteHMtXCIuY29uY2F0KFN0cmluZyhhbGlnbkNvbnRlbnQpKV0sIGp1c3RpZnkgIT09ICdmbGV4LXN0YXJ0JyAmJiBjbGFzc2VzW1wianVzdGlmeS14cy1cIi5jb25jYXQoU3RyaW5nKGp1c3RpZnkpKV0sIHhzICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC14cy1cIi5jb25jYXQoU3RyaW5nKHhzKSldLCBzbSAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQtc20tXCIuY29uY2F0KFN0cmluZyhzbSkpXSwgbWQgIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLW1kLVwiLmNvbmNhdChTdHJpbmcobWQpKV0sIGxnICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC1sZy1cIi5jb25jYXQoU3RyaW5nKGxnKSldLCB4bCAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQteGwtXCIuY29uY2F0KFN0cmluZyh4bCkpXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1jb250ZW50YCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAgYWxpZ25Db250ZW50OiBQcm9wVHlwZXMub25lT2YoWydzdHJldGNoJywgJ2NlbnRlcicsICdmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJ10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBhbGlnbkl0ZW1zOiBQcm9wVHlwZXMub25lT2YoWydmbGV4LXN0YXJ0JywgJ2NlbnRlcicsICdmbGV4LWVuZCcsICdzdHJldGNoJywgJ2Jhc2VsaW5lJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSB0aGUgZmxleCAqY29udGFpbmVyKiBiZWhhdmlvci5cbiAgICogWW91IHNob3VsZCBiZSB3cmFwcGluZyAqaXRlbXMqIHdpdGggYSAqY29udGFpbmVyKi5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JvdycsICdyb3ctcmV2ZXJzZScsICdjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgdGhlIGZsZXggKml0ZW0qIGJlaGF2aW9yLlxuICAgKiBZb3Ugc2hvdWxkIGJlIHdyYXBwaW5nICppdGVtcyogd2l0aCBhICpjb250YWluZXIqLlxuICAgKi9cbiAgaXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCBpcyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAganVzdGlmeTogUHJvcFR5cGVzLm9uZU9mKFsnZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1lbmQnLCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnLCAnc3BhY2UtZXZlbmx5J10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBsZ2AgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICovXG4gIGxnOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgbWRgIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMgaWYgbm90IG92ZXJyaWRkZW4uXG4gICAqL1xuICBtZDogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYHNtYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKi9cbiAgc206IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0eXBlIGBpdGVtYCBjb21wb25lbnQuXG4gICAqIEl0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSB0eXBlIGBjb250YWluZXJgIGNvbXBvbmVudC5cbiAgICovXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZihTUEFDSU5HUyksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LXdyYXBgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICB3cmFwOiBQcm9wVHlwZXMub25lT2YoWydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYHhsYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zLlxuICAgKi9cbiAgeGw6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHRoZSBzY3JlZW4gc2l6ZXMgd2l0aCB0aGUgbG93ZXN0IHByaW9yaXR5LlxuICAgKi9cbiAgeHM6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGl0IHNldHMgYG1pbi13aWR0aDogMGAgb24gdGhlIGl0ZW0uXG4gICAqIFJlZmVyIHRvIHRoZSBsaW1pdGF0aW9ucyBzZWN0aW9uIG9mIHRoZSBkb2N1bWVudGF0aW9uIHRvIGJldHRlciB1bmRlcnN0YW5kIHRoZSB1c2UgY2FzZS5cbiAgICovXG4gIHplcm9NaW5XaWR0aDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG52YXIgU3R5bGVkR3JpZCA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlHcmlkJ1xufSkoR3JpZCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciByZXF1aXJlUHJvcCA9IHJlcXVpcmVQcm9wRmFjdG9yeSgnR3JpZCcpO1xuICBTdHlsZWRHcmlkLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBTdHlsZWRHcmlkLnByb3BUeXBlcywge1xuICAgIGFsaWduQ29udGVudDogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGFsaWduSXRlbXM6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBkaXJlY3Rpb246IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBqdXN0aWZ5OiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgbGc6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgbWQ6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc206IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc3BhY2luZzogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIHdyYXA6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICB4czogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICB6ZXJvTWluV2lkdGg6IHJlcXVpcmVQcm9wKCdpdGVtJylcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEdyaWQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR3JpZCc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGVsZXZhdGlvbnMgPSB7fTtcbiAgdGhlbWUuc2hhZG93cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkb3csIGluZGV4KSB7XG4gICAgZWxldmF0aW9uc1tcImVsZXZhdGlvblwiLmNvbmNhdChpbmRleCldID0ge1xuICAgICAgYm94U2hhZG93OiBzaGFkb3dcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3gtc2hhZG93JylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3F1YXJlPXtmYWxzZX1gLiAqL1xuICAgIHJvdW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH1cbiAgfSwgZWxldmF0aW9ucyk7XG59O1xudmFyIFBhcGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUGFwZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJHNxdWFyZSA9IHByb3BzLnNxdWFyZSxcbiAgICAgIHNxdWFyZSA9IF9wcm9wcyRzcXVhcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNxdWFyZSxcbiAgICAgIF9wcm9wcyRlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb24sXG4gICAgICBlbGV2YXRpb24gPSBfcHJvcHMkZWxldmF0aW9uID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2VsZXZhdGlvbicgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwic3F1YXJlXCIsIFwiZWxldmF0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCA9PT0gJ291dGxpbmVkJyA/IGNsYXNzZXMub3V0bGluZWQgOiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildLCAhc3F1YXJlICYmIGNsYXNzZXMucm91bmRlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUGFwZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTaGFkb3cgZGVwdGgsIGNvcnJlc3BvbmRzIHRvIGBkcGAgaW4gdGhlIHNwZWMuXG4gICAqIEl0IGFjY2VwdHMgdmFsdWVzIGJldHdlZW4gMCBhbmQgMjQgaW5jbHVzaXZlLlxuICAgKi9cbiAgZWxldmF0aW9uOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMubnVtYmVyLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICAgIGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbjsgLy8gaW4gY2FzZSBgd2l0aFN0eWxlc2AgZmFpbHMgdG8gaW5qZWN0IHdlIGRvbid0IG5lZWQgdGhpcyB3YXJuaW5nXG5cbiAgICBpZiAoY2xhc3NlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxldmF0aW9uICE9IG51bGwgJiYgY2xhc3Nlc1tcImVsZXZhdGlvblwiLmNvbmNhdChlbGV2YXRpb24pXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoaXMgZWxldmF0aW9uIGBcIi5jb25jYXQoZWxldmF0aW9uLCBcImAgaXMgbm90IGltcGxlbWVudGVkLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHJvdW5kZWQgY29ybmVycyBhcmUgZGlzYWJsZWQuXG4gICAqL1xuICBzcXVhcmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydlbGV2YXRpb24nLCAnb3V0bGluZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFwZXInXG59KShQYXBlcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFwZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIG1hcmdpbjogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiYm9keTJcImAuICovXG4gICAgYm9keTI6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiYm9keTFcImAuICovXG4gICAgYm9keTE6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiY2FwdGlvblwiYC4gKi9cbiAgICBjYXB0aW9uOiB0aGVtZS50eXBvZ3JhcGh5LmNhcHRpb24sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiYnV0dG9uXCJgLiAqL1xuICAgIGJ1dHRvbjogdGhlbWUudHlwb2dyYXBoeS5idXR0b24sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDFcImAuICovXG4gICAgaDE6IHRoZW1lLnR5cG9ncmFwaHkuaDEsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDJcImAuICovXG4gICAgaDI6IHRoZW1lLnR5cG9ncmFwaHkuaDIsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDNcImAuICovXG4gICAgaDM6IHRoZW1lLnR5cG9ncmFwaHkuaDMsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDRcImAuICovXG4gICAgaDQ6IHRoZW1lLnR5cG9ncmFwaHkuaDQsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDVcImAuICovXG4gICAgaDU6IHRoZW1lLnR5cG9ncmFwaHkuaDUsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaDZcImAuICovXG4gICAgaDY6IHRoZW1lLnR5cG9ncmFwaHkuaDYsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3VidGl0bGUxXCJgLiAqL1xuICAgIHN1YnRpdGxlMTogdGhlbWUudHlwb2dyYXBoeS5zdWJ0aXRsZTEsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3VidGl0bGUyXCJgLiAqL1xuICAgIHN1YnRpdGxlMjogdGhlbWUudHlwb2dyYXBoeS5zdWJ0aXRsZTIsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3ZlcmxpbmVcImAuICovXG4gICAgb3ZlcmxpbmU6IHRoZW1lLnR5cG9ncmFwaHkub3ZlcmxpbmUsXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3JPbmx5XCJgLiBPbmx5IGFjY2Vzc2libGUgdG8gc2NyZWVuIHJlYWRlcnMuICovXG4gICAgc3JPbmx5OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwibGVmdFwiYC4gKi9cbiAgICBhbGlnbkxlZnQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwiY2VudGVyXCJgLiAqL1xuICAgIGFsaWduQ2VudGVyOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwicmlnaHRcImAuICovXG4gICAgYWxpZ25SaWdodDoge1xuICAgICAgdGV4dEFsaWduOiAncmlnaHQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwianVzdGlmeVwiYC4gKi9cbiAgICBhbGlnbkp1c3RpZnk6IHtcbiAgICAgIHRleHRBbGlnbjogJ2p1c3RpZnknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG5vd3JhcD17dHJ1ZX1gLiAqL1xuICAgIG5vV3JhcDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZ3V0dGVyQm90dG9tPXt0cnVlfWAuICovXG4gICAgZ3V0dGVyQm90dG9tOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcwLjM1ZW0nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBhcmFncmFwaD17dHJ1ZX1gLiAqL1xuICAgIHBhcmFncmFwaDoge1xuICAgICAgbWFyZ2luQm90dG9tOiAxNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgY29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclRleHRQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJgLiAqL1xuICAgIGNvbG9yVGV4dFNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJlcnJvclwiYC4gKi9cbiAgICBjb2xvckVycm9yOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc3BsYXk9XCJpbmxpbmVcImAuICovXG4gICAgZGlzcGxheUlubGluZToge1xuICAgICAgZGlzcGxheTogJ2lubGluZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzcGxheT1cImJsb2NrXCJgLiAqL1xuICAgIGRpc3BsYXlCbG9jazoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdFZhcmlhbnRNYXBwaW5nID0ge1xuICBoMTogJ2gxJyxcbiAgaDI6ICdoMicsXG4gIGgzOiAnaDMnLFxuICBoNDogJ2g0JyxcbiAgaDU6ICdoNScsXG4gIGg2OiAnaDYnLFxuICBzdWJ0aXRsZTE6ICdoNicsXG4gIHN1YnRpdGxlMjogJ2g2JyxcbiAgYm9keTE6ICdwJyxcbiAgYm9keTI6ICdwJ1xufTtcbnZhciBUeXBvZ3JhcGh5ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHlwb2dyYXBoeShwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGFsaWduID0gX3Byb3BzJGFsaWduID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkYWxpZ24sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdpbml0aWFsJyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNwbGF5ID0gcHJvcHMuZGlzcGxheSxcbiAgICAgIGRpc3BsYXkgPSBfcHJvcHMkZGlzcGxheSA9PT0gdm9pZCAwID8gJ2luaXRpYWwnIDogX3Byb3BzJGRpc3BsYXksXG4gICAgICBfcHJvcHMkZ3V0dGVyQm90dG9tID0gcHJvcHMuZ3V0dGVyQm90dG9tLFxuICAgICAgZ3V0dGVyQm90dG9tID0gX3Byb3BzJGd1dHRlckJvdHRvbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZ3V0dGVyQm90dG9tLFxuICAgICAgX3Byb3BzJG5vV3JhcCA9IHByb3BzLm5vV3JhcCxcbiAgICAgIG5vV3JhcCA9IF9wcm9wcyRub1dyYXAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG5vV3JhcCxcbiAgICAgIF9wcm9wcyRwYXJhZ3JhcGggPSBwcm9wcy5wYXJhZ3JhcGgsXG4gICAgICBwYXJhZ3JhcGggPSBfcHJvcHMkcGFyYWdyYXBoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRwYXJhZ3JhcGgsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdib2R5MScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIF9wcm9wcyR2YXJpYW50TWFwcGluZyA9IHByb3BzLnZhcmlhbnRNYXBwaW5nLFxuICAgICAgdmFyaWFudE1hcHBpbmcgPSBfcHJvcHMkdmFyaWFudE1hcHBpbmcgPT09IHZvaWQgMCA/IGRlZmF1bHRWYXJpYW50TWFwcGluZyA6IF9wcm9wcyR2YXJpYW50TWFwcGluZyxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhbGlnblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc3BsYXlcIiwgXCJndXR0ZXJCb3R0b21cIiwgXCJub1dyYXBcIiwgXCJwYXJhZ3JhcGhcIiwgXCJ2YXJpYW50XCIsIFwidmFyaWFudE1hcHBpbmdcIl0pO1xuXG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnQgfHwgKHBhcmFncmFwaCA/ICdwJyA6IHZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdIHx8IGRlZmF1bHRWYXJpYW50TWFwcGluZ1t2YXJpYW50XSkgfHwgJ3NwYW4nO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2YXJpYW50ICE9PSAnaW5oZXJpdCcgJiYgY2xhc3Nlc1t2YXJpYW50XSwgY29sb3IgIT09ICdpbml0aWFsJyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgbm9XcmFwICYmIGNsYXNzZXMubm9XcmFwLCBndXR0ZXJCb3R0b20gJiYgY2xhc3Nlcy5ndXR0ZXJCb3R0b20sIHBhcmFncmFwaCAmJiBjbGFzc2VzLnBhcmFncmFwaCwgYWxpZ24gIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiYWxpZ25cIi5jb25jYXQoY2FwaXRhbGl6ZShhbGlnbikpXSwgZGlzcGxheSAhPT0gJ2luaXRpYWwnICYmIGNsYXNzZXNbXCJkaXNwbGF5XCIuY29uY2F0KGNhcGl0YWxpemUoZGlzcGxheSkpXSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVHlwb2dyYXBoeS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHRleHQtYWxpZ24gb24gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydpbmhlcml0JywgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydpbml0aWFsJywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknLCAndGV4dFByaW1hcnknLCAndGV4dFNlY29uZGFyeScsICdlcnJvciddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKiBPdmVycmlkZXMgdGhlIGJlaGF2aW9yIG9mIHRoZSBgdmFyaWFudE1hcHBpbmdgIHByb3AuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGRpc3BsYXkgdHlwZVxuICAgKi9cbiAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFsnaW5pdGlhbCcsICdibG9jaycsICdpbmxpbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBoYXZlIGEgYm90dG9tIG1hcmdpbi5cbiAgICovXG4gIGd1dHRlckJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBub3Qgd3JhcCwgYnV0IGluc3RlYWQgd2lsbCB0cnVuY2F0ZSB3aXRoIGEgdGV4dCBvdmVyZmxvdyBlbGxpcHNpcy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRleHQgb3ZlcmZsb3cgY2FuIG9ubHkgaGFwcGVuIHdpdGggYmxvY2sgb3IgaW5saW5lLWJsb2NrIGxldmVsIGVsZW1lbnRzXG4gICAqICh0aGUgZWxlbWVudCBuZWVkcyB0byBoYXZlIGEgd2lkdGggaW4gb3JkZXIgdG8gb3ZlcmZsb3cpLlxuICAgKi9cbiAgbm9XcmFwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIGhhdmUgYSBib3R0b20gbWFyZ2luLlxuICAgKi9cbiAgcGFyYWdyYXBoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgdGhlbWUgdHlwb2dyYXBoeSBzdHlsZXMuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJywgJ3NyT25seScsICdpbmhlcml0J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IG1hcHMgdGhlIHZhcmlhbnQgcHJvcCB0byBhIHJhbmdlIG9mIGRpZmZlcmVudCBIVE1MIGVsZW1lbnQgdHlwZXMuXG4gICAqIEZvciBpbnN0YW5jZSwgc3VidGl0bGUxIHRvIGA8aDY+YC5cbiAgICogSWYgeW91IHdpc2ggdG8gY2hhbmdlIHRoYXQgbWFwcGluZywgeW91IGNhbiBwcm92aWRlIHlvdXIgb3duLlxuICAgKiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgYGNvbXBvbmVudGAgcHJvcC5cbiAgICovXG4gIHZhcmlhbnRNYXBwaW5nOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVR5cG9ncmFwaHknXG59KShUeXBvZ3JhcGh5KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UeXBvZ3JhcGh5JzsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbi8vIEl0IHNob3VsZCB0byBiZSBub3RlZCB0aGF0IHRoaXMgZnVuY3Rpb24gaXNuJ3QgZXF1aXZhbGVudCB0byBgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVgLlxuLy9cbi8vIEEgc3RyaWN0IGNhcGl0YWxpemF0aW9uIHNob3VsZCB1cHBlcmNhc2UgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgYSB0aGUgc2VudGVuY2UuXG4vLyBXZSBvbmx5IGhhbmRsZSB0aGUgZmlyc3Qgd29yZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBjYXBpdGFsaXplKHN0cmluZykgZXhwZWN0cyBhIHN0cmluZyBhcmd1bWVudC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNykpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlUHJvcEZhY3RvcnkoY29tcG9uZW50TmFtZUluRXJyb3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIHZhciByZXF1aXJlUHJvcCA9IGZ1bmN0aW9uIHJlcXVpcmVQcm9wKHJlcXVpcmVkUHJvcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnICYmICFwcm9wc1tyZXF1aXJlZFByb3BdKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgcHJvcCBgXCIuY29uY2F0KHByb3BGdWxsTmFtZVNhZmUsIFwiYCBvZiBcIikgKyBcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZUluRXJyb3IsIFwiYCBtdXN0IGJlIHVzZWQgb24gYFwiKS5jb25jYXQocmVxdWlyZWRQcm9wLCBcImAuXCIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gcmVxdWlyZVByb3A7XG59IiwiY29uc3QgZnJvbnRlbmRVUkwgPSBcImh0dHBzOi8vc2FtYWhhbi5hZGR1LmVkdS5waFwiO1xyXG5jb25zdCBiYWNrZW5kVVJMID0gXCJodHRwczovL3NhbWFoYW4tYXBpLmFkZHUuZWR1LnBoXCI7XHJcbmNvbnN0IGNkblVSTCA9IFwiaHR0cHM6Ly9zYW1haGFuLWNkbi5pbWZhc3QuaW9cIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBmcm9udGVuZFVSTCwgYmFja2VuZFVSTCwgY2RuVVJMIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=