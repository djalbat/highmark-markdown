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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7aW5zZXJ0QWZ0ZXJ3YXJkcywgcmVtb3ZlfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduSW5kZXhlcywgZGVsZXRlSW5kZXhlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvd2hpdGVzcGFjZVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBDQVJSSUFHRV9SRVRVUk4sIERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgbWF4aW11bUxpbmVDaGFyYWN0ZXJzID0gREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbGFpblRleHQgPSB0aGlzLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dExlbmd0aCA9IHBsYWluVGV4dC5sZW5ndGgsXG4gICAgICAgICAgY2hhcmFjdGVycyA9IHBsYWluVGV4dExlbmd0aCwgLy8vXG4gICAgICAgICAgbGluZXMgPSAoY2hhcmFjdGVycyAvIG1heGltdW1MaW5lQ2hhcmFjdGVycykgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpczsgIC8vL1xuXG4gICAgYXNzaWduSW5kZXhlcyhodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgY29uc3QgY29udGVudCA9IENBUlJJQUdFX1JFVFVSTixcbiAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGFzc2lnbkluZGV4ZXMoaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IHByZXZpb3VzQ2hpbGROb2RlID0gbnVsbDtcblxuICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAocHJldmlvdXNDaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgICAgICBpZiAoIWNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH1cbmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcblxuICAgICAgcHJldmlvdXNDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBjb25zdCBwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKHByZXZpb3VzQ2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgaWYgKHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9XG5gO1xuICAgIH1cblxuICAgIGRlbGV0ZUluZGV4ZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuXG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKGh0bWxOb2RlLCBjb250ZXh0KVxuXG4gICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGRlbGV0ZUluZGV4ZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwibGluZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IExpbmVIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTGluZUhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsIm1heGltdW1MaW5lQ2hhcmFjdGVycyIsIkRFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dExlbmd0aCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJodG1sTm9kZSIsImFzc2lnbkluZGV4ZXMiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsIkNBUlJJQUdFX1JFVFVSTiIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJkZWxldGVJbmRleGVzIiwidW5tb3VudCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsInByZXZpb3VzQ2hpbGROb2RlIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwicHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSIsIlBsYWluVGV4dEhUTUxOb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZVBsYWluVGV4dCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJsaW5lSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQQTs0REFDUzttQkFFUzswQkFDTTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxxQ0FBb0VBLFFBQTVEQyx1QkFBQUEsb0VBQXdCQywwQ0FBK0IsbUNBQ3pEQyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixVQUM3Qkssa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyxhQUFhRixpQkFDYk4sUUFBUSxBQUFDUSxhQUFhTix3QkFBeUI7Z0JBRXJELE9BQU9GO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFVixPQUFPO2dCQUNoRCxJQUFJVztnQkFFSixJQUFNQyxXQUFXLElBQUksRUFBRyxHQUFHO2dCQUUzQkMsSUFBQUEseUJBQWEsRUFBQ0QsVUFBVVo7Z0JBRXhCLHVCQWxCaUJGLHlCQWtCWFUsU0FBTixJQUFLLGFBQU9DLGtCQUFr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