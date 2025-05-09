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
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/html/anchor"));
var _prepends = require("../../prepends");
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
        },
        {
            key: "anchor",
            value: function anchor(context) {
                var prepend = _prepends.CONTENTS_PREPEND, identifier = this.identifier(context), anchorHTMLNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), childNode = anchorHTMLNode; ///
                this.prependChildNode(childNode);
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
    string = (0, _string.replaceSpacesWithHyphens)(string);
    string = (0, _string.removeNonAlphabeticCharacters)(string);
    var identifier = string; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyByZW1vdmVMZWFkaW5nV2hpdGVzcGFjZSwgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZ2V0TGluZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZUhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBhbmNob3IoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBDT05URU5UU19QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYW5jaG9ySFRNTE5vZGUgPSBBbmNob3JIVE1MTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGROb2RlID0gYW5jaG9ySFRNTE5vZGU7IC8vL1xuXG4gICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaDFcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSk7IH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gcGxhaW5UZXh0OyAvLy9cblxuICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICBzdHJpbmcgPSByZW1vdmVMZWFkaW5nV2hpdGVzcGFjZShzdHJpbmcpO1xuXG4gIHN0cmluZyA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhzdHJpbmcpO1xuXG4gIHN0cmluZyA9IHJlbW92ZU5vbkFscGhhYmV0aWNDaGFyYWN0ZXJzKHN0cmluZyk7XG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmdIVE1MTm9kZSIsImdldExpbmVIVE1MTm9kZSIsImxpbmVIVE1MTm9kZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJpZGVudGlmaWVyRnJvbVBsYWluVGV4dCIsImFuY2hvciIsInByZXBlbmQiLCJDT05URU5UU19QUkVQRU5EIiwiYW5jaG9ySFRNTE5vZGUiLCJBbmNob3JIVE1MTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsImNoaWxkTm9kZSIsInByZXBlbmRDaGlsZE5vZGUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwicmVtb3ZlTGVhZGluZ1doaXRlc3BhY2UiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiLCJyZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7NkRBQ007d0JBRU07c0JBQ2dFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDNUMsSUFBTUYsZUFBZUUsZ0JBQWdCLEdBQUc7b0JBRXhDLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBTUMsWUFBWSxJQUFJLENBQUNDLHFCQUFxQixDQUFDRixVQUN2Q0QsYUFBYUksd0JBQXdCRjtnQkFFM0MsT0FBT0Y7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSixPQUFPO2dCQUNaLElBQU1LLFVBQVVDLDBCQUFnQixFQUMxQlAsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsVUFDN0JPLGlCQUFpQkMsZUFBYyxDQUFDQyx3QkFBd0IsQ0FBQ0osU0FBU04sYUFDbEVXLFlBQVlILGdCQUFnQixHQUFHO2dCQUVyQyxJQUFJLENBQUNJLGdCQUFnQixDQUFDRDtZQUN4Qjs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0YsV0FBVyxDQUFDQztZQUFROzs7WUFFekRFLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNGLEtBQUssRUFBRUcsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0FBQ0YsT0FBT0c7WUFBWTs7O1dBL0J2RXRCO0VBQXdCb0IsYUFBUTtBQTJCbkQsaUJBM0JtQnBCLGlCQTJCWnVCLFdBQVU7QUFPbkIsU0FBU2Qsd0JBQXdCRixTQUFTO0lBQ3hDLElBQUlpQjtJQUVKQSxTQUFTakIsV0FBVyxHQUFHO0lBRXZCaUIsU0FBU0EsT0FBT0MsV0FBVztJQUUzQkQsU0FBU0UsSUFBQUEsK0JBQXVCLEVBQUNGO0lBRWpDQSxTQUFTRyxJQUFBQSxnQ0FBd0IsRUFBQ0g7SUFFbENBLFNBQVNJLElBQUFBLHFDQUE2QixFQUFDSjtJQUV2QyxJQUFNbkIsYUFBYW1CLFFBQVMsR0FBRztJQUUvQixPQUFPbkI7QUFDVCJ9