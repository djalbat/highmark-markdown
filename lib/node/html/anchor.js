"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _attributeNames = require("../../attributeNames");
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
var AnchorHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(AnchorHTMLNode, HTMLNode);
    function AnchorHTMLNode(outerNode, parentNode, childNodes, domElement, identifier) {
        _class_call_check(this, AnchorHTMLNode);
        var _this;
        _this = _call_super(this, AnchorHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(AnchorHTMLNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = "".concat(this.prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.ANCHOR_RULE_NAME;
                return string;
            }
        }
    ], [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var anchorHTMLNode = _html.default.fromNothing(AnchorHTMLNode, identifier);
                return anchorHTMLNode;
            }
        }
    ]);
    return AnchorHTMLNode;
} // import { removedLeadingWhitespace, replaceSpacesWithHyphens, removeNonAlphabeticAndSpaceCharacters } from "../../utilities/string";
 //
 // addAnchor(context) {
 //   const prepend = CONTENTS_PREPEND,
 //     identifier = this.identifier(context),
 //     anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
 //     prependedChildNode = anchorMarkdownNode; ///
 //
 //   this.prependChildNode(prependedChildNode);
 // }
 //
 // identifier(context) {
 //   const plainText = this.asPlainText(context),
 //     identifier = identifierFromPlainText(plainText);
 //
 //   return identifier;
 // }
 //
 // function identifierFromPlainText(plainText) {
 //   plainText = plainText.toLowerCase();  ///
 //
 //   plainText = removedLeadingWhitespace(plainText);  ///
 //
 //   plainText = removeNonAlphabeticAndSpaceCharacters(plainText); ///
 //
 //   plainText = replaceSpacesWithHyphens(plainText);  ///
 //
 //   const identifier = plainText; ///
 //
 //   return identifier;
 // }
 //
(_html.default);
_define_property(AnchorHTMLNode, "tagName", "a");
_define_property(AnchorHTMLNode, "className", "anchor");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBTkNIT1JfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgSURfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IElEX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBgJHt0aGlzLnByZXBlbmR9LSR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBBTkNIT1JfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiYW5jaG9yXCI7XG5cbiAgc3RhdGljIGZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBhbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEFuY2hvckhUTUxOb2RlLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBhbmNob3JIVE1MTm9kZTtcbiAgfVxufVxuXG4vLyBpbXBvcnQgeyByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UsIHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucywgcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG4vL1xuLy8gYWRkQW5jaG9yKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4vLyAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbi8vICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyKHByZXBlbmQsIGlkZW50aWZpZXIpLFxuLy8gICAgIHByZXBlbmRlZENoaWxkTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICB0aGlzLnByZXBlbmRDaGlsZE5vZGUocHJlcGVuZGVkQ2hpbGROb2RlKTtcbi8vIH1cbi8vXG4vLyBpZGVudGlmaWVyKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbi8vICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KTtcbi8vXG4vLyAgIHJldHVybiBpZGVudGlmaWVyO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuLy8gICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuLy9cbi8vICAgcGxhaW5UZXh0ID0gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHBsYWluVGV4dCk7ICAvLy9cbi8vXG4vLyAgIHBsYWluVGV4dCA9IHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMocGxhaW5UZXh0KTsgLy8vXG4vL1xuLy8gICBwbGFpblRleHQgPSByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMocGxhaW5UZXh0KTsgIC8vL1xuLy9cbi8vICAgY29uc3QgaWRlbnRpZmllciA9IHBsYWluVGV4dDsgLy8vXG4vL1xuLy8gICByZXR1cm4gaWRlbnRpZmllcjtcbi8vIH1cbi8vXG4iXSwibmFtZXMiOlsiQW5jaG9ySFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlTmFtZSIsIklEX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiYXNTdHJpbmciLCJzdHJpbmciLCJBTkNIT1JfUlVMRV9OQU1FIiwiZnJvbUlkZW50aWZpZXIiLCJhbmNob3JIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTt5QkFDSTs4QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQSxlQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRGxETDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKREw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNRCxVQUFVRSx1QkFBWTtnQkFFNUIsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixPQUFPO2dCQUNuQixJQUFNRSxnQkFBZ0JDLGlDQUFpQjtnQkFFdkMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixPQUFPO2dCQUNwQixJQUFNSSxpQkFBaUIsQUFBQyxHQUFrQixPQUFoQixJQUFJLENBQUNDLE9BQU8sRUFBQyxLQUFtQixPQUFoQixJQUFJLENBQUNSLFVBQVU7Z0JBRXpELE9BQU9PO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU0MsMkJBQWdCO2dCQUUvQixPQUFPRDtZQUNUOzs7O1lBTU9FLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVaLFVBQVU7Z0JBQzlCLElBQU1hLGlCQUFpQkMsYUFBUSxDQUFDQyxXQUFXLENBeEMxQnBCLGdCQXdDMkNLO2dCQUU1RCxPQUFPYTtZQUNUOzs7V0EzQ21CbEI7RUE4Q3JCLHNJQUFzSTtDQUN0SSxFQUFFO0NBQ0YsdUJBQXVCO0NBQ3ZCLHNDQUFzQztDQUN0Qyw2Q0FBNkM7Q0FDN0MsNkZBQTZGO0NBQzdGLG1EQUFtRDtDQUNuRCxFQUFFO0NBQ0YsK0NBQStDO0NBQy9DLElBQUk7Q0FDSixFQUFFO0NBQ0Ysd0JBQXdCO0NBQ3hCLGlEQUFpRDtDQUNqRCx1REFBdUQ7Q0FDdkQsRUFBRTtDQUNGLHVCQUF1QjtDQUN2QixJQUFJO0NBQ0osRUFBRTtDQUNGLGdEQUFnRDtDQUNoRCw4Q0FBOEM7Q0FDOUMsRUFBRTtDQUNGLDBEQUEwRDtDQUMxRCxFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRiwwREFBMEQ7Q0FDMUQsRUFBRTtDQUNGLHNDQUFzQztDQUN0QyxFQUFFO0NBQ0YsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBN0UwQ21CLGFBQVE7QUFtQ2xELGlCQW5DbUJuQixnQkFtQ1pxQixXQUFVO0FBRWpCLGlCQXJDbUJyQixnQkFxQ1pzQixhQUFZIn0=