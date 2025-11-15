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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
                var lineHTMLNode = this.findChildNode(function(childNode) {
                    var childNodeAnchorHTMLNode = _instanceof(childNode, _anchor.default), childNodeLineHTMLNode = !childNodeAnchorHTMLNode;
                    if (childNodeLineHTMLNode) {
                        return true;
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyByZW1vdmVMZWFkaW5nV2hpdGVzcGFjZSwgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZ2V0TGluZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVBbmNob3JIVE1MTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBBbmNob3JIVE1MTm9kZSksXG4gICAgICAgICAgICBjaGlsZE5vZGVMaW5lSFRNTE5vZGUgPSAhY2hpbGROb2RlQW5jaG9ySFRNTE5vZGU7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVMaW5lSFRNTE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGFuY2hvcihjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhbmNob3JIVE1MTm9kZSA9IEFuY2hvckhUTUxOb2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBhbmNob3JIVE1MTm9kZTsgLy8vXG5cbiAgICB0aGlzLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoMVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBwbGFpblRleHQ7IC8vL1xuXG4gIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gIHN0cmluZyA9IHJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMoc3RyaW5nKTtcblxuICBjb25zdCBpZGVudGlmaWVyID0gc3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ0hUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwibGluZUhUTUxOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUFuY2hvckhUTUxOb2RlIiwiQW5jaG9ySFRNTE5vZGUiLCJjaGlsZE5vZGVMaW5lSFRNTE5vZGUiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImlkZW50aWZpZXJGcm9tUGxhaW5UZXh0IiwiYW5jaG9yIiwicHJlcGVuZCIsIkNPTlRFTlRTX1BSRVBFTkQiLCJhbmNob3JIVE1MTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsInByZXBlbmRDaGlsZE5vZGUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwicmVtb3ZlTGVhZGluZ1doaXRlc3BhY2UiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiLCJyZW1vdmVOb25BbHBoYWJldGljQ2hhcmFjdGVycyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7NkRBQ007d0JBRU07c0JBQ2dFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1DLDBCQUEyQkQsQUFBUyxZQUFUQSxXQUFxQkUsZUFBYyxHQUM5REMsd0JBQXdCLENBQUNGO29CQUUvQixJQUFJRSx1QkFBdUI7d0JBQ3pCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFNQyxZQUFZLElBQUksQ0FBQ0MscUJBQXFCLENBQUNGLFVBQ3ZDRCxhQUFhSSx3QkFBd0JGO2dCQUUzQyxPQUFPRjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE9BQU87Z0JBQ1osSUFBTUssVUFBVUMsMEJBQWdCLEVBQzFCUCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxVQUM3Qk8saUJBQWlCVixlQUFjLENBQUNXLHdCQUF3QixDQUFDSCxTQUFTTixhQUNsRUosWUFBWVksZ0JBQWdCLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNkO1lBQ3hCOzs7O1lBSU9lLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUksT0FBT0MsYUFBUSxDQUFDRixXQUFXLENBQUNDO1lBQVE7OztZQUV6REUsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0YsS0FBSyxFQUFFRyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQUFDRixPQUFPRztZQUFZOzs7V0FsQ3ZFdkI7RUFBd0JxQixhQUFRO0FBOEJuRCxpQkE5Qm1CckIsaUJBOEJad0IsV0FBVTtBQU9uQixTQUFTWix3QkFBd0JGLFNBQVM7SUFDeEMsSUFBSWU7SUFFSkEsU0FBU2YsV0FBVyxHQUFHO0lBRXZCZSxTQUFTQSxPQUFPQyxXQUFXO0lBRTNCRCxTQUFTRSxJQUFBQSwrQkFBdUIsRUFBQ0Y7SUFFakNBLFNBQVNHLElBQUFBLGdDQUF3QixFQUFDSDtJQUVsQ0EsU0FBU0ksSUFBQUEscUNBQTZCLEVBQUNKO0lBRXZDLElBQU1qQixhQUFhaUIsUUFBUyxHQUFHO0lBRS9CLE9BQU9qQjtBQUNUIn0=