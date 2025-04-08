"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StronglyEmphasisedTextHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../../elementMap"));
var _ruleNames = require("../../ruleNames");
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
var tagName = _elementMap.default[_ruleNames.STRONG_TEXT_RULE_NAME].tagName;
var StronglyEmphasisedTextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(StronglyEmphasisedTextHTMLNode, HTMLNode);
    function StronglyEmphasisedTextHTMLNode() {
        _class_call_check(this, StronglyEmphasisedTextHTMLNode);
        return _call_super(this, StronglyEmphasisedTextHTMLNode, arguments);
    }
    _create_class(StronglyEmphasisedTextHTMLNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = _get(_get_prototype_of(StronglyEmphasisedTextHTMLNode.prototype), "asHTML", this).call(this, indent, context);
                var childNodesHTML = html, startingTag = "<".concat(tagName, ">"), closingTag = "</".concat(tagName, ">");
                html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        },
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = this.fromSecondChildNode(function(secondChildNode) {
                    var indent = null, inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context), inlineText = inlineTextMarkdownNodeHTML; ///
                    return inlineText;
                });
                return inlineText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                domElement = document.createElement(tagName);
                var parentDOMElement = domElement, childDOMElement = this.createChildDOMElement(context);
                domElement = childDOMElement; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "createChildDOMElement",
            value: function createChildDOMElement(context) {
                var domElement;
                var inlineText = this.inlineText(context), content = inlineText; ///
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(StronglyEmphasisedTextHTMLNode.prototype), "createDOMElement", this).call(this, context);
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
                return _html.default.fromNothing(StronglyEmphasisedTextHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode);
            }
        }
    ]);
    return StronglyEmphasisedTextHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvc3Ryb25nbHlFbXBoYXNpc2VkVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi8uLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IFNUUk9OR19URVhUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gc3VwZXIuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGh0bWwsICAvLy9cbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfT5gLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICBodG1sID0gYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgaW5saW5lVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cblxuICAgICAgcmV0dXJuIGlubGluZVRleHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IGlubGluZVRleHQ7IC8vL1xuXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUiLCJ0YWdOYW1lIiwiZWxlbWVudE1hcCIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJodG1sIiwiY2hpbGROb2Rlc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJpbmxpbmVUZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImNoaWxkRE9NRWxlbWVudCIsImNyZWF0ZUNoaWxkRE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY29udGVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEE7aUVBQ0U7eUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEFBQUVDLFVBQVlDLG1CQUFVLENBQUNDLGdDQUFxQixDQUFDLENBQTdDRjtBQUVPLElBQUEsQUFBTUQsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPLHVCQUZNUCwyQ0FFQUksVUFBTixJQUFLLGFBQVFDLFFBQVFDO2dCQUVoQyxJQUFNRSxpQkFBaUJELE1BQ2pCRSxjQUFjLEFBQUMsSUFBVyxPQUFSUixTQUFRLE1BQzFCUyxhQUFhLEFBQUMsS0FBWSxPQUFSVCxTQUFRO2dCQUVoQ00sT0FBTyxBQUFDLEdBQWdCQyxPQUFkQyxhQUErQkMsT0FBakJGLGdCQUE0QixPQUFYRTtnQkFFekMsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXTCxPQUFPO2dCQUNoQixJQUFNSyxhQUFhLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQzNDLElBQU1SLFNBQVMsTUFDVFMseUJBQXlCRCxpQkFDekJFLDZCQUE2QkQsdUJBQXVCVixNQUFNLENBQUNDLFFBQVFDLFVBQ25FSyxhQUFhSSw0QkFBNkIsR0FBRztvQkFFbkQsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJWLE9BQU87Z0JBQ3RCLElBQUlXO2dCQUVKQSxhQUFhQyxTQUFTQyxhQUFhLENBQUNsQjtnQkFFcEMsSUFBTW1CLG1CQUFtQkgsWUFDbkJJLGtCQUFrQixJQUFJLENBQUNDLHFCQUFxQixDQUFDaEI7Z0JBRW5EVyxhQUFhSSxpQkFBaUIsR0FBRztnQkFFakNELGlCQUFpQkcsV0FBVyxDQUFDTjtnQkFFN0JBLGFBQWFHLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmhCLE9BQU87Z0JBQzNCLElBQUlXO2dCQUVKLElBQU1OLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNMLFVBQzdCa0IsVUFBVWIsWUFBWSxHQUFHO2dCQUUvQixJQUFNYyxXQUFXUCxTQUFTUSxjQUFjLENBQUNGO2dCQUV6Q1AsYUFBYSx1QkFuRElqQiwyQ0FtREVnQixvQkFBTixJQUFLLGFBQWtCVjtnQkFFcEMsSUFBTWMsbUJBQW1CSCxZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhUSxVQUFVLEdBQUc7Z0JBRTFCTCxpQkFBaUJHLFdBQVcsQ0FBQ047Z0JBRTdCQSxhQUFhRyxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0g7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBaEUvQjNCO1lBZ0VpRTs7O1lBRTdFNkIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0FsRTVDN0IsZ0NBa0U2RThCO1lBQVk7OztXQWxFekY5QjtFQUF1QzRCLGFBQVEifQ==