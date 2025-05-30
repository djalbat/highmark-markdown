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
var _css = /*#__PURE__*/ _interop_require_default(require("../../button/tab/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("../../button/tab/html"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("../../div/tabButtons"));
var _preview = /*#__PURE__*/ _interop_require_default(require("../../button/tab/preview"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../../button/tab/plainText"));
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
        "\n\n  grid-template-columns: 1fr 1fr 1fr 1fr;  \n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RightTabButtonsDiv = /*#__PURE__*/ function(TabButtonsDiv) {
    _inherits(RightTabButtonsDiv, TabButtonsDiv);
    function RightTabButtonsDiv() {
        _class_call_check(this, RightTabButtonsDiv);
        var _this;
        _this = _call_super(this, RightTabButtonsDiv, arguments), _define_property(_this, "cssTabButtonClickHandler", function(event, element) {
            _this.css(event, element);
        }), _define_property(_this, "htmlTabButtonClickHandler", function(event, element) {
            _this.html(event, element);
        }), _define_property(_this, "previewTabButtonClickHandler", function(event, element) {
            _this.preview(event, element);
        }), _define_property(_this, "plainTextTabButtonClickHandler", function(event, element) {
            _this.plainText(event, element);
        });
        return _this;
    }
    _create_class(RightTabButtonsDiv, [
        {
            key: "css",
            value: function css() {
                var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var eventType = _customEventTypes.CSS_CUSTOM_EVENT_TYPE;
                this.disableCSSTabButton();
                this.enableHTMLTabButton();
                this.enablePreviewTabButton();
                this.enablePlainTextTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "html",
            value: function html(event, element) {
                var eventType = _customEventTypes.HTML_CUSTOM_EVENT_TYPE;
                this.disableHTMLTabButton();
                this.enableCSSTabButton();
                this.enablePreviewTabButton();
                this.enablePlainTextTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "preview",
            value: function preview(event, element) {
                var eventType = _customEventTypes.PREVIEW_CUSTOM_EVENT_TYPE;
                this.disablePreviewTabButton();
                this.enableCSSTabButton();
                this.enableHTMLTabButton();
                this.enablePlainTextTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "plainText",
            value: function plainText(event, element) {
                var eventType = _customEventTypes.PLAIN_TEXT_CUSTOM_EVENT_TYPE;
                this.disablePlainTextTabButton();
                this.enableCSSTabButton();
                this.enableHTMLTabButton();
                this.enablePreviewTabButton();
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_css.default, {
                        onClick: this.cssTabButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_html.default, {
                        onClick: this.htmlTabButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_preview.default, {
                        onClick: this.previewTabButtonClickHandler,
                        disabled: true
                    }),
                    /*#__PURE__*/ React.createElement(_plainText.default, {
                        onClick: this.plainTextTabButtonClickHandler
                    })
                ];
            }
        }
    ]);
    return RightTabButtonsDiv;
}(_tabButtons.default);
_define_property(RightTabButtonsDiv, "defaultProperties", {
    className: "right"
});
var _default = (0, _easywithstyle.default)(RightTabButtonsDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBDU1NUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvY3NzXCI7XG5pbXBvcnQgSFRNTFRhYkJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL3RhYi9odG1sXCI7XG5pbXBvcnQgVGFiQnV0dG9uc0RpdiBmcm9tIFwiLi4vLi4vZGl2L3RhYkJ1dHRvbnNcIjtcbmltcG9ydCBQcmV2aWV3VGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiL3ByZXZpZXdcIjtcbmltcG9ydCBQbGFpblRleHRUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IENTU19DVVNUT01fRVZFTlRfVFlQRSwgSFRNTF9DVVNUT01fRVZFTlRfVFlQRSwgUFJFVklFV19DVVNUT01fRVZFTlRfVFlQRSwgUExBSU5fVEVYVF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNsYXNzIFJpZ2h0VGFiQnV0dG9uc0RpdiBleHRlbmRzIFRhYkJ1dHRvbnNEaXYge1xuICBjc3NUYWJCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcyhldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBodG1sVGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHByZXZpZXdUYWJCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcGxhaW5UZXh0VGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgY3NzKGV2ZW50ID0gbnVsbCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBDU1NfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmRpc2FibGVDU1NUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuZW5hYmxlSFRNTFRhYkJ1dHRvbigpO1xuICAgIHRoaXMuZW5hYmxlUHJldmlld1RhYkJ1dHRvbigpO1xuICAgIHRoaXMuZW5hYmxlUGxhaW5UZXh0VGFiQnV0dG9uKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGh0bWwoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBIVE1MX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5kaXNhYmxlSFRNTFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVDU1NUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVBsYWluVGV4dFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBwcmV2aWV3KGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUFJFVklFV19DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuZGlzYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuZW5hYmxlQ1NTVGFiQnV0dG9uKCk7XG4gICAgdGhpcy5lbmFibGVIVE1MVGFiQnV0dG9uKCk7XG4gICAgdGhpcy5lbmFibGVQbGFpblRleHRUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcGxhaW5UZXh0KGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUExBSU5fVEVYVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVDU1NUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZUhUTUxUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENTU1RhYkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNzc1RhYkJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8SFRNTFRhYkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmh0bWxUYWJCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPFByZXZpZXdUYWJCdXR0b24gb25DbGljaz17dGhpcy5wcmV2aWV3VGFiQnV0dG9uQ2xpY2tIYW5kbGVyfSBkaXNhYmxlZCAvPixcbiAgICAgIDxQbGFpblRleHRUYWJCdXR0b24gb25DbGljaz17dGhpcy5wbGFpblRleHRUYWJCdXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmlnaHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmlnaHRUYWJCdXR0b25zRGl2KWBcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjsgIFxuXG5gO1xuIl0sIm5hbWVzIjpbIlJpZ2h0VGFiQnV0dG9uc0RpdiIsImNzc1RhYkJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNzcyIsImh0bWxUYWJCdXR0b25DbGlja0hhbmRsZXIiLCJodG1sIiwicHJldmlld1RhYkJ1dHRvbkNsaWNrSGFuZGxlciIsInByZXZpZXciLCJwbGFpblRleHRUYWJCdXR0b25DbGlja0hhbmRsZXIiLCJwbGFpblRleHQiLCJldmVudFR5cGUiLCJDU1NfQ1VTVE9NX0VWRU5UX1RZUEUiLCJkaXNhYmxlQ1NTVGFiQnV0dG9uIiwiZW5hYmxlSFRNTFRhYkJ1dHRvbiIsImVuYWJsZVByZXZpZXdUYWJCdXR0b24iLCJlbmFibGVQbGFpblRleHRUYWJCdXR0b24iLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJIVE1MX0NVU1RPTV9FVkVOVF9UWVBFIiwiZGlzYWJsZUhUTUxUYWJCdXR0b24iLCJlbmFibGVDU1NUYWJCdXR0b24iLCJQUkVWSUVXX0NVU1RPTV9FVkVOVF9UWVBFIiwiZGlzYWJsZVByZXZpZXdUYWJCdXR0b24iLCJQTEFJTl9URVhUX0NVU1RPTV9FVkVOVF9UWVBFIiwiZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJDU1NUYWJCdXR0b24iLCJvbkNsaWNrIiwiSFRNTFRhYkJ1dHRvbiIsIlByZXZpZXdUYWJCdXR0b24iLCJkaXNhYmxlZCIsIlBsYWluVGV4dFRhYkJ1dHRvbiIsIlRhYkJ1dHRvbnNEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZBOzs7ZUFBQTs7O29FQTNGc0I7MERBRUc7MkRBQ0M7aUVBQ0E7OERBQ0c7Z0VBQ0U7Z0NBRXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkgsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxnQ0FDSkMsd0JBQUFBLDRCQUEyQixTQUFDQyxPQUFPQztZQUNqQyxNQUFLQyxHQUFHLENBQUNGLE9BQU9DO1FBQ2xCLElBRUFFLHdCQUFBQSw2QkFBNEIsU0FBQ0gsT0FBT0M7WUFDbEMsTUFBS0csSUFBSSxDQUFDSixPQUFPQztRQUNuQixJQUVBSSx3QkFBQUEsZ0NBQStCLFNBQUNMLE9BQU9DO1lBQ3JDLE1BQUtLLE9BQU8sQ0FBQ04sT0FBT0M7UUFDdEIsSUFFQU0sd0JBQUFBLGtDQUFpQyxTQUFDUCxPQUFPQztZQUN2QyxNQUFLTyxTQUFTLENBQUNSLE9BQU9DO1FBQ3hCOzs7a0JBZklIOztZQWlCSkksS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFJRixRQUFBQSxpRUFBUSxNQUFNQyxVQUFBQSxpRUFBVTtnQkFDMUIsSUFBTVEsWUFBWUMsdUNBQXFCO2dCQUV2QyxJQUFJLENBQUNDLG1CQUFtQjtnQkFFeEIsSUFBSSxDQUFDQyxtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ0Msc0JBQXNCO2dCQUMzQixJQUFJLENBQUNDLHdCQUF3QjtnQkFFN0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ04sV0FBV1QsT0FBT0M7WUFDNUM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0osS0FBSyxFQUFFQyxPQUFPO2dCQUNqQixJQUFNUSxZQUFZTyx3Q0FBc0I7Z0JBRXhDLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUV6QixJQUFJLENBQUNDLGtCQUFrQjtnQkFDdkIsSUFBSSxDQUFDTCxzQkFBc0I7Z0JBQzNCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUU3QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTixXQUFXVCxPQUFPQztZQUM1Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixLQUFLLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1RLFlBQVlVLDJDQUF5QjtnQkFFM0MsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRTVCLElBQUksQ0FBQ0Ysa0JBQWtCO2dCQUN2QixJQUFJLENBQUNOLG1CQUFtQjtnQkFDeEIsSUFBSSxDQUFDRSx3QkFBd0I7Z0JBRTdCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOLFdBQVdULE9BQU9DO1lBQzVDOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLEtBQUssRUFBRUMsT0FBTztnQkFDdEIsSUFBTVEsWUFBWVksOENBQTRCO2dCQUU5QyxJQUFJLENBQUNDLHlCQUF5QjtnQkFFOUIsSUFBSSxDQUFDSixrQkFBa0I7Z0JBQ3ZCLElBQUksQ0FBQ04sbUJBQW1CO2dCQUN4QixJQUFJLENBQUNDLHNCQUFzQjtnQkFFM0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ04sV0FBV1QsT0FBT0M7WUFDNUM7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLFlBQVk7d0JBQUNDLFNBQVMsSUFBSSxDQUFDMUIsd0JBQXdCOztrQ0FDcEQsb0JBQUMyQixhQUFhO3dCQUFDRCxTQUFTLElBQUksQ0FBQ3RCLHlCQUF5Qjs7a0NBQ3RELG9CQUFDd0IsZ0JBQWdCO3dCQUFDRixTQUFTLElBQUksQ0FBQ3BCLDRCQUE0Qjt3QkFBRXVCLFVBQUFBOztrQ0FDOUQsb0JBQUNDLGtCQUFrQjt3QkFBQ0osU0FBUyxJQUFJLENBQUNsQiw4QkFBOEI7O2lCQUVqRTtZQUNIOzs7V0ExRUlUO0VBQTJCZ0MsbUJBQWE7QUE0RTVDLGlCQTVFSWhDLG9CQTRFR2lDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25DIn0=