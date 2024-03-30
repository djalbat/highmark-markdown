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
_define_property(MarkdownLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBDbGFzcyA9IE1hcmtkb3duTGV4ZXI7ICAvLy9cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXJrZG93bkxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ2xhc3MpO1xyXG5cclxuICAgIHJldHVybiBtYXJrZG93bkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGlmIChydWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJ1bGVzID0gQ2xhc3M7ICAvLy9cclxuXHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25MZXhlcjsgIC8vL1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcmtkb3duTGV4ZXIgPSBDb21tb25MZXhlci5mcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbWFya2Rvd25MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgaWYgKGVudHJpZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBlbnRyaWVzID0gQ2xhc3M7ICAvLy9cclxuXHJcbiAgICAgIENsYXNzID0gTWFya2Rvd25MZXhlcjsgIC8vL1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcmtkb3duTGV4ZXIgPSBDb21tb25MZXhlci5mcm9tRW50cmllcyhDbGFzcywgZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIG1hcmtkb3duTGV4ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsIm1hcmtkb3duTGV4ZXIiLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7MkJBWk87OERBVVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBdUJaQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFJQSxVQUFVQyxXQUFXO29CQUN2QkQsUUF6QmVGLGVBeUJTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1JLGdCQUFnQkMsd0JBQVcsQ0FBQ0osV0FBVyxDQUFDQztnQkFFOUMsT0FBT0U7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVKLEtBQUssRUFBRUssS0FBSztnQkFDM0IsSUFBSUEsVUFBVUosV0FBVztvQkFDdkJJLFFBQVFMLE9BQVEsR0FBRztvQkFFbkJBLFFBckNlRixlQXFDUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNSSxnQkFBZ0JDLHdCQUFXLENBQUNDLFNBQVMsQ0FBQ0osT0FBT0s7Z0JBRW5ELE9BQU9IO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZTixLQUFLLEVBQUVPLE9BQU87Z0JBQy9CLElBQUlBLFlBQVlOLFdBQVc7b0JBQ3pCTSxVQUFVUCxPQUFRLEdBQUc7b0JBRXJCQSxRQWpEZUYsZUFpRFMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUksZ0JBQWdCQyx3QkFBVyxDQUFDRyxXQUFXLENBQUNOLE9BQU9PO2dCQUVyRCxPQUFPTDtZQUNUOzs7V0F2RG1CSjtFQUFzQkssd0JBQVc7QUFDcEQsaUJBRG1CTCxlQUNaUyxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJULGVBR1pVLGtCQUFpQkMsc0NBQXlCLEVBQUcsR0FBRzs7QUFFdkQsaUJBTG1CWCxlQUtaWSxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlosZUFPWmEseUJBQXdCQyw2Q0FBZ0MsRUFBRyxHQUFHOztBQUVyRSxpQkFUbUJkLGVBU1plLDBCQUF5QkMseUNBQTRCLEVBQUUsR0FBRzs7QUFFakUsaUJBWG1CaEIsZUFXWmlCLDBCQUF5QjtBQUVoQyxpQkFibUJqQixlQWFaa0IsOEJBQTZCQyw2Q0FBZ0MsRUFBRSxHQUFHOztBQUV6RSxpQkFmbUJuQixlQWVab0IsZ0NBQStCQywrQ0FBa0MsRUFBRSxHQUFHOztBQUU3RSxpQkFqQm1CckIsZUFpQlpzQixpQ0FBZ0NDLGdEQUFtQyxFQUFFLEdBQUc7O0FBRS9FLGlCQW5CbUJ2QixlQW1CWndCLGtDQUFpQztBQUV4QyxpQkFyQm1CeEIsZUFxQlp5QixrQ0FBaUNBLDJDQUE4QiJ9