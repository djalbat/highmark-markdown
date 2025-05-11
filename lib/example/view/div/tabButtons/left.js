"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("../../div/tabButtons"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../button/tab/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../button/tab/markdownStyle"));
var _customEventTypes = require("../../../customEventTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  grid-template-columns: 1fr 1fr;  \n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LeftTabButtonsDiv = /*#__PURE__*/ function(TabButtonsDiv) {
    _inherits(LeftTabButtonsDiv, TabButtonsDiv);
    function LeftTabButtonsDiv() {
        _class_call_check(this, LeftTabButtonsDiv);
        var _this;
        _this = _call_super(this, LeftTabButtonsDiv, arguments), _define_property(_this, "markdownStyleTabButtonClickHandler", function(event, element) {
            _this.markdownStyle(event, element);
        }), _define_property(_this, "markdownTabButtonClickHandler", function(event, element) {
            _this.markdown(event, element);
        });
        return _this;
    }
    _create_class(LeftTabButtonsDiv, [
        {
            key: "markdownStyle",
            value: function markdownStyle(event, element) {
                var eventType = _customEventTypes.MARKDOWN_STYLE_CUSTOM_EVENT_TYPE;
                this.enableMarkdownTabButton();
                this.disableMarkdownStyleTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var eventType = _customEventTypes.MARKDOWN_CUSTOM_EVENT_TYPE;
                this.disableMarkdownTabButton();
                this.enableMarkdownStyleTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                        onClick: this.markdownStyleTabButtonClickHandler,
                        disabled: true
                    }),
                    /*#__PURE__*/ React.createElement(_markdown.default, {
                        onClick: this.markdownTabButtonClickHandler
                    })
                ];
            }
        }
    ]);
    return LeftTabButtonsDiv;
}(_tabButtons.default);
_define_property(LeftTabButtonsDiv, "defaultProperties", {
    className: "left"
});
var _default = (0, _easywithstyle.default)(LeftTabButtonsDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4uLy4uL2Rpdi90YWJCdXR0b25zXCI7XG5pbXBvcnQgTWFya2Rvd25UYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvbWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsIE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgTGVmdFRhYkJ1dHRvbnNEaXYgZXh0ZW5kcyBUYWJCdXR0b25zRGl2IHtcbiAgbWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93blRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5kaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93bihldmVudCA9IG51bGwsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmRpc2FibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNYXJrZG93blN0eWxlVGFiQnV0dG9uIG9uQ2xpY2s9e3RoaXMubWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlcn0gZGlzYWJsZWQgLz4sXG4gICAgICA8TWFya2Rvd25UYWJCdXR0b24gb25DbGljaz17dGhpcy5tYXJrZG93blRhYkJ1dHRvbkNsaWNrSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWZ0XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlZnRUYWJCdXR0b25zRGl2KWBcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICBcblxuYDtcbiJdLCJuYW1lcyI6WyJMZWZ0VGFiQnV0dG9uc0RpdiIsIm1hcmtkb3duU3R5bGVUYWJCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25UYWJCdXR0b25DbGlja0hhbmRsZXIiLCJtYXJrZG93biIsImV2ZW50VHlwZSIsIk1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFIiwiZW5hYmxlTWFya2Rvd25UYWJCdXR0b24iLCJkaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImNhbGxDdXN0b21IYW5kbGVycyIsIk1BUktET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwiZGlzYWJsZU1hcmtkb3duVGFiQnV0dG9uIiwiZW5hYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiTWFya2Rvd25UYWJCdXR0b24iLCJUYWJCdXR0b25zRGl2IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFEQTs7O2VBQUE7OztvRUFuRHNCO2lFQUVJOytEQUNJO29FQUNLO2dDQUUwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdFLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsK0JBQ0pDLHdCQUFBQSxzQ0FBcUMsU0FBQ0MsT0FBT0M7WUFDM0MsTUFBS0MsYUFBYSxDQUFDRixPQUFPQztRQUM1QixJQUVBRSx3QkFBQUEsaUNBQWdDLFNBQUNILE9BQU9DO1lBQ3RDLE1BQUtHLFFBQVEsQ0FBQ0osT0FBT0M7UUFDdkI7OztrQkFQSUg7O1lBU0pJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixLQUFLLEVBQUVDLE9BQU87Z0JBQzFCLElBQU1JLFlBQVlDLGtEQUFnQztnQkFFbEQsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRTVCLElBQUksQ0FBQ0MsNkJBQTZCO2dCQUVsQyxJQUFJLENBQUNDLGtCQUFrQixDQUFDSixXQUFXTCxPQUFPQztZQUM1Qzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU0osUUFBQUEsaUVBQVEsTUFBTUMsVUFBQUEsaUVBQVU7Z0JBQy9CLElBQU1JLFlBQVlLLDRDQUEwQjtnQkFFNUMsSUFBSSxDQUFDQyx3QkFBd0I7Z0JBRTdCLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUVqQyxJQUFJLENBQUNILGtCQUFrQixDQUFDSixXQUFXTCxPQUFPQztZQUM1Qzs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxzQkFBc0I7d0JBQUNDLFNBQVMsSUFBSSxDQUFDaEIsa0NBQWtDO3dCQUFFaUIsVUFBQUE7O2tDQUMxRSxvQkFBQ0MsaUJBQWlCO3dCQUFDRixTQUFTLElBQUksQ0FBQ1osNkJBQTZCOztpQkFFL0Q7WUFDSDs7O1dBcENJTDtFQUEwQm9CLG1CQUFhO0FBc0MzQyxpQkF0Q0lwQixtQkFzQ0dxQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN2QiJ9