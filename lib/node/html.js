"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLNode;
    }
});
var _occamdom = require("occam-dom");
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _constants = require("../constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var HTMLNode = /*#__PURE__*/ function(Node) {
    _inherits(HTMLNode, Node);
    function HTMLNode() {
        _class_call_check(this, HTMLNode);
        return _call_super(this, HTMLNode, arguments);
    }
    _create_class(HTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName;
                var outerNode = this.getOuterNode(), nonTerminalNode = outerNode; ///
                ruleName = nonTerminalNode.getRuleName();
                return ruleName;
            }
        },
        {
            key: "tagName",
            value: function tagName(context) {
                var tagName;
                var ruleName = this.getRuleName();
                var element = _elementMap.default[ruleName];
                tagName = element.tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className;
                var ruleName = this.getRuleName();
                var element = _elementMap.default[ruleName];
                className = element.className;
                return className;
            }
        },
        {
            key: "closingTag",
            value: function closingTag(context) {
                var tagName = this.tagName(context), closingTag = "</".concat(tagName, ">");
                return closingTag;
            }
        },
        {
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context), classHTML = className !== null ? ' class="'.concat(className, '"') : _constants.EMPTY_STRING, attributeHTML = attributeName !== null && attributeValue !== null ? " ".concat(attributeName, '="').concat(attributeValue, '"') : _constants.EMPTY_STRING, startingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, ">");
                return startingTag;
            }
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context), classHTML = className !== null ? ' class="'.concat(className, '"') : _constants.EMPTY_STRING, attributeHTML = attributeName !== null && attributeValue !== null ? " ".concat(attributeName, '="').concat(attributeValue, '"') : _constants.EMPTY_STRING, selfClosingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, "/>");
                return selfClosingTag;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = null;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = null;
                return attributeValue;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = indent === null ? _constants.EMPTY_STRING : "".concat(_constants.DOUBLE_SPACE).concat(indent);
                return indent;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = _constants.EMPTY_STRING;
                }
                var html;
                var tagName = this.tagName(context);
                if (tagName === null) {
                    var childNodesHTML = this.childNodesAsHTML(indent, context);
                    html = childNodesHTML; ///
                } else {
                    indent = this.adjustIndent(indent);
                    var childNodesHTML1 = this.childNodesAsHTML(indent, context);
                    if (childNodesHTML1 !== null) {
                        var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                        html = indent === null ? "".concat(startingTag).concat(childNodesHTML1).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML1).concat(indent).concat(closingTag, "\n");
                    } else {
                        var selfClosingTag = this.selfClosingTag(context);
                        html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                    }
                }
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = this.reduceChildNode(function(childNodesHTML, childNode) {
                    var childNodeHTML = childNode.asHTML(indent, context);
                    if (childNodeHTML !== null) {
                        childNodesHTML = childNodesHTML === null ? childNodeHTML : "".concat(childNodesHTML).concat(childNodeHTML);
                    }
                    return childNodesHTML;
                }, null);
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = HTMLNode; ///
                }
                var node = _occamdom.Node.fromNothing(Class);
                return node;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = HTMLNode; ///
                }
                var node = _occamdom.Node.fromOuterNode(Class, outerNode);
                return node;
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZTsgIC8vL1xuXG4gICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGxldCB0YWdOYW1lO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE1hcFtydWxlTmFtZV07XG5cbiAgICAoeyB0YWdOYW1lIH0gPSBlbGVtZW50KTtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE1hcFtydWxlTmFtZV07XG5cbiAgICAoeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8LyR7dGFnTmFtZX0+YDtcblxuICAgIHJldHVybiBjbG9zaW5nVGFnO1xuICB9XG5cbiAgc3RhcnRpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0+YDtcblxuICAgIHJldHVybiBzdGFydGluZ1RhZztcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICBgJHtET1VCTEVfU1BBQ0V9JHtpbmRlbnR9YDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBsZXQgaHRtbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGNoaWxkTm9kZXNIVE1MOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IChjaGlsZE5vZGVzSFRNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwib3V0ZXJOb2RlIiwiZ2V0T3V0ZXJOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidGFnTmFtZSIsImNvbnRleHQiLCJlbGVtZW50IiwiZWxlbWVudE1hcCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImFkanVzdEluZGVudCIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsImFzSFRNTCIsInVuZGVmaW5lZCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIm5vZGUiLCJOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7d0JBTkE7aUVBRUU7eUJBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxrQkFBa0JGLFdBQVksR0FBRztnQkFFdkNELFdBQVdHLGdCQUFnQkosV0FBVztnQkFFdEMsT0FBT0M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlEO2dCQUVKLElBQU1KLFdBQVcsSUFBSSxDQUFDRCxXQUFXO2dCQUVqQyxJQUFNTyxVQUFVQyxtQkFBVSxDQUFDUCxTQUFTO2dCQUVqQ0ksVUFBWUUsUUFBWkY7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSCxPQUFPO2dCQUNmLElBQUlHO2dCQUVKLElBQU1SLFdBQVcsSUFBSSxDQUFDRCxXQUFXO2dCQUVqQyxJQUFNTyxVQUFVQyxtQkFBVSxDQUFDUCxTQUFTO2dCQUVqQ1EsWUFBY0YsUUFBZEU7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSixPQUFPO2dCQUNoQixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkksYUFBYSxBQUFDLEtBQVksT0FBUkwsU0FBUTtnQkFFaEMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZTCxPQUFPO2dCQUNqQixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0gsVUFDM0JNLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ04sVUFDbkNPLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1AsVUFDckNRLFlBQVksQUFBQ0wsY0FBYyxPQUNkLEFBQUMsV0FBb0IsT0FBVkEsV0FBVSxPQUNsQk0sdUJBQVksRUFDNUJDLGdCQUFnQixBQUFDLEFBQUNKLGtCQUFrQixRQUFVQyxtQkFBbUIsT0FDaEQsQUFBQyxJQUFxQkEsT0FBbEJELGVBQWMsTUFBbUIsT0FBZkMsZ0JBQWUsT0FDbENFLHVCQUFZLEVBQ2hDSixjQUFjLEFBQUMsSUFBYUcsT0FBVlQsU0FBc0JXLE9BQVpGLFdBQTBCLE9BQWRFLGVBQWM7Z0JBRTVELE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVgsT0FBTztnQkFDcEIsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJHLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNILFVBQzNCTSxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNOLFVBQ25DTyxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNQLFVBQ3JDUSxZQUFZLEFBQUNMLGNBQWMsT0FDZCxBQUFDLFdBQW9CLE9BQVZBLFdBQVUsT0FDbEJNLHVCQUFZLEVBQzVCQyxnQkFBZ0IsQUFBQyxBQUFDSixrQkFBa0IsUUFBVUMsbUJBQW1CLE9BQ2hELEFBQUMsSUFBcUJBLE9BQWxCRCxlQUFjLE1BQW1CLE9BQWZDLGdCQUFlLE9BQ2xDRSx1QkFBWSxFQUNoQ0UsaUJBQWlCLEFBQUMsSUFBYUgsT0FBVlQsU0FBc0JXLE9BQVpGLFdBQTBCLE9BQWRFLGVBQWM7Z0JBRS9ELE9BQU9DO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY04sT0FBTztnQkFDbkIsSUFBTU0sZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVQLE9BQU87Z0JBQ3BCLElBQU1PLGlCQUFpQjtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNO2dCQUNqQkEsU0FBUyxBQUFDQSxXQUFXLE9BQ1ZKLHVCQUFZLEdBQ1gsQUFBQyxHQUFpQkksT0FBZkMsdUJBQVksRUFBVSxPQUFQRDtnQkFFOUIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPRixNQUFNLEVBQUViLE9BQU87Z0JBQ3BCLElBQUlBLFlBQVlnQixXQUFXO29CQUN6QmhCLFVBQVVhLFFBQVEsR0FBRztvQkFFckJBLFNBQVNKLHVCQUFZO2dCQUN2QjtnQkFFQSxJQUFJUTtnQkFFSixJQUFNbEIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0M7Z0JBRTdCLElBQUlELFlBQVksTUFBTTtvQkFDcEIsSUFBTW1CLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDTixRQUFRYjtvQkFFckRpQixPQUFPQyxnQkFBaUIsR0FBRztnQkFDN0IsT0FBTztvQkFDTEwsU0FBUyxJQUFJLENBQUNELFlBQVksQ0FBQ0M7b0JBRTNCLElBQU1LLGtCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDTixRQUFRYjtvQkFFckQsSUFBSWtCLG9CQUFtQixNQUFNO3dCQUMzQixJQUFNYixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDTCxVQUMvQkksYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0o7d0JBRW5DaUIsT0FBTyxBQUFDSixXQUFXLE9BQ1gsQUFBQyxHQUFnQkssT0FBZGIsYUFBK0JELE9BQWpCYyxpQkFBNEIsT0FBWGQsY0FDaEMsQUFBQyxHQUFXQyxPQUFUUSxRQUNuQkssT0FENEJiLGFBQVksTUFDdkJRLE9BQWpCSyxpQkFBMEJkLE9BQVRTLFFBQW9CLE9BQVhULFlBQVc7b0JBRWpDLE9BQU87d0JBQ0wsSUFBTU8saUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDWDt3QkFFM0NpQixPQUFPLEFBQUNKLFdBQVcsT0FDVkYsaUJBQ0MsQUFBQyxHQUFXQSxPQUFURSxRQUF3QixPQUFmRixnQkFBZTtvQkFFdkM7Z0JBQ0Y7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJOLE1BQU0sRUFBRWIsT0FBTztnQkFDOUIsSUFBTWtCLGlCQUFpQixJQUFJLENBQUNFLGVBQWUsQ0FBQyxTQUFDRixnQkFBZ0JHO29CQUMzRCxJQUFNQyxnQkFBZ0JELFVBQVVOLE1BQU0sQ0FBQ0YsUUFBUWI7b0JBRS9DLElBQUlzQixrQkFBa0IsTUFBTTt3QkFDMUJKLGlCQUFpQixBQUFDQSxtQkFBbUIsT0FDbEJJLGdCQUNDLEFBQUMsR0FBbUJBLE9BQWpCSixnQkFBK0IsT0FBZEk7b0JBQzFDO29CQUVBLE9BQU9KO2dCQUNULEdBQUc7Z0JBRUgsT0FBT0E7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFJQSxVQUFVUixXQUFXO29CQUN2QlEsUUEzSmUvQixVQTJKRyxHQUFHO2dCQUN2QjtnQkFFQSxJQUFNZ0MsT0FBT0MsY0FBSSxDQUFDSCxXQUFXLENBQUNDO2dCQUU5QixPQUFPQztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0gsS0FBSyxFQUFFNUIsU0FBUztnQkFDbkMsSUFBSUEsY0FBY29CLFdBQVc7b0JBQzNCcEIsWUFBWTRCLE9BQVEsR0FBRztvQkFFdkJBLFFBdktlL0IsVUF1S0csR0FBRztnQkFDdkI7Z0JBRUEsSUFBTWdDLE9BQU9DLGNBQUksQ0FBQ0MsYUFBYSxDQUFDSCxPQUFPNUI7Z0JBRXZDLE9BQU82QjtZQUNUOzs7V0E3S21CaEM7cUJBQWlCaUMsY0FBSSJ9