"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _plain = /*#__PURE__*/ _interop_require_default(require("./text/plain"));
var _dom = require("../../utilities/dom");
var _constants = require("../../constants");
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
var LineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(LineHTMLNode, HTMLNode);
    function LineHTMLNode() {
        _class_call_check(this, LineHTMLNode);
        return _call_super(this, LineHTMLNode, arguments);
    }
    _create_class(LineHTMLNode, [
        {
            key: "lines",
            value: function lines(context) {
                var _context_maximumLineCharacters = context.maximumLineCharacters, maximumLineCharacters = _context_maximumLineCharacters === void 0 ? _constants.DEFAULT_MAXIMUM_LINE_CHARACTERS : _context_maximumLineCharacters, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / maximumLineCharacters + 1;
                return lines;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                _get(_get_prototype_of(LineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement);
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var previousChildNode = null;
                childNodesHTML = this.reduceChildNode(function(childNodesHTML, childNode) {
                    var previousChildNodePlainTextHTMLNode = _instanceof(previousChildNode, _plain.default);
                    if (previousChildNodePlainTextHTMLNode) {
                        var childNodePlainTextHTMLNode = _instanceof(childNode, _plain.default);
                        if (!childNodePlainTextHTMLNode) {
                            childNodesHTML = "".concat(childNodesHTML, "\n");
                        }
                    }
                    var childNodeHTML = childNode.asHTML(indent, context);
                    childNodesHTML = "".concat(childNodesHTML).concat(childNodeHTML);
                    previousChildNode = childNode; ///
                    return childNodesHTML;
                }, _constants.EMPTY_STRING);
                var previousChildNodePlainTextHTMLNode = _instanceof(previousChildNode, _plain.default);
                if (previousChildNodePlainTextHTMLNode) {
                    childNodesHTML = "".concat(childNodesHTML, "\n");
                }
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText;
                childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
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
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromNothing(Class);
                return lineHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromOuterNode(Class, outerNode);
                return lineHTMLNode;
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);
_define_property(LineHTMLNode, "tagName", "span");
_define_property(LineHTMLNode, "className", "line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXJ3YXJkcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENBUlJJQUdFX1JFVFVSTiwgREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBtYXhpbXVtTGluZUNoYXJhY3RlcnMgPSBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0TGVuZ3RoID0gcGxhaW5UZXh0Lmxlbmd0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzID0gcGxhaW5UZXh0TGVuZ3RoLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IChjaGFyYWN0ZXJzIC8gbWF4aW11bUxpbmVDaGFyYWN0ZXJzKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBDQVJSSUFHRV9SRVRVUk4sXG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBsZXQgcHJldmlvdXNDaGlsZE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChwcmV2aW91c0NoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgICAgaWYgKHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgICAgIGlmICghY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfVxuYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuXG4gICAgICBwcmV2aW91c0NoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGNvbnN0IHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAocHJldmlvdXNDaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICBpZiAocHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH1cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BsYWluVGV4dDtcblxuICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwibGluZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IExpbmVIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTGluZUhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsIm1heGltdW1MaW5lQ2hhcmFjdGVycyIsIkRFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dExlbmd0aCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsIkNBUlJJQUdFX1JFVFVSTiIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJ1bm1vdW50IiwibGFzdENoaWxkIiwicmVtb3ZlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwicHJldmlvdXNDaGlsZE5vZGUiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlIiwiUGxhaW5UZXh0SFRNTE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSIsImNoaWxkTm9kZUhUTUwiLCJhc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImxpbmVIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BOzREQUNTO21CQUVXO3lCQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFN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