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
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _tagName = /*#__PURE__*/ _interop_require_default(require("../../../map/tagName"));
var _constants = require("../../../constants");
var _markdown = require("../../../ruleNames/markdown");
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
var StronglyEmphasisedTextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(StronglyEmphasisedTextHTMLNode, HTMLNode);
    function StronglyEmphasisedTextHTMLNode() {
        _class_call_check(this, StronglyEmphasisedTextHTMLNode);
        return _call_super(this, StronglyEmphasisedTextHTMLNode, arguments);
    }
    _create_class(StronglyEmphasisedTextHTMLNode, [
        {
            key: "createChildDOMElement",
            value: function createChildDOMElement(context) {
                var domElement;
                var tagName = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME], plainText = this.childNodesAsPlainText(context), content = plainText, textNode = document.createTextNode(content);
                domElement = document.createElement(tagName);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
                parentDOMElement = domElement; ///
                siblingDOMElement = null;
                var childDOMElement = this.createChildDOMElement(context);
                domElement = childDOMElement; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var domElement;
                domElement = this.getDOMElement();
                {
                    var _$parentDOMElement = domElement, firstChild = _$parentDOMElement.firstChild;
                    domElement = firstChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                domElement = this.getDOMElement();
                parentDOMElement.removeChild(domElement);
                this.resetDOMElement();
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                indent = this.adjustIndent(indent);
                childNodesHTML = _get(_get_prototype_of(StronglyEmphasisedTextHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                var startingTag = "<".concat(strongTextTagName, ">"), closingTag = "</".concat(strongTextTagName, ">"), html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                childNodesHTML = html; ///
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                return childNodesPlainText;
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
_define_property(StronglyEmphasisedTextHTMLNode, "tagName", "em");
_define_property(StronglyEmphasisedTextHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9zdHJvbmdseUVtcGhhc2lzZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vLi4vbWFwL3RhZ05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUVdLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSBwbGFpblRleHQsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkRE9NRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudClcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSBgPCR7c3Ryb25nVGV4dFRhZ05hbWV9PmAsXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8LyR7c3Ryb25nVGV4dFRhZ05hbWV9PmAsXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJlbVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlIiwiY3JlYXRlQ2hpbGRET01FbGVtZW50IiwiY29udGV4dCIsImRvbUVsZW1lbnQiLCJ0YWdOYW1lIiwidGFnTmFtZU1hcCIsIlNUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRSIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwibW91bnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRET01FbGVtZW50IiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZXNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhZGp1c3RJbmRlbnQiLCJzdGFydGluZ1RhZyIsInN0cm9uZ1RleHRUYWdOYW1lIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7OERBQ0U7eUJBRU07d0JBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxPQUFPO2dCQUMzQixJQUFJQztnQkFFSixJQUFNQyxVQUFVQyxnQkFBVSxDQUFDQyx3Q0FBOEIsQ0FBQyxFQUNwREMsWUFBWSxJQUFJLENBQUNDLHFCQUFxQixDQUFDTixVQUN2Q08sVUFBVUYsV0FDVkcsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNOLGFBQWFRLFNBQVNFLGFBQWEsQ0FBQ1Q7Z0JBRXBDLElBQU1VLG1CQUFtQlgsWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYU8sVUFBVSxHQUFHO2dCQUUxQkksaUJBQWlCQyxXQUFXLENBQUNaO2dCQUU3QkEsYUFBYVcsa0JBQW1CLEdBQUc7Z0JBRW5DLE9BQU9YO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUYsZ0JBQWdCLEVBQUVHLGlCQUFpQixFQUFFZixPQUFPO2dCQUNoRCxJQUFJQztnQkFFSkEsYUFBYSxJQUFJLENBQUNlLGdCQUFnQixDQUFDaEI7Z0JBRW5DLElBQUksQ0FBQ2lCLGFBQWEsQ0FBQ2hCO2dCQUVuQlcsaUJBQWlCTSxZQUFZLENBQUNqQixZQUFZYztnQkFFMUNILG1CQUFtQlgsWUFBWSxHQUFHO2dCQUVsQ2Msb0JBQW9CO2dCQUVwQixJQUFNSSxrQkFBa0IsSUFBSSxDQUFDcEIscUJBQXFCLENBQUNDO2dCQUVuREMsYUFBYWtCLGlCQUFpQixHQUFHO2dCQUVqQ1AsaUJBQWlCTSxZQUFZLENBQUNqQixZQUFZYztZQUM1Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUixnQkFBZ0IsRUFBRVosT0FBTztnQkFDL0IsSUFBSUM7Z0JBRUpBLGFBQWEsSUFBSSxDQUFDb0IsYUFBYTtnQkFFL0I7b0JBQ0UsSUFBTVQscUJBQW1CWCxZQUNuQnFCLGFBQWFWLG1CQUFpQlUsVUFBVTtvQkFFOUNyQixhQUFhcUIsWUFBYSxHQUFHO29CQUU3QlYsbUJBQWlCVyxXQUFXLENBQUN0QjtnQkFDL0I7Z0JBRUFBLGFBQWEsSUFBSSxDQUFDb0IsYUFBYTtnQkFFL0JULGlCQUFpQlcsV0FBVyxDQUFDdEI7Z0JBRTdCLElBQUksQ0FBQ3VCLGVBQWU7WUFDdEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUUxQixPQUFPO2dCQUM5QixJQUFJMkI7Z0JBRUpELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO2dCQUUzQkMsaUJBQWlCLHVCQXBFQTdCLDJDQW9FTTJCLG9CQUFOLElBQUssYUFBa0JDLFFBQVExQjtnQkFFaEQsSUFBTTZCLGNBQWMsQUFBQyxJQUFxQixPQUFsQkMsbUJBQWtCLE1BQ3BDQyxhQUFhLEFBQUMsS0FBc0IsT0FBbEJELG1CQUFrQixNQUNwQ0UsT0FBTyxBQUFDLEdBQVdILE9BQVRILFFBQ2xCQyxPQUQyQkUsYUFBWSxNQUN0QkgsT0FBakJDLGdCQUEwQkksT0FBVEwsUUFBb0IsT0FBWEssWUFBVztnQkFHbkNKLGlCQUFpQkssTUFBTyxHQUFHO2dCQUUzQixPQUFPTDtZQUNUOzs7WUFFQXJCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JOLE9BQU87Z0JBQzNCLElBQU1pQyxzQkFBc0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QscUJBQXFCRTtvQkFDckUsSUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXLENBQUNyQztvQkFFakRpQyxzQkFBc0IsQUFBQyxHQUF3QkcsT0FBdEJILHFCQUF5QyxPQUFuQkc7b0JBRS9DLE9BQU9IO2dCQUNULEdBQUdLLHVCQUFZO2dCQUVmLE9BQU9MO1lBQ1Q7Ozs7WUFNT00sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQWpHL0J6QztZQWlHaUU7OztZQUU3RTJDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsYUFBUSxDQUFDQyxhQUFhLENBbkc1QzNDLGdDQW1HNkU0QztZQUFZOzs7V0FuR3pGNUM7RUFBdUMwQyxhQUFRO0FBNkZsRSxpQkE3Rm1CMUMsZ0NBNkZaSSxXQUFVO0FBRWpCLGlCQS9GbUJKLGdDQStGWjZDLGFBQVkifQ==