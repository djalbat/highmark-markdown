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
                siblingDOMElement = _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                (0, _whitespace.deleteIndexes)(context);
                return siblingDOMElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRIVE1MTm9kZSBmcm9tIFwiLi90ZXh0L3BsYWluXCI7XG5cbmltcG9ydCB7IGFzc2lnbkluZGV4ZXMsIGRlbGV0ZUluZGV4ZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3doaXRlc3BhY2VcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBtYXhpbXVtTGluZUNoYXJhY3RlcnMgPSBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0TGVuZ3RoID0gcGxhaW5UZXh0Lmxlbmd0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzID0gcGxhaW5UZXh0TGVuZ3RoLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IChjaGFyYWN0ZXJzIC8gbWF4aW11bUxpbmVDaGFyYWN0ZXJzKSArIDE7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGFzc2lnbkluZGV4ZXMobm9kZSwgY29udGV4dCk7XG5cbiAgICBsZXQgcHJldmlvdXNDaGlsZE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSA9IChwcmV2aW91c0NoaWxkTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dEhUTUxOb2RlKTtcblxuICAgICAgaWYgKHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0SFRNTE5vZGUpO1xuXG4gICAgICAgIGlmICghY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfVxuYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuXG4gICAgICBwcmV2aW91c0NoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGNvbnN0IHByZXZpb3VzQ2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUgPSAocHJldmlvdXNDaGlsZE5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRIVE1MTm9kZSk7XG5cbiAgICBpZiAocHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH1cbmA7XG4gICAgfVxuXG4gICAgZGVsZXRlSW5kZXhlcyhjb250ZXh0KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNQbGFpblRleHQ7XG5cbiAgICBjb25zdCBub2RlID0gdGhpczsgIC8vL1xuXG4gICAgYXNzaWduSW5kZXhlcyhub2RlLCBjb250ZXh0KVxuXG4gICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGRlbGV0ZUluZGV4ZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwibGluZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKExpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoTGluZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwibGluZXMiLCJjb250ZXh0IiwibWF4aW11bUxpbmVDaGFyYWN0ZXJzIiwiREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50Iiwibm9kZSIsImFzc2lnbkluZGV4ZXMiLCJkZWxldGVJbmRleGVzIiwidW5tb3VudCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsInByZXZpb3VzQ2hpbGROb2RlIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwicHJldmlvdXNDaGlsZE5vZGVQbGFpblRleHRIVE1MTm9kZSIsIlBsYWluVGV4dEhUTUxOb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZVBsYWluVGV4dCIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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