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
var _constants = require("../constants");
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
        "\n\n  width: 100%;\n  height: 100%;  \n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  overflow: scroll;\n  position: absolute;\n  font-size: 1.2rem;\n  line-height: 1.5rem;\n  font-family: monospace;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var XMP = /*#__PURE__*/ function(Element) {
    _inherits(XMP, Element);
    var _super = _create_super(XMP);
    function XMP() {
        _class_call_check(this, XMP);
        return _super.apply(this, arguments);
    }
    _create_class(XMP, [
        {
            key: "clear",
            value: function clear() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var xmpHTML = this.html.bind(this), clearXMP = this.clear.bind(this); ///
                return {
                    xmpHTML: xmpHTML,
                    clearXMP: clearXMP
                };
            }
        }
    ]);
    return XMP;
}(_wrap_native_super(_easy.Element));
_define_property(XMP, "tagName", "xmp");
var _default = (0, _easywithstyle.default)(XMP)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgWE1QIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHhtcEhUTUwgPSB0aGlzLmh0bWwuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNsZWFyWE1QID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgeG1wSFRNTCxcbiAgICAgIGNsZWFyWE1QXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwieG1wXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShYTVApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7ICBcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJYTVAiLCJjbGVhciIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJwYXJlbnRDb250ZXh0IiwieG1wSFRNTCIsImJpbmQiLCJjbGVhclhNUCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7b0VBMUJzQjtvQkFFRTt5QkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLG9CQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU9DLHVCQUFZO2dCQUV6QixJQUFJLENBQUNELElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUMsSUFBSSxHQUM3QkMsV0FBVyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUzQyxPQUFRO29CQUNORCxTQUFBQTtvQkFDQUUsVUFBQUE7Z0JBQ0Y7WUFDRjs7O1dBZklQO3FCQUFZUSxhQUFPO0FBaUJ2QixpQkFqQklSLEtBaUJHUyxXQUFVO0lBR25CLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNWIn0=