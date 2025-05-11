"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleLexer;
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
var MarkdownStyleLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MarkdownStyleLexer, CommonLexer);
    function MarkdownStyleLexer() {
        _class_call_check(this, MarkdownStyleLexer);
        return _call_super(this, MarkdownStyleLexer, arguments);
    }
    _create_class(MarkdownStyleLexer, null, [
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                if (rules === undefined) {
                    rules = Class; ///
                    Class = MarkdownStyleLexer; ///
                }
                var markdownStyleLexer = _occamlexers.CommonLexer.fromRules(Class, rules);
                return markdownStyleLexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                if (entries === undefined) {
                    entries = Class; ///
                    Class = MarkdownStyleLexer; ///
                }
                var markdownStyleLexer = _occamlexers.CommonLexer.fromEntries(Class, entries);
                return markdownStyleLexer;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownStyleLexer; ///
                }
                var markdownStyleLexer = _occamlexers.CommonLexer.fromNothing(Class);
                return markdownStyleLexer;
            }
        }
    ]);
    return MarkdownStyleLexer;
}(_occamlexers.CommonLexer);
_define_property(MarkdownStyleLexer, "entries", _entries.default);
_define_property(MarkdownStyleLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken) ///
;
_define_property(MarkdownStyleLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MarkdownStyleLexer, "EndOfLineCommentToken", null);
_define_property(MarkdownStyleLexer, "SingleLineCommentToken", null);
_define_property(MarkdownStyleLexer, "RegularExpressionToken", null);
_define_property(MarkdownStyleLexer, "EndOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "StartOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MarkdownStyleLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGlmIChydWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJ1bGVzID0gQ2xhc3M7ICAvLy9cclxuXHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgaWYgKGVudHJpZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBlbnRyaWVzID0gQ2xhc3M7ICAvLy9cclxuXHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93blN0eWxlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ2xhc3MpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93blN0eWxlTGV4ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlTGV4ZXIiLCJmcm9tUnVsZXMiLCJDbGFzcyIsInJ1bGVzIiwidW5kZWZpbmVkIiwibWFya2Rvd25TdHlsZUxleGVyIiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJmcm9tTm90aGluZyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpzRjs4REFFdkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUF1QlpDLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRUMsS0FBSztnQkFDM0IsSUFBSUEsVUFBVUMsV0FBVztvQkFDdkJELFFBQVFELE9BQVEsR0FBRztvQkFFbkJBLFFBM0JlRixvQkEyQmMsR0FBRztnQkFDbEM7Z0JBRUEsSUFBTUsscUJBQXFCQyx3QkFBVyxDQUFDTCxTQUFTLENBQUNDLE9BQU9DO2dCQUV4RCxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUwsS0FBSyxFQUFFTSxPQUFPO2dCQUMvQixJQUFJQSxZQUFZSixXQUFXO29CQUN6QkksVUFBVU4sT0FBUSxHQUFHO29CQUVyQkEsUUF2Q2VGLG9CQXVDYyxHQUFHO2dCQUNsQztnQkFFQSxJQUFNSyxxQkFBcUJDLHdCQUFXLENBQUNDLFdBQVcsQ0FBQ0wsT0FBT007Z0JBRTFELE9BQU9IO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZUCxLQUFLO2dCQUN0QixJQUFJQSxVQUFVRSxXQUFXO29CQUN2QkYsUUFqRGVGLG9CQWlEYyxHQUFHO2dCQUNsQztnQkFFQSxJQUFNSyxxQkFBcUJDLHdCQUFXLENBQUNHLFdBQVcsQ0FBQ1A7Z0JBRW5ELE9BQU9HO1lBQ1Q7OztXQXZEbUJMO0VBQTJCTSx3QkFBVztBQUN6RCxpQkFEbUJOLG9CQUNaUSxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJSLG9CQUdaVSxrQkFBaUJDLHlDQUE0QixFQUFFLEdBQUc7O0FBRXpELGlCQUxtQlgsb0JBS1pZLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CWixvQkFPWmEseUJBQXdCO0FBRS9CLGlCQVRtQmIsb0JBU1pjLDBCQUF5QjtBQUVoQyxpQkFYbUJkLG9CQVdaZSwwQkFBeUI7QUFFaEMsaUJBYm1CZixvQkFhWmdCLDhCQUE2QjtBQUVwQyxpQkFmbUJoQixvQkFlWmlCLGdDQUErQjtBQUV0QyxpQkFqQm1CakIsb0JBaUJaa0IsaUNBQWdDO0FBRXZDLGlCQW5CbUJsQixvQkFtQlptQixrQ0FBaUM7QUFFeEMsaUJBckJtQm5CLG9CQXFCWm9CLGtDQUFpQ0EsMkNBQThCIn0=