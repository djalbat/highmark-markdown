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
            key: "content",
            value: function content(context) {
                var inlineText = this.inlineText(context), content = inlineText; ///
                return content;
            }
        },
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
                var content = this.content(context), textNode = document.createTextNode(content);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvc3Ryb25nbHlFbXBoYXNpc2VkVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi8uLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IFNUUk9OR19URVhUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IHN1cGVyLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBodG1sLCAgLy8vXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgaHRtbCA9IGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgaW5saW5lVGV4dCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MOyAgLy8vXG5cbiAgICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlubGluZVRleHQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBjaGlsZERPTUVsZW1lbnQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlIiwidGFnTmFtZSIsImVsZW1lbnRNYXAiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJjb250ZW50IiwiY29udGV4dCIsImlubGluZVRleHQiLCJhc0hUTUwiLCJpbmRlbnQiLCJodG1sIiwiY2hpbGROb2Rlc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiY2hpbGRET01FbGVtZW50IiwiY3JlYXRlQ2hpbGRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiZnJvbU5vdGhp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