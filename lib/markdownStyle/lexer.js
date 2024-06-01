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
var _lexer = /*#__PURE__*/ _interop_require_default(require("../common/lexer"));
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
var MarkdownStyleLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MarkdownStyleLexer, CommonLexer);
    var _super = _create_super(MarkdownStyleLexer);
    function MarkdownStyleLexer() {
        _class_call_check(this, MarkdownStyleLexer);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _lexer.default.fromNothing(MarkdownStyleLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _lexer.default.fromRules(MarkdownStyleLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _lexer.default.fromEntries(MarkdownStyleLexer, entries);
            }
        }
    ]);
    return MarkdownStyleLexer;
}(_lexer.default);
_define_property(MarkdownStyleLexer, "entries", _entries.default);
_define_property(MarkdownStyleLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken);
_define_property(MarkdownStyleLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MarkdownStyleLexer, "EndOfLineCommentToken", _occamlexers.EndOfLineCommentSignificantToken) ///
;
_define_property(MarkdownStyleLexer, "SingleLineCommentToken", _occamlexers.CStyleSingleLineCommentToken) ///
;
_define_property(MarkdownStyleLexer, "RegularExpressionToken", null);
_define_property(MarkdownStyleLexer, "EndOfMultiLineCommentToken", _occamlexers.CStyleEndOfMultiLineCommentToken) ///
;
_define_property(MarkdownStyleLexer, "StartOfMultiLineCommentToken", _occamlexers.CStyleStartOfMultiLineCommentToken) ///
;
_define_property(MarkdownStyleLexer, "MiddleOfMultiLineCommentToken", _occamlexers.CStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(MarkdownStyleLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MarkdownStyleLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKE1hcmtkb3duU3R5bGVMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKE1hcmtkb3duU3R5bGVMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhNYXJrZG93blN0eWxlTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyQkFMK0I7OERBRWhDOzREQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGNBQVcsQ0FBQ0QsV0FBVyxDQXZCbENEO1lBdUJ3RDs7O1lBRXBFRyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9GLGNBQVcsQ0FBQ0MsU0FBUyxDQXpCbkNILG9CQXlCd0RJO1lBQVE7OztZQUU1RUMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsT0FBTztnQkFBSSxPQUFPSixjQUFXLENBQUNHLFdBQVcsQ0EzQnpDTCxvQkEyQjhETTtZQUFVOzs7V0EzQnhFTjtFQUEyQkUsY0FBVztBQUN6RCxpQkFEbUJGLG9CQUNaTSxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJOLG9CQUdaTyxrQkFBaUJDLHlDQUE0QjtBQUVwRCxpQkFMbUJSLG9CQUtaUyxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlQsb0JBT1pVLHlCQUF3QkMsNkNBQWdDLEVBQUcsR0FBRzs7QUFFckUsaUJBVG1CWCxvQkFTWlksMEJBQXlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUVqRSxpQkFYbUJiLG9CQVdaYywwQkFBeUI7QUFFaEMsaUJBYm1CZCxvQkFhWmUsOEJBQTZCQyw2Q0FBZ0MsRUFBRSxHQUFHOztBQUV6RSxpQkFmbUJoQixvQkFlWmlCLGdDQUErQkMsK0NBQWtDLEVBQUUsR0FBRzs7QUFFN0UsaUJBakJtQmxCLG9CQWlCWm1CLGlDQUFnQ0MsZ0RBQW1DLEVBQUUsR0FBRzs7QUFFL0UsaUJBbkJtQnBCLG9CQW1CWnFCLGtDQUFpQztBQUV4QyxpQkFyQm1CckIsb0JBcUJac0Isa0NBQWlDQSwyQ0FBOEIifQ==