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
var _whitespace = require("../../utilities/whitespace");
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
            key: "content",
            value: function content(context) {
                var plainText = this.asPlainText(context), content = plainText; ///
                return content;
            }
        },
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
                var htmlNode = this; ///
                (0, _whitespace.assignIndexes)(htmlNode, context);
                _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                (0, _whitespace.deleteIndexes)(context);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                _get(_get_prototype_of(LineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var htmlNode = this; ///
                (0, _whitespace.assignIndexes)(htmlNode, context);
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
                (0, _whitespace.deleteIndexes)(context);
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText;
                var htmlNode = this; ///
                (0, _whitespace.assignIndexes)(htmlNode, context);
                childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                (0, _whitespace.deleteIndexes)(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7aW5zZXJ0QWZ0ZXJ3YXJkcywgcmVtb3ZlfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduSW5kZXhlcywgZGVsZXRlSW5kZXhlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvd2hpdGVzcGFjZVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBDQVJSSUFHRV9SRVRVUk4sIERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gcGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1heGltdW1MaW5lQ2hhcmFjdGVycyA9IERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBtYXhpbXVtTGluZUNoYXJhY3RlcnMpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGFzc2lnbkluZGV4ZXMoaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBDQVJSSUFHRV9SRVRVUk4sXG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZGVsZXRlSW5kZXhlcyhjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKGh0bWxOb2RlLCBjb250ZXh0KTtcblxuICAgIGxldCBwcmV2aW91c0NoaWxkTm9kZSA9IG51bGw7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKHByZXZpb3VzQ2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgICBpZiAocHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICAgICAgaWYgKCFjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9XG5gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG5cbiAgICAgIHByZXZpb3VzQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgY29uc3QgcHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChwcmV2aW91c0NoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgIGlmIChwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfVxuYDtcbiAgICB9XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BsYWluVGV4dDtcblxuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpczsgIC8vL1xuXG4gICAgYXNzaWduSW5kZXhlcyhodG1sTm9kZSwgY29udGV4dClcblxuICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBMaW5lSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IExpbmVIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTE5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwibGluZXMiLCJtYXhpbXVtTGluZUNoYXJhY3RlcnMiLCJERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImh0bWxOb2RlIiwiYXNzaWduSW5kZXhlcyIsImdldERPTUVsZW1lbnQiLCJDQVJSSUFHRV9SRVRVUk4iLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZGVsZXRlSW5kZXhlcyIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJwcmV2aW91c0NoaWxkTm9kZSIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsInByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJQbGFpblRleHRIVE1MTm9kZSIsImNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlIiwiY2hpbGROb2RlSFRNTCIsImFzSFRNTCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwidW5kZWZpbmVkIiwibGluZUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEE7NERBQ1M7bUJBRVM7MEJBQ007eUJBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsVUFDN0JELFVBQVVFLFdBQVksR0FBRztnQkFFL0IsT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSCxPQUFPO2dCQUNYLHFDQUFvRUEsUUFBNURJLHVCQUFBQSxvRUFBd0JDLDBDQUErQixtQ0FDekRKLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNGLFVBQzdCTSxrQkFBa0JMLFVB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