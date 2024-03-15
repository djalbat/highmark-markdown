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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWFya2Rvd25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIGFtYmlndW91cywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBhbWJpZ3VvdXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZSgpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHt0cmltKGNoaWxkTm9kZXNIVE1MKX0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7dHJpbShjaGlsZE5vZGVzSFRNTCl9XG4ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZkNsb3NpbmdUYWcgOiAgLy8vXG4gICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDxcXFxcJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgbGV0IGNsYXNzSFRNTCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgYXR0cmlidXRlSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIGNsYXNzSFRNTCA9IGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImA7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgYXR0cmlidXRlSFRNTCA9IGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoKTtcblxuICAgIGxldCBjbGFzc0hUTUwgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgIGF0dHJpYnV0ZUhUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc0hUTUwgPSBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICAgIGF0dHJpYnV0ZUhUTUwgPSBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gYCAgJHtpbmRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gKGNoaWxkTm9kZXNIVE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZUhUTUwgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZURPTUVsZW1lbnQgPSBjaGlsZE5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChjaGlsZE5vZGVET01FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5zZXJ0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwiYW1iaWd1b3VzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJydWxlTmFtZVRvSFRNTE1hcCIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNvbnRleHQiLCJhc0hUTUwiLCJpbmRlbnQiLCJ1bmRlZmluZWQiLCJFTVBUWV9TVFJJTkciLCJodG1sIiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwidHJpbSIsInNlbGZDbG9zaW5nVGFnIiwiY2xhc3NIVE1MIiwiYXR0cmlidXRlSFRNTCIsImdldENoaWxkTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZUhUTUwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGROb2RlRE9NRWxlbWVudCIsImluc2VydERPTUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNE9BOzs7ZUFBQTs7OzRCQTFPZ0M7MkRBRVQ7OERBQ0c7d0VBQ0k7c0JBRVQ7eUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElB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