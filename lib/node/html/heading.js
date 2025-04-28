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
    _create_class(HeadingHTMLNode, null, [
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
_define_property(HeadingHTMLNode, "tagName", "h1");
function identifierFromPlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = (0, _string.removedLeadingWhitespace)(plainText); ///
    plainText = (0, _string.removeNonAlphabeticAndSpaceCharacters)(plainText); ///
    plainText = (0, _string.replaceSpacesWithHyphens)(plainText); ///
    var identifier = plainText; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlLCByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMsIHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIC8vIGFkZEFuY2hvcihjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4gIC8vICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAvLyAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgLy8gICAgIHByZXBlbmRlZENoaWxkTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKHByZXBlbmRlZENoaWxkTm9kZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaWRlbnRpZmllcihjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgLy8gICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuICAvL1xuICAvLyAgIHJldHVybiBpZGVudGlmaWVyO1xuICAvLyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImgxXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZShwbGFpblRleHQpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyhwbGFpblRleHQpOyAvLy9cblxuICBwbGFpblRleHQgPSByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMocGxhaW5UZXh0KTsgIC8vL1xuXG4gIGNvbnN0IGlkZW50aWZpZXIgPSBwbGFpblRleHQ7IC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG4iXSwibmFtZXMiOlsiSGVhZGluZ0hUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJpZGVudGlmaWVyRnJvbVBsYWluVGV4dCIsInBsYWluVGV4dCIsInRvTG93ZXJDYXNlIiwicmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlIiwicmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyIsInJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyIsImlkZW50aWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO3NCQUVxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFtQlpDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUksT0FBT0MsYUFBUSxDQUFDRixXQUFXLENBQUNDO1lBQVE7OztZQUV6REUsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0YsS0FBSyxFQUFFRyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQUFDRixPQUFPRztZQUFZOzs7V0FyQnZFTDtFQUF3QkcsYUFBUTtBQUNuRCx1QkFBdUI7QUFDdkIsc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3Qyw2RkFBNkY7QUFDN0YsbURBQW1EO0FBQ25ELEVBQUU7QUFDRiwrQ0FBK0M7QUFDL0MsSUFBSTtBQUNKLEVBQUU7QUFDRix3QkFBd0I7QUFDeEIsaURBQWlEO0FBQ2pELHVEQUF1RDtBQUN2RCxFQUFFO0FBQ0YsdUJBQXVCO0FBQ3ZCLElBQUk7QUFFSixpQkFqQm1CSCxpQkFpQlpNLFdBQVU7QUFPbkIsU0FBU0Msd0JBQXdCQyxTQUFTO0lBQ3hDQSxZQUFZQSxVQUFVQyxXQUFXLElBQUssR0FBRztJQUV6Q0QsWUFBWUUsSUFBQUEsZ0NBQXdCLEVBQUNGLFlBQWEsR0FBRztJQUVyREEsWUFBWUcsSUFBQUEsNkNBQXFDLEVBQUNILFlBQVksR0FBRztJQUVqRUEsWUFBWUksSUFBQUEsZ0NBQXdCLEVBQUNKLFlBQWEsR0FBRztJQUVyRCxJQUFNSyxhQUFhTCxXQUFXLEdBQUc7SUFFakMsT0FBT0s7QUFDVCJ9