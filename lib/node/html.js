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
var _occamquery = require("occam-query");
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
var expressionStrings = [
    "//primaryHeading",
    "//secondaryHeading",
    "//tertiaryHeading",
    "//quaternaryHeading"
], queries = expressionStrings.map(function(expressionString) {
    var query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
});
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
                var ruleName = null;
                var outerNode = this.getOuterNode();
                if (outerNode !== null) {
                    var outerNodeNonTerminalNode = outerNode.isNonTerminalNode();
                    if (outerNodeNonTerminalNode) {
                        var nonTerminalNode = outerNode; ///
                        ruleName = nonTerminalNode.getRuleName();
                    }
                }
                return ruleName;
            }
        },
        {
            key: "tagName",
            value: function tagName(context) {
                var tagName = null;
                var ruleName = this.getRuleName();
                if (ruleName !== null) {
                    var element = _elementMap.default[ruleName];
                    tagName = element.tagName;
                }
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = null;
                var ruleName = this.getRuleName();
                if (ruleName !== null) {
                    var element = _elementMap.default[ruleName];
                    className = element.className;
                }
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
                if (indent !== null) {
                    indent = "".concat(_constants.DOUBLE_SPACE).concat(indent);
                }
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
            value: function fromNothing() {
                return _occamdom.Node.fromNothing(HTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _occamdom.Node.fromOuterNode(HTMLNode, outerNode);
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));
_define_property(HTMLNode, "queries", queries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZXhwcmVzc2lvblN0cmluZ3MgPSBbXG4gICAgICAgIFwiLy9wcmltYXJ5SGVhZGluZ1wiLFxuICAgICAgICBcIi8vc2Vjb25kYXJ5SGVhZGluZ1wiLFxuICAgICAgICBcIi8vdGVydGlhcnlIZWFkaW5nXCIsXG4gICAgICAgIFwiLy9xdWF0ZXJuYXJ5SGVhZGluZ1wiXG4gICAgICBdLFxuICAgICAgcXVlcmllcyA9IGV4cHJlc3Npb25TdHJpbmdzLm1hcCgoZXhwcmVzc2lvblN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBsZXQgcnVsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKTtcblxuICAgIGlmIChvdXRlck5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG91dGVyTm9kZU5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAob3V0ZXJOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZTsgIC8vL1xuXG4gICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IHRhZ05hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50TWFwW3J1bGVOYW1lXTtcblxuICAgICAgKHsgdGFnTmFtZSB9ID0gZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGxldCBjbGFzc05hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50TWFwW3J1bGVOYW1lXTtcblxuICAgICAgKHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgJHtET1VCTEVfU1BBQ0V9JHtpbmRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgbGV0IGh0bWw7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKHRhZ05hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBjaGlsZE5vZGVzSFRNTDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUhUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZUhUTUwgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBxdWVyaWVzID0gcXVlcmllcztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBOb2RlLmZyb21Ob3RoaW5nKEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gTm9kZS5mcm9tT3V0ZXJOb2RlKEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSFRNTE5vZGUiLCJleHByZXNzaW9uU3RyaW5ncyIsInF1ZXJpZXMiLCJtYXAiLCJleHByZXNzaW9uU3RyaW5nIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIm91dGVyTm9kZSIsImdldE91dGVyTm9kZSIsIm91dGVyTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidGFnTmFtZSIsImNvbnRleHQiLCJlbGVtZW50IiwiZWxlbWVudE1hcCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImFkanVzdEluZGVudCIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsImFzSFRNTCIsInVuZGVmaW5lZCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiZnJvbU5vdGhpbmciLCJOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQnFCQTs7O3dCQW5CQTswQkFDQztpRUFFQzt5QkFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQyxvQkFBb0I7SUFDbEI7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxFQUNEQyxVQUFVRCxrQkFBa0JFLEdBQUcsQ0FBQyxTQUFDQztJQUMvQixJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0g7SUFFekMsT0FBT0M7QUFDVDtBQUVTLElBQUEsQUFBTUwseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWTtnQkFFbkMsSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNRSwyQkFBMkJGLFVBQVVHLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JKLFdBQVksR0FBRzt3QkFFdkNELFdBQVdLLGdCQUFnQk4sV0FBVztvQkFDeEM7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlELFVBQVU7Z0JBRWQsSUFBTU4sV0FBVyxJQUFJLENBQUNELFdBQVc7Z0JBRWpDLElBQUlDLGFBQWEsTUFBTTtvQkFDckIsSUFBTVEsVUFBVUMsbUJBQVUsQ0FBQ1QsU0FBUztvQkFFakNNLFVBQVlFLFFBQVpGO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsT0FBTztnQkFDZixJQUFJRyxZQUFZO2dCQUVoQixJQUFNVixXQUFXLElBQUksQ0FBQ0QsV0FBVztnQkFFakMsSUFBSUMsYUFBYSxNQUFNO29CQUNyQixJQUFNUSxVQUFVQyxtQkFBVSxDQUFDVCxTQUFTO29CQUVqQ1UsWUFBY0YsUUFBZEU7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSixPQUFPO2dCQUNoQixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkksYUFBYSxBQUFDLEtBQVksT0FBUkwsU0FBUTtnQkFFaEMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZTCxPQUFPO2dCQUNqQixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0gsVUFDM0JNLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ04sVUFDbkNPLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1AsVUFDckNRLFlBQVksQUFBQ0wsY0FBYyxPQUNkLEFBQUMsV0FBb0IsT0FBVkEsV0FBVSxPQUNsQk0sdUJBQVksRUFDNUJDLGdCQUFnQixBQUFDLEFBQUNKLGtCQUFrQixRQUFVQyxtQkFBbUIsT0FDaEQsQUFBQyxJQUFxQkEsT0FBbEJELGVBQWMsTUFBbUIsT0FBZkMsZ0JBQWUsT0FDbENFLHVCQUFZLEVBQ2hDSixjQUFjLEFBQUMsSUFBYUcsT0FBVlQsU0FBc0JXLE9BQVpGLFdBQTBCLE9BQWRFLGVBQWM7Z0JBRTVELE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVgsT0FBTztnQkFDcEIsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJHLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNILFVBQzNCTSxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNOLFVBQ25DTyxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNQLFVBQ3JDUSxZQUFZLEFBQUNMLGNBQWMsT0FDZCxBQUFDLFdBQW9CLE9BQVZBLFdBQVUsT0FDbEJNLHVCQUFZLEVBQzVCQyxnQkFBZ0IsQUFBQyxBQUFDSixrQkFBa0IsUUFBVUMsbUJBQW1CLE9BQ2hELEFBQUMsSUFBcUJBLE9BQWxCRCxlQUFjLE1BQW1CLE9BQWZDLGdCQUFlLE9BQ2xDRSx1QkFBWSxFQUNoQ0UsaUJBQWlCLEFBQUMsSUFBYUgsT0FBVlQsU0FBc0JXLE9BQVpGLFdBQTBCLE9BQWRFLGVBQWM7Z0JBRS9ELE9BQU9DO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY04sT0FBTztnQkFDbkIsSUFBTU0sZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVQLE9BQU87Z0JBQ3BCLElBQU1PLGlCQUFpQjtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNO2dCQUNqQixJQUFJQSxXQUFXLE1BQU07b0JBQ25CQSxTQUFTLEFBQUMsR0FBaUJBLE9BQWZDLHVCQUFZLEVBQVUsT0FBUEQ7Z0JBQzdCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0YsTUFBTSxFQUFFYixPQUFPO2dCQUNwQixJQUFJQSxZQUFZZ0IsV0FBVztvQkFDekJoQixVQUFVYSxRQUFRLEdBQUc7b0JBRXJCQSxTQUFTSix1QkFBWTtnQkFDdkI7Z0JBRUEsSUFBSVE7Z0JBRUosSUFBTWxCLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDO2dCQUU3QixJQUFJRCxZQUFZLE1BQU07b0JBQ3BCLElBQU1tQixpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ04sUUFBUWI7b0JBRXJEaUIsT0FBT0MsZ0JBQWlCLEdBQUc7Z0JBQzdCLE9BQU87b0JBQ0xMLFNBQVMsSUFBSSxDQUFDRCxZQUFZLENBQUNDO29CQUUzQixJQUFNSyxrQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ04sUUFBUWI7b0JBRXJELElBQUlrQixvQkFBbUIsTUFBTTt3QkFDM0IsSUFBTWIsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0wsVUFDL0JJLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNKO3dCQUVuQ2lCLE9BQU8sQUFBQ0osV0FBVyxPQUNYLEFBQUMsR0FBZ0JLLE9BQWRiLGFBQStCRCxPQUFqQmMsaUJBQTRCLE9BQVhkLGNBQ2hDLEFBQUMsR0FBV0MsT0FBVFEsUUFDbkJLLE9BRDRCYixhQUFZLE1BQ3ZCUSxPQUFqQkssaUJBQTBCZCxPQUFUUyxRQUFvQixPQUFYVCxZQUFXO29CQUVqQyxPQUFPO3dCQUNMLElBQU1PLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ1g7d0JBRTNDaUIsT0FBTyxBQUFDSixXQUFXLE9BQ1ZGLGlCQUNDLEFBQUMsR0FBV0EsT0FBVEUsUUFBd0IsT0FBZkYsZ0JBQWU7b0JBRXZDO2dCQUNGO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCTixNQUFNLEVBQUViLE9BQU87Z0JBQzlCLElBQU1rQixpQkFBaUIsSUFBSSxDQUFDRSxlQUFlLENBQUMsU0FBQ0YsZ0JBQWdCRztvQkFDM0QsSUFBTUMsZ0JBQWdCRCxVQUFVTixNQUFNLENBQUNGLFFBQVFiO29CQUUvQyxJQUFJc0Isa0JBQWtCLE1BQU07d0JBQzFCSixpQkFBaUIsQUFBQ0EsbUJBQW1CLE9BQ2xCSSxnQkFDQyxBQUFDLEdBQW1CQSxPQUFqQkosZ0JBQStCLE9BQWRJO29CQUMxQztvQkFFQSxPQUFPSjtnQkFDVCxHQUFHO2dCQUVILE9BQU9BO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGNBQUksQ0FBQ0QsV0FBVyxDQXRLM0J2QztZQXNLdUM7OztZQUVuRHlDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWMvQixTQUFTO2dCQUFJLE9BQU84QixjQUFJLENBQUNDLGFBQWEsQ0F4S3hDekMsVUF3S21EVTtZQUFZOzs7V0F4Sy9EVjtxQkFBaUJ3QyxjQUFJO0FBb0t4QyxpQkFwS21CeEMsVUFvS1pFLFdBQVVBIn0=