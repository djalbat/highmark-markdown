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
                var html = _ruleNameToHTMLMap.default[this.ruleName], tagName = html.tagName;
                return tagName;
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var html = _ruleNameToHTMLMap.default[this.ruleName], className = html.className;
                return className;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
            }
        },
        {
            key: "getInnerHTML",
            value: function getInnerHTML(context) {
                var innerHTML = null;
                return innerHTML;
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName() {
                var attributeName = null;
                return attributeName;
            }
        },
        {
            key: "getAttributeValue",
            value: function getAttributeValue(context) {
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
                    if (childNodesHTML === null) {
                        var selfClosingTag = this.selfClosingTag(context);
                        html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                    } else {
                        var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                        html = indent === null ? "".concat(startingTag).concat(childNodesHTML).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                    }
                }
                return html;
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
            key: "closingTag",
            value: function closingTag(context) {
                var tagName = this.getTagName(), closingTag = "<\\".concat(tagName, ">");
                return closingTag;
            }
        },
        {
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.getTagName(), className = this.getClassName(), attributeName = this.getAttributeName();
                var classHTML = _constants.EMPTY_STRING, attributeHTML = _constants.EMPTY_STRING;
                if (className !== null) {
                    classHTML = ' class="'.concat(className, '"');
                }
                if (attributeName !== null) {
                    var attributeValue = this.getAttributeValue(context);
                    attributeHTML = " ".concat(attributeName, '="').concat(attributeValue, '"');
                }
                var startingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, ">");
                return startingTag;
            }
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {
                var tagName = this.getTagName(), className = this.getClassName();
                var classHTML = _constants.EMPTY_STRING;
                if (className !== null) {
                    classHTML = ' class="'.concat(className, '"');
                }
                var selfClosingTag = "<".concat(tagName).concat(classHTML, "/>");
                return selfClosingTag;
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
                    var className = this.getClassName();
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
                    }
                    var innerHTML = this.getInnerHTML(context);
                    if (innerHTML !== null) {
                        Object.assign(domElement, {
                            innerHTML: innerHTML
                        });
                    }
                    var attributeName = this.getAttributeName();
                    if (attributeName !== null) {
                        var attributeValue = this.getAttributeValue(context);
                        domElement.setAttribute(attributeName, attributeValue);
                    }
                    this.setDOMElement(domElement);
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
                        var domElement = childNode.createDOMElement(context);
                        if (domElement !== null) {
                            _this.insertDOMElement(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBhbWJpZ3VvdXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgYW1iaWd1b3VzKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0VGFnTmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgeyB0YWdOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBnZXRDbGFzc05hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3RoaXMucnVsZU5hbWVdLFxuICAgICAgICAgIHsgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldElubmVySFRNTChpbm5lckhUTUwpIHsgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDsgfVxuXG4gIGdldElubmVySFRNTChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gbnVsbDtcblxuICAgIHJldHVybiBpbm5lckhUTUw7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOYW1lKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpO1xuXG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgc2VsZkNsb3NpbmdUYWcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YFxuICAgICAgICAgICAgICAgICAgIDpgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8XFxcXCR7dGFnTmFtZX0+YDtcblxuICAgIHJldHVybiBjbG9zaW5nVGFnO1xuICB9XG5cbiAgc3RhcnRpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgIGxldCBjbGFzc0hUTUwgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgIGF0dHJpYnV0ZUhUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc0hUTUwgPSBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICAgIGF0dHJpYnV0ZUhUTUwgPSBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0+YDtcblxuICAgIHJldHVybiBzdGFydGluZ1RhZztcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKTtcblxuICAgIGxldCBjbGFzc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc0hUTUwgPSBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gKGNoaWxkTm9kZXNIVE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZUhUTUwgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmdldElubmVySFRNTChjb250ZXh0KTtcblxuICAgICAgaWYgKGlubmVySFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgICBpbm5lckhUTUxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsImFtYmlndW91cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImdldFRhZ05hbWUiLCJodG1sIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJ0YWdOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwic2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwiZ2V0SW5uZXJIVE1MIiwiY29udGV4dCIsImdldEF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lIiwiZ2V0QXR0cmlidXRlVmFsdWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImFzSFRNTCIsImluZGVudCIsInVuZGVmaW5lZCIsIkVNUFRZX1NUUklORyIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xhc3NIVE1MIiwiYXR0cmlidXRlSFRNTCIsImdldENoaWxkTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZUhUTUwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJmb3JFYWNoIiwiaW5zZXJ0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vblRlcm1pbmFsTm9kZSIsIm1hcmtkb3duTm9kZSIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJlbGVtZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxUEE7OztlQUFBOzs7NEJBblBnQzsyREFFVDs4REFDRzt3RUFDSTt5QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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