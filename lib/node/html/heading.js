"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _string = require("../../utilities/string");
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
var HeadingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(HeadingHTMLNode, HTMLNode);
    function HeadingHTMLNode() {
        _class_call_check(this, HeadingHTMLNode);
        return _call_super(this, HeadingHTMLNode, arguments);
    }
    _create_class(HeadingHTMLNode, [
        {
            key: "getLineHTMLNode",
            value: function getLineHTMLNode() {
                var lineHTMLNode = this.fromFirstChildNode(function(firstChildNode) {
                    var lineHTMLNode = firstChildNode; ///
                    return lineHTMLNode;
                });
                return lineHTMLNode;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var plainText = this.childNodesAsPlainText(context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                return _html.default.fromNothing(Class);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                return _html.default.fromOuterNode(Class, outerNode);
            }
        }
    ]);
    return HeadingHTMLNode;
}(_html.default);
_define_property(HeadingHTMLNode, "tagName", "h1");
function identifierFromPlainText(plainText) {
    var string;
    string = plainText; ///
    string = string.toLowerCase();
    string = (0, _string.removeLeadingWhitespace)(string);
    string = (0, _string.removeNonAlphabeticCharacters)(string);
    string = (0, _string.replaceSpacesWithHyphens)(string);
    var identifier = string; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlTGVhZGluZ1doaXRlc3BhY2UsIHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucywgcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldExpbmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImgxXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IHBsYWluVGV4dDsgLy8vXG5cbiAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG5cbiAgc3RyaW5nID0gcmVtb3ZlTGVhZGluZ1doaXRlc3BhY2Uoc3RyaW5nKTtcblxuICBzdHJpbmcgPSByZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyhzdHJpbmcpO1xuXG4gIHN0cmluZyA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhzdHJpbmcpO1xuXG4gIGNvbnN0IGlkZW50aWZpZXIgPSBzdHJpbmc7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nSFRNTE5vZGUiLCJnZXRMaW5lSFRNTE5vZGUiLCJsaW5lSFRNTE5vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiaWRlbnRpZmllckZyb21QbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwicmVtb3ZlTGVhZGluZ1doaXRlc3BhY2UiLCJyZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyIsInJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7c0JBRTRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDNUMsSUFBTUYsZUFBZUUsZ0JBQWdCLEdBQUc7b0JBRXhDLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBTUMsWUFBWSxJQUFJLENBQUNDLHFCQUFxQixDQUFDRixVQUN2Q0QsYUFBYUksd0JBQXdCRjtnQkFFM0MsT0FBT0Y7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0YsV0FBVyxDQUFDQztZQUFROzs7WUFFekRFLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNGLEtBQUssRUFBRUcsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0FBQ0YsT0FBT0c7WUFBWTs7O1dBdEJ2RWQ7RUFBd0JZLGFBQVE7QUFrQm5ELGlCQWxCbUJaLGlCQWtCWmUsV0FBVTtBQU9uQixTQUFTTix3QkFBd0JGLFNBQVM7SUFDeEMsSUFBSVM7SUFFSkEsU0FBU1QsV0FBVyxHQUFHO0lBRXZCUyxTQUFTQSxPQUFPQyxXQUFXO0lBRTNCRCxTQUFTRSxJQUFBQSwrQkFBdUIsRUFBQ0Y7SUFFakNBLFNBQVNHLElBQUFBLHFDQUE2QixFQUFDSDtJQUV2Q0EsU0FBU0ksSUFBQUEsZ0NBQXdCLEVBQUNKO0lBRWxDLElBQU1YLGFBQWFXLFFBQVMsR0FBRztJQUUvQixPQUFPWDtBQUNUIn0=