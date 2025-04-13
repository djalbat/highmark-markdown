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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(PageNumberDirectiveHTMLNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGlyZWN0aXZlL3BhZ2VOdW1iZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge30gIC8vL1xuXG4gIHRhZ05hbWUoY29udGV4dCkge30gLy8vXG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHt9IC8vL1xuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge30gIC8vL1xuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHt9IC8vL1xuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHt9ICAvLy9cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHt9IC8vL1xuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHt9ICAvLy9cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7fSAvLy9cblxuICBnZXRQYWdlTnVtYmVyKCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuZ2V0UGFnZU51bWJlcigpOyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBwYWdlTnVtYmVyO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInRhZ05hbWUiLCJjb250ZXh0IiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwic2VsZkNsb3NpbmdUYWciLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJnZXRQYWdlTnVtYmVyIiwib3V0ZXJOb2RlIiwiY29udGVudCIsInBhZ2VOdW1iZXIiLCJhc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJodG1sIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZSxFQUFHLEdBQUc7OztZQUVyQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7OztZQUV2QkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVELE9BQU8sR0FBRyxFQUFFLEdBQUc7OztZQUV6QkUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLE9BQU8sR0FBRyxFQUFHLEdBQUc7OztZQUUzQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlILE9BQU8sR0FBRyxFQUFFLEdBQUc7OztZQUUzQkksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVKLE9BQU8sR0FBRyxFQUFHLEdBQUc7OztZQUUvQkssS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNMLE9BQU8sR0FBRyxFQUFFLEdBQUc7OztZQUU3Qk0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLE9BQU8sR0FBRyxFQUFHLEdBQUc7OztZQUUvQk8sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLE1BQU0sR0FBRyxFQUFFLEdBQUc7OztZQUUzQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxhQUFhO1lBQUk7OztZQUV6REUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFYLE9BQU87Z0JBQ2IsSUFBTVksYUFBYSxJQUFJLENBQUNILGFBQWEsSUFDL0JFLFVBQVVDO2dCQUVoQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE1BQU0sRUFBRVIsT0FBTztnQkFDcEJRLFNBQVMsSUFBSSxDQUFDRCxZQUFZLENBQUNDO2dCQUUzQixJQUFNTSxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1AsUUFBUVIsVUFDL0NHLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNILFVBQy9CRSxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRixVQUM3QmdCLE9BQU8sQUFBQyxHQUFXYixPQUFUSyxRQUF1Qk0sT0FBZFgsYUFBK0JELE9BQWpCWSxnQkFBNEIsT0FBWFosWUFBVztnQkFHbkUsT0FBT2M7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJQLE1BQU0sRUFBRVIsT0FBTztnQkFDOUIsSUFBTVcsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1gsVUFDdkJjLGlCQUFpQkgsU0FBUyxHQUFHO2dCQUVuQyxPQUFPRztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQmpCLE9BQU87Z0JBQ3RCLElBQUlrQjtnQkFFSixJQUFNUCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDWCxVQUN2Qm1CLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ1Y7Z0JBRXpDTyxhQUFhLHVCQXJESXJCLHdDQXFERW9CLG9CQUFOLElBQUssYUFBa0JqQjtnQkFFcEMsSUFBTXNCLG1CQUFtQkosWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYUMsVUFBVSxHQUFHO2dCQUUxQkcsaUJBQWlCQyxXQUFXLENBQUNMO2dCQUU3QkEsYUFBYUksa0JBQW1CLEdBQUc7Z0JBRW5DLE9BQU9KO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQWxFL0IzQjtZQWtFOEQ7OztZQUUxRTZCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNoQixTQUFTO2dCQUFJLE9BQU9lLGFBQVEsQ0FBQ0MsYUFBYSxDQXBFNUM3Qiw2QkFvRTBFYTtZQUFZOzs7V0FwRXRGYjtFQUFvQzRCLGFBQVEifQ==