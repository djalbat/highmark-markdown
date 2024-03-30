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
            key: "tagName",
            value: function tagName(context) {
                var tagName = _ruleNameToHTMLMap.default[this.ruleName].tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = _ruleNameToHTMLMap.default[this.ruleName].className;
                return className;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = _constants.EMPTY_STRING;
                }
                var tagName = this.tagName(context);
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
                var tagName = this.tagName(context), closingTag = "<\\".concat(tagName, ">");
                return closingTag;
            }
        },
        {
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context);
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
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context);
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
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    this.setDOMElement(domElement);
                    var className = this.className(context), attributeName = this.attributeName(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHJ1bGVOYW1lVG9IVE1MTWFwW3RoaXMucnVsZU5hbWVdO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGAke3N0YXJ0aW5nVGFnfSR7dHJpbShjaGlsZE5vZGVzSFRNTCl9JHtjbG9zaW5nVGFnfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke3RyaW0oY2hpbGROb2Rlc0hUTUwpfVxuJHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPFxcXFwke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCk7XG5cbiAgICBsZXQgY2xhc3NIVE1MID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICBhdHRyaWJ1dGVIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2xhc3NIVE1MID0gYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYDtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBhdHRyaWJ1dGVIVE1MID0gYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpO1xuXG4gICAgbGV0IGNsYXNzSFRNTCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgYXR0cmlidXRlSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGNsYXNzSFRNTCA9IGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImA7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgYXR0cmlidXRlSFRNTCA9IGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY2hpbGROb2Rlcy5yZWR1Y2UoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUhUTUwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IChjaGlsZE5vZGVzSFRNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVIVE1MIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVET01FbGVtZW50ID0gY2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZURPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwidGFnTmFtZSIsImNvbnRleHQiLCJydWxlTmFtZVRvSFRNTE1hcCIsImNsYXNzTmFtZSIsImFzSFRNTCIsImluZGVudCIsInVuZGVmaW5lZCIsIkVNUFRZX1NUUklORyIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJ0cmltIiwic2VsZkNsb3NpbmdUYWciLCJhdHRyaWJ1dGVOYW1lIiwiY2xhc3NIVE1MIiwiYXR0cmlidXRlSFRNTCIsImF0dHJpYnV0ZVZhbHVlIiwiZ2V0Q2hpbGROb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlSFRNTCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJjaGlsZE5vZGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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