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
    function MarkdownNode(ruleName, childNodes, precedence, ambiguous, domElement) {
        _class_call_check(this, MarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, ambiguous);
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
            key: "isEndOfLineMarkdownNode",
            value: function isEndOfLineMarkdownNode() {
                var endOfLineMarkdownNode = false;
                return endOfLineMarkdownNode;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
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
                        var childNodeEndOfLineMarkdownNode = childNode.isEndOfLineMarkdownNode();
                        if (!childNodeEndOfLineMarkdownNode) {
                            var childNodeHTML = childNode.asHTML(indent, context);
                            if (childNodeHTML !== null) {
                                childNodesHTML = childNodesHTML === null ? childNodeHTML : "".concat(childNodesHTML).concat(childNodeHTML);
                            }
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
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var domElement = null, markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndAmbiguous.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    ambiguous,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIGFtYmlndW91cywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBhbWJpZ3VvdXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lTWFya2Rvd25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgYXR0cmlidXRlTmFtZSgpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHt0cmltKGNoaWxkTm9kZXNIVE1MKX0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7dHJpbShjaGlsZE5vZGVzSFRNTCl9XG4ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZkNsb3NpbmdUYWcgOiAgLy8vXG4gICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDxcXFxcJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgbGV0IGNsYXNzSFRNTCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgYXR0cmlidXRlSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGNsYXNzSFRNTCA9IGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImA7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgYXR0cmlidXRlSFRNTCA9IGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoKTtcblxuICAgIGxldCBjbGFzc0hUTUwgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgIGF0dHJpYnV0ZUhUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc0hUTUwgPSBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICAgIGF0dHJpYnV0ZUhUTUwgPSBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gYCAgJHtpbmRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlRW5kT2ZMaW5lTWFya2Rvd25Ob2RlID0gY2hpbGROb2RlLmlzRW5kT2ZMaW5lTWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGVFbmRPZkxpbmVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUhUTUwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gKGNoaWxkTm9kZXNIVE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnNlcnRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJhbWJpZ3VvdXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInJ1bGVOYW1lVG9IVE1MTWFwIiwiZ2V0Q2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaXNFbmRPZkxpbmVNYXJrZG93bk5vZGUiLCJlbmRPZkxpbmVNYXJrZG93bk5vZGUiLCJzZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJjb250ZXh0IiwiYXNIVE1MIiwiaW5kZW50IiwidW5kZWZpbmVkIiwiRU1QVFlfU1RSSU5HIiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsInRyaW0iLCJzZWxmQ2xvc2luZ1RhZyIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJnZXRDaGlsZE5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVFbmRPZkxpbmVNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJpbnNlcnRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwicHJvdG90eXBlIiwibm9kZU1peGlucyIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdQQTs7O2VBQUE7Ozs0QkF0UGdDOzJEQUVUOzhEQUNHO3dFQUNJO3NCQUVUO3lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1FDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEL0RMOztrQ0FFSUMsVUFBVUMsWUFBWUMsWUFBWUM7UUFFeEMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpoQkw7O1lBT0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxVQUFZQywwQkFBaUIsQ0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQyxDQUE1Q1E7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFB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