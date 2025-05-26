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
var _dom = require("../../../utilities/dom");
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
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertAfterwards)(domElement, siblingDOMElement);
                parentDOMElement = domElement; ///
                var childDOMElement = this.createChildDOMElement(context);
                domElement = childDOMElement; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
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
                    (0, _dom.remove)(domElement, _$parentDOMElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9zdHJvbmdseUVtcGhhc2lzZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vLi4vbWFwL3RhZ05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV0sXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHBsYWluVGV4dCwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRE9NRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IGA8JHtzdHJvbmdUZXh0VGFnTmFtZX0+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHtzdHJvbmdUZXh0VGFnTmFtZX0+YCxcbiAgICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImVtXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUiLCJjcmVhdGVDaGlsZERPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsInRhZ05hbWUiLCJ0YWdOYW1lTWFwIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJtb3VudCIsInNpYmxpbmdET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEFmdGVyd2FyZHMiLCJjaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwidW5tb3VudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZCIsInJlc2V0RE9NRWxlbWVudCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImFkanVzdEluZGVudCIsInN0YXJ0aW5nVGFnIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJjbG9zaW5nVGFnIiwiaHRtbCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQQTs4REFDRTt5QkFFTTt3QkFDa0I7bUJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSwrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKLElBQU1DLFVBQVVDLGdCQUFVLENBQUNDLHdDQUE4QixDQUFDLEVBQ3BEQyxZQUFZLElBQUksQ0FBQ0MscUJBQXFCLENBQUNOLFVBQ3ZDTyxVQUFVRixXQUNWRyxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO2dCQUV6Q04sYUFBYVEsU0FBU0UsYUFBYSxDQUFDVDtnQkFFcEMsSUFBTVUsbUJBQW1CWCxZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhTyxVQUFVLEdBQUc7Z0JBRTFCSSxpQkFBaUJDLFdBQVcsQ0FBQ1o7Z0JBRTdCQSxhQUFhVyxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT1g7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRixnQkFBZ0IsRUFBRUcsaUJBQWlCLEVBQUVmLE9BQU87Z0JBQ2hELElBQUlDO2dCQUVKQSxhQUFhLElBQUksQ0FBQ2UsZ0JBQWdCLENBQUNoQjtnQkFFbkMsSUFBSSxDQUFDaUIsYUFBYSxDQUFDaEI7Z0JBRWxCYyxzQkFBc0IsT0FDckJHLElBQUFBLGdCQUFXLEVBQUNqQixZQUFZVyxrQkFBa0JHLHFCQUN4Q0ksSUFBQUEscUJBQWdCLEVBQUNsQixZQUFZYztnQkFFakNILG1CQUFtQlgsWUFBWSxHQUFHO2dCQUVsQyxJQUFNbUIsa0JBQWtCLElBQUksQ0FBQ3JCLHFCQUFxQixDQUFDQztnQkFFbkRDLGFBQWFtQixpQkFBaUIsR0FBRztnQkFFakNELElBQUFBLHFCQUFnQixFQUFDbEIsWUFBWVc7Z0JBRTdCWCxhQUFhLElBQUksQ0FBQ29CLGFBQWE7Z0JBRS9CTixvQkFBb0JkLFlBQVksR0FBRztnQkFFbkMsT0FBT2M7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVixnQkFBZ0IsRUFBRVosT0FBTztnQkFDL0IsSUFBSUM7Z0JBRUpBLGFBQWEsSUFBSSxDQUFDb0IsYUFBYTtnQkFFL0I7b0JBQ0UsSUFBTVQscUJBQW1CWCxZQUNuQnNCLGFBQWFYLG1CQUFpQlcsVUFBVTtvQkFFOUN0QixhQUFhc0IsWUFBYSxHQUFHO29CQUU3QkMsSUFBQUEsV0FBTSxFQUFDdkIsWUFBWVc7Z0JBQ3JCO2dCQUVBWCxhQUFhLElBQUksQ0FBQ29CLGFBQWE7Z0JBRS9CVCxpQkFBaUJhLFdBQVcsQ0FBQ3hCO2dCQUU3QixJQUFJLENBQUN5QixlQUFlO1lBQ3RCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFNUIsT0FBTztnQkFDOUIsSUFBSTZCO2dCQUVKRCxTQUFTLElBQUksQ0FBQ0UsWUFBWSxDQUFDRjtnQkFFM0JDLGlCQUFpQix1QkExRUEvQiwyQ0EwRU02QixvQkFBTixJQUFLLGFBQWtCQyxRQUFRNUI7Z0JBRWhELElBQU0rQixjQUFjLEFBQUMsSUFBcUIsT0FBbEJDLG1CQUFrQixNQUNwQ0MsYUFBYSxBQUFDLEtBQXNCLE9BQWxCRCxtQkFBa0IsTUFDcENFLE9BQU8sQUFBQyxHQUFXSCxPQUFUSCxRQUNsQkMsT0FEMkJFLGFBQVksTUFDdEJILE9BQWpCQyxnQkFBMEJJLE9BQVRMLFFBQW9CLE9BQVhLLFlBQVc7Z0JBR25DSixpQkFBaUJLLE1BQU8sR0FBRztnQkFFM0IsT0FBT0w7WUFDVDs7O1lBRUF2QixLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCTixPQUFPO2dCQUMzQixJQUFNbUMsc0JBQXNCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNELHFCQUFxQkU7b0JBQ3JFLElBQU1DLHFCQUFxQkQsVUFBVUUsV0FBVyxDQUFDdkM7b0JBRWpEbUMsc0JBQXNCLEFBQUMsR0FBd0JHLE9BQXRCSCxxQkFBeUMsT0FBbkJHO29CQUUvQyxPQUFPSDtnQkFDVCxHQUFHSyx1QkFBWTtnQkFFZixPQUFPTDtZQUNUOzs7O1lBTU9NLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0F2Ry9CM0M7WUF1R2lFOzs7WUFFN0U2QyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXpHNUM3QyxnQ0F5RzZFOEM7WUFBWTs7O1dBekd6RjlDO0VBQXVDNEMsYUFBUTtBQW1HbEUsaUJBbkdtQjVDLGdDQW1HWkksV0FBVTtBQUVqQixpQkFyR21CSixnQ0FxR1orQyxhQUFZIn0=