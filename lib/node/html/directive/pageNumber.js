"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberDirectiveHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../html"));
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
var PageNumberDirectiveHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(PageNumberDirectiveHTMLNode, HTMLNode);
    function PageNumberDirectiveHTMLNode() {
        _class_call_check(this, PageNumberDirectiveHTMLNode);
        return _call_super(this, PageNumberDirectiveHTMLNode, arguments);
    }
    _create_class(PageNumberDirectiveHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {} ///
        },
        {
            key: "tagName",
            value: function tagName(context) {} ///
        },
        {
            key: "className",
            value: function className(context) {} ///
        },
        {
            key: "closingTag",
            value: function closingTag(context) {} ///
        },
        {
            key: "startingTag",
            value: function startingTag(context) {} ///
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {} ///
        },
        {
            key: "attributeName",
            value: function attributeName(context) {} ///
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {} ///
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {} ///
        },
        {
            key: "getPageNumber",
            value: function getPageNumber() {
                return this.outerNode.getPageNumber();
            }
        },
        {
            key: "content",
            value: function content(context) {
                var pageNumber = this.getPageNumber(), content = pageNumber;
                return content;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(PageNumberDirectiveHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(PageNumberDirectiveHTMLNode, outerNode);
            }
        }
    ]);
    return PageNumberDirectiveHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGlyZWN0aXZlL3BhZ2VOdW1iZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge30gIC8vL1xuXG4gIHRhZ05hbWUoY29udGV4dCkge30gLy8vXG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHt9IC8vL1xuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge30gIC8vL1xuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHt9IC8vL1xuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHt9ICAvLy9cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHt9IC8vL1xuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHt9ICAvLy9cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7fSAvLy9cblxuICBnZXRQYWdlTnVtYmVyKCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuZ2V0UGFnZU51bWJlcigpOyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBwYWdlTnVtYmVyO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwidGFnTmFtZSIsImNvbnRleHQiLCJjbGFzc05hbWUiLCJjbG9zaW5nVGFnIiwic3RhcnRpbmdUYWciLCJzZWxmQ2xvc2luZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImFkanVzdEluZGVudCIsImluZGVudCIsImdldFBhZ2VOdW1iZXIiLCJvdXRlck5vZGUiLCJjb250ZW50IiwicGFnZU51bWJlciIsImFzSFRNTCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImh0bWwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWUsRUFBRyxHQUFHOzs7WUFFckJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPLEdBQUcsRUFBRSxHQUFHOzs7WUFFdkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRCxPQUFPLEdBQUcsRUFBRSxHQUFHOzs7WUFFekJFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixPQUFPLEdBQUcsRUFBRyxHQUFHOzs7WUFFM0JHLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSCxPQUFPLEdBQUcsRUFBRSxHQUFHOzs7WUFFM0JJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixPQUFPLEdBQUcsRUFBRyxHQUFHOzs7WUFFL0JLLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjTCxPQUFPLEdBQUcsRUFBRSxHQUFHOzs7WUFFN0JNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTixPQUFPLEdBQUcsRUFBRyxHQUFHOzs7WUFFL0JPLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNLEdBQUcsRUFBRSxHQUFHOzs7WUFFM0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsYUFBYTtZQUFJOzs7WUFFekRFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRWCxPQUFPO2dCQUNiLElBQU1ZLGFBQWEsSUFBSSxDQUFDSCxhQUFhLElBQy9CRSxVQUFVQztnQkFFaEIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxNQUFNLEVBQUVSLE9BQU87Z0JBQ3BCUSxTQUFTLElBQUksQ0FBQ0QsWUFBWSxDQUFDQztnQkFFM0IsSUFBTU0saUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNQLFFBQVFSLFVBQy9DRyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDSCxVQUMvQkUsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0YsVUFDN0JnQixPQUFPLEFBQUMsR0FBV2IsT0FBVEssUUFBdUJNLE9BQWRYLGFBQStCRCxPQUFqQlksZ0JBQTRCLE9BQVhaLFlBQVc7Z0JBR25FLE9BQU9jO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUCxNQUFNLEVBQUVSLE9BQU87Z0JBQzlCLElBQU1XLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNYLFVBQ3ZCYyxpQkFBaUJILFNBQVMsR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBL0MvQnBCO1lBK0M4RDs7O1lBRTFFc0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY1QsU0FBUztnQkFBSSxPQUFPUSxhQUFRLENBQUNDLGFBQWEsQ0FqRDVDdEIsNkJBaUQwRWE7WUFBWTs7O1dBakR0RmI7RUFBb0NxQixhQUFRIn0=