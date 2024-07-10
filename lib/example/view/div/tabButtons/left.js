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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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
    var _super = _create_super(LeftTabButtonsDiv);
    function LeftTabButtonsDiv() {
        _class_call_check(this, LeftTabButtonsDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleTabButtonClickHandler", function(event, element) {
            _this.markdownStyle(event, element);
        });
        _define_property(_assert_this_initialized(_this), "markdownTabButtonClickHandler", function(event, element) {
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
            key: "didMount",
            value: function didMount() {
                this.markdown();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_markdown.default, {
                        onClick: this.markdownTabButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                        onClick: this.markdownStyleTabButtonClickHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4uLy4uL2Rpdi90YWJCdXR0b25zXCI7XG5pbXBvcnQgTWFya2Rvd25UYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvbWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsIE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgTGVmdFRhYkJ1dHRvbnNEaXYgZXh0ZW5kcyBUYWJCdXR0b25zRGl2IHtcbiAgbWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93blRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5kaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93bihldmVudCA9IG51bGwsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmRpc2FibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1hcmtkb3duVGFiQnV0dG9uIG9uQ2xpY2s9e3RoaXMubWFya2Rvd25UYWJCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1hcmtkb3duU3R5bGVUYWJCdXR0b24gb25DbGljaz17dGhpcy5tYXJrZG93blN0eWxlVGFiQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxlZnRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVmdFRhYkJ1dHRvbnNEaXYpYFxuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgIFxuXG5gO1xuIl0sIm5hbWVzIjpbIkxlZnRUYWJCdXR0b25zRGl2IiwibWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJtYXJrZG93blRhYkJ1dHRvbkNsaWNrSGFuZGxlciIsIm1hcmtkb3duIiwiZXZlbnRUeXBlIiwiTUFSS0RPV05fU1RZTEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJlbmFibGVNYXJrZG93blRhYkJ1dHRvbiIsImRpc2FibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJkaXNhYmxlTWFya2Rvd25UYWJCdXR0b24iLCJlbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJNYXJrZG93blRhYkJ1dHRvbiIsIm9uQ2xpY2siLCJNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiVGFiQnV0dG9uc0RpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2REE7OztlQUFBOzs7b0VBM0RzQjtpRUFFSTsrREFDSTtvRUFDSztnQ0FFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RSxJQUFBLEFBQU1BLGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxzQ0FBcUMsU0FBQ0MsT0FBT0M7WUFDM0MsTUFBS0MsYUFBYSxDQUFDRixPQUFPQztRQUM1QjtRQUVBRSxrREFBQUEsaUNBQWdDLFNBQUNILE9BQU9DO1lBQ3RDLE1BQUtHLFFBQVEsQ0FBQ0osT0FBT0M7UUFDdkI7OztrQkFQSUg7O1lBU0pJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixLQUFLLEVBQUVDLE9BQU87Z0JBQzFCLElBQU1JLFlBQVlDLGtEQUFnQztnQkFFbEQsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRTVCLElBQUksQ0FBQ0MsNkJBQTZCO2dCQUVsQyxJQUFJLENBQUNDLGtCQUFrQixDQUFDSixXQUFXTCxPQUFPQztZQUM1Qzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU0osUUFBQUEsaUVBQVEsTUFBTUMsVUFBQUEsaUVBQVU7Z0JBQy9CLElBQU1JLFlBQVlLLDRDQUEwQjtnQkFFNUMsSUFBSSxDQUFDQyx3QkFBd0I7Z0JBRTdCLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUVqQyxJQUFJLENBQUNILGtCQUFrQixDQUFDSixXQUFXTCxPQUFPQztZQUM1Qzs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFFBQVE7WUFDZjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxpQkFBaUI7d0JBQUNDLFNBQVMsSUFBSSxDQUFDZCw2QkFBNkI7O2tDQUM5RCxvQkFBQ2Usc0JBQXNCO3dCQUFDRCxTQUFTLElBQUksQ0FBQ2xCLGtDQUFrQzs7aUJBRXpFO1lBQ0g7OztXQTVDSUQ7RUFBMEJxQixtQkFBYTtBQThDM0MsaUJBOUNJckIsbUJBOENHc0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDeEIifQ==