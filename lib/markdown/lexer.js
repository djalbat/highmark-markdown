"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownLexer;
    }
});
var _occamlexers = require("occam-lexers");
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
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
var MarkdownLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MarkdownLexer, CommonLexer);
    function MarkdownLexer() {
        _class_call_check(this, MarkdownLexer);
        return _call_super(this, MarkdownLexer, arguments);
    }
    _create_class(MarkdownLexer, null, [
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                if (rules === undefined) {
                    rules = Class; ///
                    Class = MarkdownLexer; ///
                }
                var markdownLexer = _occamlexers.CommonLexer.fromRules(Class, rules);
                return markdownLexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                if (entries === undefined) {
                    entries = Class; ///
                    Class = MarkdownLexer; ///
                }
                var markdownLexer = _occamlexers.CommonLexer.fromEntries(Class, entries);
                return markdownLexer;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownLexer; ///
                }
                var markdownLexer = _occamlexers.CommonLexer.fromNothing(Class);
                return markdownLexer;
            }
        }
    ]);
    return MarkdownLexer;
}(_occamlexers.CommonLexer);
_define_property(MarkdownLexer, "entries", _entries.default);
_define_property(MarkdownLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(MarkdownLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MarkdownLexer, "EndOfLineCommentToken", null);
_define_property(MarkdownLexer, "SingleLineCommentToken", null);
_define_property(MarkdownLexer, "RegularExpressionToken", null);
_define_property(MarkdownLexer, "EndOfMultiLineCommentToken", null);
_define_property(MarkdownLexer, "StartOfMultiLineCommentToken", null);
_define_property(MarkdownLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(MarkdownLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MarkdownLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLCBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93bkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgaWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcnVsZXMgPSBDbGFzczsgIC8vL1xyXG5cclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93bkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBpZiAoZW50cmllcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGVudHJpZXMgPSBDbGFzczsgIC8vL1xyXG5cclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gbWFya2Rvd25MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKENsYXNzKTtcclxuXHJcbiAgICByZXR1cm4gbWFya2Rvd25MZXhlcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1hcmtkb3duTGV4ZXIiLCJmcm9tUnVsZXMiLCJDbGFzcyIsInJ1bGVzIiwidW5kZWZpbmVkIiwibWFya2Rvd25MZXhlciIsIkNvbW1vbkxleGVyIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKbUQ7OERBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSyxFQUFFQyxLQUFLO2dCQUMzQixJQUFJQSxVQUFVQyxXQUFXO29CQUN2QkQsUUFBUUQsT0FBUSxHQUFHO29CQUVuQkEsUUEzQmVGLGVBMkJTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1LLGdCQUFnQkMsd0JBQVcsQ0FBQ0wsU0FBUyxDQUFDQyxPQUFPQztnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlMLEtBQUssRUFBRU0sT0FBTztnQkFDL0IsSUFBSUEsWUFBWUosV0FBVztvQkFDekJJLFVBQVVOLE9BQVEsR0FBRztvQkFFckJBLFFBdkNlRixlQXVDUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNSyxnQkFBZ0JDLHdCQUFXLENBQUNDLFdBQVcsQ0FBQ0wsT0FBT007Z0JBRXJELE9BQU9IO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZUCxLQUFLO2dCQUN0QixJQUFJQSxVQUFVRSxXQUFXO29CQUN2QkYsUUFqRGVGLGVBaURTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1LLGdCQUFnQkMsd0JBQVcsQ0FBQ0csV0FBVyxDQUFDUDtnQkFFOUMsT0FBT0c7WUFDVDs7O1dBdkRtQkw7RUFBc0JNLHdCQUFXO0FBQ3BELGlCQURtQk4sZUFDWlEsV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CUixlQUdaVSxrQkFBaUJDLHNDQUF5QixFQUFHLEdBQUc7O0FBRXZELGlCQUxtQlgsZUFLWlksbUJBQWtCQSw0QkFBZTtBQUV4QyxpQkFQbUJaLGVBT1phLHlCQUF3QjtBQUUvQixpQkFUbUJiLGVBU1pjLDBCQUF5QjtBQUVoQyxpQkFYbUJkLGVBV1plLDBCQUF5QjtBQUVoQyxpQkFibUJmLGVBYVpnQiw4QkFBNkI7QUFFcEMsaUJBZm1CaEIsZUFlWmlCLGdDQUErQjtBQUV0QyxpQkFqQm1CakIsZUFpQlprQixpQ0FBZ0M7QUFFdkMsaUJBbkJtQmxCLGVBbUJabUIsa0NBQWlDO0FBRXhDLGlCQXJCbUJuQixlQXFCWm9CLGtDQUFpQyJ9