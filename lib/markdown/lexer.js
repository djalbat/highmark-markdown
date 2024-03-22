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
var MarkdownLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MarkdownLexer, CommonLexer);
    var _super = _create_super(MarkdownLexer);
    function MarkdownLexer() {
        _class_call_check(this, MarkdownLexer);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownLexer; ///
                }
                var markdownLexer = _occamlexers.CommonLexer.fromNothing(Class);
                return markdownLexer;
            }
        },
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
        }
    ]);
    return MarkdownLexer;
}(_occamlexers.CommonLexer);
_define_property(MarkdownLexer, "entries", _entries.default);
_define_property(MarkdownLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(MarkdownLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MarkdownLexer, "EndOfLineCommentToken", _occamlexers.EndOfLineCommentSignificantToken) ///
;
_define_property(MarkdownLexer, "SingleLineCommentToken", _occamlexers.CStyleSingleLineCommentToken) ///
;
_define_property(MarkdownLexer, "RegularExpressionToken", null);
_define_property(MarkdownLexer, "EndOfMultiLineCommentToken", _occamlexers.CStyleEndOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "StartOfMultiLineCommentToken", _occamlexers.CStyleStartOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "MiddleOfMultiLineCommentToken", _occamlexers.CStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MarkdownLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93bkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25MZXhlcjsgIC8vL1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcmtkb3duTGV4ZXIgPSBDb21tb25MZXhlci5mcm9tTm90aGluZyhDbGFzcyk7XHJcblxyXG4gICAgcmV0dXJuIG1hcmtkb3duTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgaWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcnVsZXMgPSBDbGFzczsgIC8vL1xyXG5cclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93bkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBpZiAoZW50cmllcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGVudHJpZXMgPSBDbGFzczsgIC8vL1xyXG5cclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gbWFya2Rvd25MZXhlcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwidW5kZWZpbmVkIiwibWFya2Rvd25MZXhlciIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJCQVhPOzhEQVNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUMsV0FBVztvQkFDdkJELFFBekJlRixlQXlCUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNSSxnQkFBZ0JDLHdCQUFXLENBQUNKLFdBQVcsQ0FBQ0M7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVSixLQUFLLEVBQUVLLEtBQUs7Z0JBQzNCLElBQUlBLFVBQVVKLFdBQVc7b0JBQ3ZCSSxRQUFRTCxPQUFRLEdBQUc7b0JBRW5CQSxRQXJDZUYsZUFxQ1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUksZ0JBQWdCQyx3QkFBVyxDQUFDQyxTQUFTLENBQUNKLE9BQU9LO2dCQUVuRCxPQUFPSDtZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsWUFBWU4sS0FBSyxFQUFFTyxPQUFPO2dCQUMvQixJQUFJQSxZQUFZTixXQUFXO29CQUN6Qk0sVUFBVVAsT0FBUSxHQUFHO29CQUVyQkEsUUFqRGVGLGVBaURTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1JLGdCQUFnQkMsd0JBQVcsQ0FBQ0csV0FBVyxDQUFDTixPQUFPTztnQkFFckQsT0FBT0w7WUFDVDs7O1dBdkRtQko7RUFBc0JLLHdCQUFXO0FBQ3BELGlCQURtQkwsZUFDWlMsV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CVCxlQUdaVSxrQkFBaUJDLHNDQUF5QixFQUFHLEdBQUc7O0FBRXZELGlCQUxtQlgsZUFLWlksbUJBQWtCQSw0QkFBZTtBQUV4QyxpQkFQbUJaLGVBT1phLHlCQUF3QkMsNkNBQWdDLEVBQUcsR0FBRzs7QUFFckUsaUJBVG1CZCxlQVNaZSwwQkFBeUJDLHlDQUE0QixFQUFFLEdBQUc7O0FBRWpFLGlCQVhtQmhCLGVBV1ppQiwwQkFBeUI7QUFFaEMsaUJBYm1CakIsZUFhWmtCLDhCQUE2QkMsNkNBQWdDLEVBQUUsR0FBRzs7QUFFekUsaUJBZm1CbkIsZUFlWm9CLGdDQUErQkMsK0NBQWtDLEVBQUUsR0FBRzs7QUFFN0UsaUJBakJtQnJCLGVBaUJac0IsaUNBQWdDQyxnREFBbUMsRUFBRSxHQUFHOztBQUUvRSxpQkFuQm1CdkIsZUFtQlp3QixrQ0FBaUM7QUFFeEMsaUJBckJtQnhCLGVBcUJaeUIsa0NBQWlDIn0=