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
                        html = indent === null ? "".concat(startingTag).concat(childNodesHTML).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBhbWJpZ3VvdXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgYW1iaWd1b3VzKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0VGFnTmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgeyB0YWdOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBnZXRDbGFzc05hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3RoaXMucnVsZU5hbWVdLFxuICAgICAgICAgIHsgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldElubmVySFRNTChpbm5lckhUTUwpIHsgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCk7XG5cbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPFxcXFwke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKCk7XG5cbiAgICBsZXQgY2xhc3NIVE1MID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICBhdHRyaWJ1dGVIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2xhc3NIVE1MID0gYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYDtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBhdHRyaWJ1dGVIVE1MID0gYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XG5cbiAgICBsZXQgY2xhc3NIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2xhc3NIVE1MID0gYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVIVE1MICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZSgpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnNlcnRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJhbWJpZ3VvdXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRUYWdOYW1lIiwiaHRtbCIsInJ1bGVOYW1lVG9IVE1MTWFwIiwidGFnTmFtZSIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInNldElubmVySFRNTCIsImlubmVySFRNTCIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNvbnRleHQiLCJhc0hUTUwiLCJpbmRlbnQiLCJ1bmRlZmluZWQiLCJFTVBUWV9TVFJJTkciLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJzZWxmQ2xvc2luZ1RhZyIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJnZXRDaGlsZE5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJpbnNlcnRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwicHJvdG90eXBlIiwibm9kZU1peGlucyIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNPQTs7O2VBQUE7Ozs0QkFwT2dDOzJEQUVUOzhEQUNHO3dFQUNJO3lCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1FDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEL0RMOztrQ0FFSUMsVUFBVUMsWUFBWUMsWUFBWUM7UUFFeEMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpoQkw7O1lBT0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUks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