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
_define_property(MarkdownLexer, "RegularExpressionToken", _occamlexers.RegularExpressionToken);
_define_property(MarkdownLexer, "EndOfMultiLineCommentToken", _occamlexers.CStyleEndOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "StartOfMultiLineCommentToken", _occamlexers.CStyleStartOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "MiddleOfMultiLineCommentToken", _occamlexers.CStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(MarkdownLexer, "SinglyQuotedStringLiteralToken", _occamlexers.SinglyQuotedStringLiteralToken);
_define_property(MarkdownLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgQ2xhc3MgPSBNYXJrZG93bkxleGVyOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2Rvd25MZXhlciA9IENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKENsYXNzKTtcclxuXHJcbiAgICByZXR1cm4gbWFya2Rvd25MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XHJcbiAgICBpZiAocnVsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBydWxlcyA9IENsYXNzOyAgLy8vXHJcblxyXG4gICAgICBDbGFzcyA9IE1hcmtkb3duTGV4ZXI7ICAvLy9cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXJrZG93bkxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIG1hcmtkb3duTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGlmIChlbnRyaWVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZW50cmllcyA9IENsYXNzOyAgLy8vXHJcblxyXG4gICAgICBDbGFzcyA9IE1hcmtkb3duTGV4ZXI7ICAvLy9cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXJrZG93bkxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93bkxleGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJtYXJrZG93bkxleGVyIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyQkFkTzs4REFZUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUF1QlpDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQUlBLFVBQVVDLFdBQVc7b0JBQ3ZCRCxRQXpCZUYsZUF5QlMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUksZ0JBQWdCQyx3QkFBVyxDQUFDSixXQUFXLENBQUNDO2dCQUU5QyxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUosS0FBSyxFQUFFSyxLQUFLO2dCQUMzQixJQUFJQSxVQUFVSixXQUFXO29CQUN2QkksUUFBUUwsT0FBUSxHQUFHO29CQUVuQkEsUUFyQ2VGLGVBcUNTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1JLGdCQUFnQkMsd0JBQVcsQ0FBQ0MsU0FBUyxDQUFDSixPQUFPSztnQkFFbkQsT0FBT0g7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlOLEtBQUssRUFBRU8sT0FBTztnQkFDL0IsSUFBSUEsWUFBWU4sV0FBVztvQkFDekJNLFVBQVVQLE9BQVEsR0FBRztvQkFFckJBLFFBakRlRixlQWlEUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNSSxnQkFBZ0JDLHdCQUFXLENBQUNHLFdBQVcsQ0FBQ04sT0FBT087Z0JBRXJELE9BQU9MO1lBQ1Q7OztXQXZEbUJKO0VBQXNCSyx3QkFBVztBQUNwRCxpQkFEbUJMLGVBQ1pTLFdBQVVBLGdCQUFPO0FBRXhCLGlCQUhtQlQsZUFHWlUsa0JBQWlCQyxzQ0FBeUIsRUFBRyxHQUFHOztBQUV2RCxpQkFMbUJYLGVBS1pZLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CWixlQU9aYSx5QkFBd0JDLDZDQUFnQyxFQUFHLEdBQUc7O0FBRXJFLGlCQVRtQmQsZUFTWmUsMEJBQXlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUVqRSxpQkFYbUJoQixlQVdaaUIsMEJBQXlCQSxtQ0FBc0I7QUFFdEQsaUJBYm1CakIsZUFhWmtCLDhCQUE2QkMsNkNBQWdDLEVBQUUsR0FBRzs7QUFFekUsaUJBZm1CbkIsZUFlWm9CLGdDQUErQkMsK0NBQWtDLEVBQUUsR0FBRzs7QUFFN0UsaUJBakJtQnJCLGVBaUJac0IsaUNBQWdDQyxnREFBbUMsRUFBRSxHQUFHOztBQUUvRSxpQkFuQm1CdkIsZUFtQlp3QixrQ0FBaUNBLDJDQUE4QjtBQUV0RSxpQkFyQm1CeEIsZUFxQlp5QixrQ0FBaUNBLDJDQUE4QiJ9