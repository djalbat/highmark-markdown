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
var _constants = require("../../constants");
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
var _elementMap_STRONG_TEXT_RULE_NAME = _elementMap.default[_ruleNames.STRONG_TEXT_RULE_NAME], strongTextTagName = _elementMap_STRONG_TEXT_RULE_NAME.tagName;
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
                var plainText = this.childNodesAsPlainText(context), content = plainText, textNode = document.createTextNode(content);
                var tagName = strongTextTagName; ///
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
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                var childDOMElement = this.createChildDOMElement(context), domElement = childDOMElement; ///
                parentDOMElement = this.domElement;
                siblingDOMElement = null;
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var _$parentDOMElement = this.domElement, firstChild = _$parentDOMElement.firstChild, domElement = firstChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                parentDOMElement.removeChild(this.domElement);
                this.domElement = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvc3Ryb25nbHlFbXBoYXNpc2VkVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi8uLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFNUUk9OR19URVhUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB0YWdOYW1lOiBzdHJvbmdUZXh0VGFnTmFtZSB9ID0gZWxlbWVudE1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBwbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gcGxhaW5UZXh0LCAgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJvbmdUZXh0VGFnTmFtZTsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY2hpbGRET01FbGVtZW50ID0gdGhpcy5jcmVhdGVDaGlsZERPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuXG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudClcbiAgICB9XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IGA8JHtzdHJvbmdUZXh0VGFnTmFtZX0+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHtzdHJvbmdUZXh0VGFnTmFtZX0+YCxcbiAgICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdHJvbmdseUVtcGhhc2lzZWRUZXh0SFRNTE5vZGUiLCJlbGVtZW50TWFwIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwidGFnTmFtZSIsInN0cm9uZ1RleHRUYWdOYW1lIiwiY3JlYXRlQ2hpbGRET01FbGVtZW50IiwiY29udGV4dCIsImRvbUVsZW1lbnQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm1vdW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRET01FbGVtZW50IiwidW5tb3VudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImFkanVzdEluZGVudCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUkE7aUVBQ0U7eUJBRU07eUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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