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
var _easy = require("easy");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../button/tab/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../button/tab/markdownStyle"));
var _customEventTypes = require("../../customEventTypes");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;  \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var TabButtonsDiv = /*#__PURE__*/ function(Element) {
    _inherits(TabButtonsDiv, Element);
    var _super = _create_super(TabButtonsDiv);
    function TabButtonsDiv() {
        _class_call_check(this, TabButtonsDiv);
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
    _create_class(TabButtonsDiv, [
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.enableMarkdownTabButton();
                this.disableMarkdownStyleTabButton();
                var eventType = _customEventTypes.MARKDOWN_STYLE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(eventType, event, element);
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.disableMarkdownTabButton();
                this.enableMarkdownStyleTabButton();
                var eventType = _customEventTypes.MARKDOWN_CUSTOM_EVENT_TYPE;
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
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return TabButtonsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(TabButtonsDiv, "tagName", "div");
_define_property(TabButtonsDiv, "defaultProperties", {
    className: "tab-buttons"
});
var _default = (0, _easywithstyle.default)(TabButtonsDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25UYWJCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi90YWIvbWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlVGFiQnV0dG9uIGZyb20gXCIuLi9idXR0b24vdGFiL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsIE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgVGFiQnV0dG9uc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlVGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIG1hcmtkb3duVGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bihldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlKGV2ZW50ID0gbnVsbCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICB0aGlzLmVuYWJsZU1hcmtkb3duVGFiQnV0dG9uKCk7XG4gICAgdGhpcy5kaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbigpO1xuXG4gICAgY29uc3QgZXZlbnRUeXBlID0gTUFSS0RPV05fU1RZTEVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIG1hcmtkb3duKGV2ZW50ID0gbnVsbCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICB0aGlzLmRpc2FibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuICAgIHRoaXMuZW5hYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbigpO1xuXG4gICAgY29uc3QgZXZlbnRUeXBlID0gTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1hcmtkb3duVGFiQnV0dG9uIG9uQ2xpY2s9e3RoaXMubWFya2Rvd25UYWJCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1hcmtkb3duU3R5bGVUYWJCdXR0b24gb25DbGljaz17dGhpcy5tYXJrZG93blN0eWxlVGFiQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidGFiLWJ1dHRvbnNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVGFiQnV0dG9uc0RpdilgXG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRhYkJ1dHRvbnNEaXYiLCJtYXJrZG93blN0eWxlVGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duVGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwibWFya2Rvd24iLCJlbmFibGVNYXJrZG93blRhYkJ1dHRvbiIsImRpc2FibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiZXZlbnRUeXBlIiwiTUFSS0RPV05fU1RZTEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkaXNhYmxlTWFya2Rvd25UYWJCdXR0b24iLCJlbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIk1hcmtkb3duVGFiQnV0dG9uIiwib25DbGljayIsIk1hcmtkb3duU3R5bGVUYWJCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtFQTs7O2VBQUE7OztvRUFoRXNCO29CQUVFOytEQUVNO29FQUNLO2dDQUUwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RSxJQUFBLEFBQU1BLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxzQ0FBcUMsU0FBQ0MsT0FBT0M7WUFDM0MsTUFBS0MsYUFBYSxDQUFDRixPQUFPQztRQUM1QjtRQUVBRSxrREFBQUEsaUNBQWdDLFNBQUNILE9BQU9DO1lBQ3RDLE1BQUtHLFFBQVEsQ0FBQ0osT0FBT0M7UUFDdkI7OztrQkFQSUg7O1lBU0pJLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY0YsUUFBQUEsaUVBQVEsTUFBTUMsVUFBQUEsaUVBQVU7Z0JBQ3BDLElBQUksQ0FBQ0ksdUJBQXVCO2dCQUM1QixJQUFJLENBQUNDLDZCQUE2QjtnQkFFbEMsSUFBTUMsWUFBWUMsa0RBQWdDO2dCQUVsRCxJQUFJLENBQUNDLGtCQUFrQixDQUFDRixXQUFXUCxPQUFPQztZQUM1Qzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU0osUUFBQUEsaUVBQVEsTUFBTUMsVUFBQUEsaUVBQVU7Z0JBQy9CLElBQUksQ0FBQ1Msd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLDRCQUE0QjtnQkFFakMsSUFBTUosWUFBWUssNENBQTBCO2dCQUU1QyxJQUFJLENBQUNILGtCQUFrQixDQUFDRixXQUFXUCxPQUFPQztZQUM1Qzs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFFBQVE7WUFDZjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxpQkFBaUI7d0JBQUNDLFNBQVMsSUFBSSxDQUFDZCw2QkFBNkI7O2tDQUM5RCxvQkFBQ2Usc0JBQXNCO3dCQUFDRCxTQUFTLElBQUksQ0FBQ2xCLGtDQUFrQzs7aUJBRXpFO1lBQ0g7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtZQUNwQjs7O1dBOUNJdEI7cUJBQXNCdUIsYUFBTztBQWdEakMsaUJBaERJdkIsZUFnREd3QixXQUFVO0FBRWpCLGlCQWxESXhCLGVBa0RHeUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDM0IifQ==