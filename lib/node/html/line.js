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
                var node = this; ///
                (0, _whitespace.assignIndexes)(node, context);
                _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                (0, _whitespace.deleteIndexes)(context);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                _get(_get_prototype_of(LineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var node = this; ///
                (0, _whitespace.assignIndexes)(node, context);
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
                var node = this; ///
                (0, _whitespace.assignIndexes)(node, context);
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
            value: function fromNothing() {
                return _html.default.fromNothing(LineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(LineHTMLNode, outerNode);
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);
_define_property(LineHTMLNode, "tagName", "span");
_define_property(LineHTMLNode, "className", "line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7IGFzc2lnbkluZGV4ZXMsIGRlbGV0ZUluZGV4ZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3doaXRlc3BhY2VcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBtYXhpbXVtTGluZUNoYXJhY3RlcnMgPSBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0TGVuZ3RoID0gcGxhaW5UZXh0Lmxlbmd0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzID0gcGxhaW5UZXh0TGVuZ3RoLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IChjaGFyYWN0ZXJzIC8gbWF4aW11bUxpbmVDaGFyYWN0ZXJzKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlSW5kZXhlcyhjb250ZXh0KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IHByZXZpb3VzQ2hpbGROb2RlID0gbnVsbDtcblxuICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAocHJldmlvdXNDaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgICAgICBpZiAoIWNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH1cbmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcblxuICAgICAgcHJldmlvdXNDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBjb25zdCBwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKHByZXZpb3VzQ2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgaWYgKHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9XG5gO1xuICAgIH1cblxuICAgIGRlbGV0ZUluZGV4ZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGFzc2lnbkluZGV4ZXMobm9kZSwgY29udGV4dClcblxuICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhMaW5lSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKExpbmVIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsIm1heGltdW1MaW5lQ2hhcmFjdGVycyIsIkRFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dExlbmd0aCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsIm5vZGUiLCJhc3NpZ25JbmRleGVzIiwiZGVsZXRlSW5kZXhlcyIsInVubW91bnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJwcmV2aW91c0NoaWxkTm9kZSIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsInByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJQbGFpblRleHRIVE1MTm9kZSIsImNoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlIiwiY2hpbGROb2RlSFRNTCIsImFzSFRNTCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BOzREQUNTOzBCQUVlO3lCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7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