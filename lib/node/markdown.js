"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamparsers = require("occam-parsers");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _element = /*#__PURE__*/ _interop_require_default(require("../mixins/element"));
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../ruleNameToHTMLMap"));
var _string = require("../utilities/string");
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var MarkdownNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownNode, NonTerminalNode);
    var _super = _create_super(MarkdownNode);
    function MarkdownNode(ruleName, childNodes, precedence, opacity, domElement) {
        _class_call_check(this, MarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity);
        _this.domElement = domElement;
        return _this;
    }
    _create_class(MarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setDOMElement",
            value: function setDOMElement(domElement) {
                this.domElement = domElement;
            }
        },
        {
            key: "getTagName",
            value: function getTagName() {
                var tagName = _ruleNameToHTMLMap.default[this.ruleName].tagName;
                return tagName;
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var className = _ruleNameToHTMLMap.default[this.ruleName].className;
                return className;
            }
        },
        {
            key: "attributeName",
            value: function attributeName() {
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
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = _constants.EMPTY_STRING;
                }
                var tagName = this.getTagName();
                var html = null;
                if (tagName !== null) {
                    indent = this.adjustIndent(indent);
                    var childNodesHTML = this.childNodesAsHTML(indent, context);
                    if (childNodesHTML !== null) {
                        var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                        html = indent === null ? "".concat(startingTag).concat((0, _string.trim)(childNodesHTML)).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat((0, _string.trim)(childNodesHTML), "\n").concat(indent).concat(closingTag, "\n");
                    } else {
                        var selfClosingTag = this.selfClosingTag(context);
                        html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                    }
                }
                return html;
            }
        },
        {
            key: "closingTag",
            value: function closingTag(context) {
                var tagName = this.getTagName(), closingTag = "<\\".concat(tagName, ">");
                return closingTag;
            }
        },
        {
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.getTagName(), className = this.getClassName(), attributeName = this.attributeName();
                var classHTML = _constants.EMPTY_STRING, attributeHTML = _constants.EMPTY_STRING;
                if (className !== null) {
                    classHTML = ' class="'.concat(className, '"');
                }
                if (attributeName !== null) {
                    var attributeValue = this.attributeValue(context);
                    attributeHTML = " ".concat(attributeName, '="').concat(attributeValue, '"');
                }
                var startingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, ">");
                return startingTag;
            }
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {
                var tagName = this.getTagName(), className = this.getClassName(), attributeName = this.attributeName();
                var classHTML = _constants.EMPTY_STRING, attributeHTML = _constants.EMPTY_STRING;
                if (className !== null) {
                    classHTML = ' class="'.concat(className, '"');
                }
                if (attributeName !== null) {
                    var attributeValue = this.attributeValue(context);
                    attributeHTML = " ".concat(attributeName, '="').concat(attributeValue, '"');
                }
                var selfClosingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, "/>");
                return selfClosingTag;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                if (indent !== null) {
                    indent = "  ".concat(indent);
                }
                return indent;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), childNodesHTML = childNodes.reduce(function(childNodesHTML, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var childNodeHTML = childNode.asHTML(indent, context);
                        if (childNodeHTML !== null) {
                            childNodesHTML = childNodesHTML === null ? childNodeHTML : "".concat(childNodesHTML).concat(childNodeHTML);
                        }
                    }
                    return childNodesHTML;
                }, null);
                return childNodesHTML;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.getTagName();
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    this.setDOMElement(domElement);
                    var className = this.getClassName(), attributeName = this.attributeName();
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
                    }
                    if (attributeName !== null) {
                        var attributeValue = this.attributeValue(context);
                        domElement.setAttribute(attributeName, attributeValue);
                    }
                    this.createChildNodeDOMElements(context);
                }
                return domElement;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var _this = this;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var childNodeDOMElement = childNode.createDOMElement(context);
                        if (childNodeDOMElement !== null) {
                            _this.insertDOMElement(childNodeDOMElement);
                        }
                    }
                });
            }
        },
        {
            key: "insertDOMElement",
            value: function insertDOMElement(domElement) {
                var parentDOMElement = this.domElement, siblingDOMElement = null;
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var domElement = null, markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndOpacity.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    opacity,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownNode;
            }
        }
    ]);
    return MarkdownNode;
}(_occamparsers.NonTerminalNode);
Object.assign(MarkdownNode.prototype, _node.default);
Object.assign(MarkdownNode.prototype, _element.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFRhZ05hbWUoKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBydWxlTmFtZVRvSFRNTE1hcFt0aGlzLnJ1bGVOYW1lXTtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgZ2V0Q2xhc3NOYW1lKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBydWxlTmFtZVRvSFRNTE1hcFt0aGlzLnJ1bGVOYW1lXTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpO1xuXG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke3RyaW0oY2hpbGROb2Rlc0hUTUwpfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHt0cmltKGNoaWxkTm9kZXNIVE1MKX1cbiR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPFxcXFwke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKCk7XG5cbiAgICBsZXQgY2xhc3NIVE1MID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICBhdHRyaWJ1dGVIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2xhc3NIVE1MID0gYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYDtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBhdHRyaWJ1dGVIVE1MID0gYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgbGV0IGNsYXNzSFRNTCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgYXR0cmlidXRlSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGNsYXNzSFRNTCA9IGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImA7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgYXR0cmlidXRlSFRNTCA9IGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVIVE1MICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnNlcnRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImdldFRhZ05hbWUiLCJ0YWdOYW1lIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJnZXRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJjb250ZXh0IiwiYXNIVE1MIiwiaW5kZW50IiwidW5kZWZpbmVkIiwiRU1QVFlfU1RSSU5HIiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsInRyaW0iLCJzZWxmQ2xvc2luZ1RhZyIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJnZXRDaGlsZE5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJpbnNlcnRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vblRlcm1pbmFsTm9kZSIsIm1hcmtkb3duTm9kZSIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJlbGVtZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0T0E7OztlQUFBOzs7NEJBMU9nQzsyREFFVDs4REFDRzt3RUFDSTtzQkFFVDt5QkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw2QkFBRCxB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