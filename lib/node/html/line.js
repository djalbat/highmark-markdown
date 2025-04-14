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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGxldCBwcmV2aW91c0NoaWxkTm9kZSA9IG51bGw7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gKHByZXZpb3VzQ2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgICBpZiAocHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICAgICAgaWYgKCFjaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9XG5gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG5cbiAgICAgIHByZXZpb3VzQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgY29uc3QgcHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChwcmV2aW91c0NoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgIGlmIChwcmV2aW91c0NoaWxkTm9kZVBsYWluVGV4dEhUTUxOb2RlKSB7XG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwibGluZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKExpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoTGluZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzSFRNTCIsInByZXZpb3VzQ2hpbGROb2RlIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwicHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSIsIlBsYWluVGV4dEhUTUxOb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZVBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTs0REFDUzt5QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBSUM7Z0JBRUosSUFBSUMsb0JBQW9CO2dCQUV4QkQsaUJBQWlCLElBQUksQ0FBQ0UsZUFBZSxDQUFDLFNBQUNGLGdCQUFnQkc7b0JBQ3JELElBQU1DLHFDQUFzQ0gsQUFBaUIsWUFBakJBLG1CQUE2QkksY0FBaUI7b0JBRTFGLElBQUlELG9DQUFvQzt3QkFDdEMsSUFBTUUsNkJBQThCSCxBQUFTLFlBQVRBLFdBQXFCRSxjQUFpQjt3QkFFMUUsSUFBSSxDQUFDQyw0QkFBNEI7NEJBQy9CTixpQkFBaUIsQUFBQyxHQUFpQixPQUFmQSxnQkFBZTt3QkFFckM7b0JBQ0Y7b0JBRUEsSUFBTU8sZ0JBQWdCSixVQUFVSyxNQUFNLENBQUNWLFFBQVFDO29CQUUvQ0MsaUJBQWlCLEFBQUMsR0FBbUJPLE9BQWpCUCxnQkFBK0IsT0FBZE87b0JBRXJDTixvQkFBb0JFLFdBQVksR0FBRztvQkFFbkMsT0FBT0g7Z0JBQ1QsR0FBR1MsdUJBQVk7Z0JBRWYsSUFBTUwscUNBQXNDSCxBQUFpQixZQUFqQkEsbUJBQTZCSSxjQUFpQjtnQkFFMUYsSUFBSUQsb0NBQW9DO29CQUN0Q0osaUJBQWlCLEFBQUMsR0FBaUIsT0FBZkEsZ0JBQWU7Z0JBRXJDO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCWCxPQUFPO2dCQUMzQixJQUFNWSxzQkFBc0IsSUFBSSxDQUFDVCxlQUFlLENBQUMsU0FBQ1MscUJBQXFCUjtvQkFDckUsSUFBTVMscUJBQXFCVCxVQUFVVSxXQUFXLENBQUNkO29CQUVqRFksc0JBQXNCLEFBQUMsR0FBd0JDLE9BQXRCRCxxQkFBeUMsT0FBbkJDO29CQUUvQyxPQUFPRDtnQkFDVCxHQUFHRix1QkFBWTtnQkFFZixPQUFPRTtZQUNUOzs7O1lBTU9HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FyRC9CbEI7WUFxRCtDOzs7WUFFM0RvQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXZENUNwQixjQXVEMkRxQjtZQUFZOzs7V0F2RHZFckI7RUFBcUJtQixhQUFRO0FBaURoRCxpQkFqRG1CbkIsY0FpRFpzQixXQUFVO0FBRWpCLGlCQW5EbUJ0QixjQW1EWnVCLGFBQVkifQ==