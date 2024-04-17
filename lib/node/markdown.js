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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
            key: "addChildNode",
            value: function addChildNode(childNode) {
                var childNodes = this.getChildNodes();
                childNodes.push(childNode);
            }
        },
        {
            key: "removeChildNode",
            value: function removeChildNode(childNode) {
                var childNodes = this.getChildNodes(), index = childNodes.indexOf(childNode), start = index, deleteCount = 1;
                childNodes.splice(start, deleteCount);
            }
        },
        {
            key: "replaceChildNode",
            value: function replaceChildNode(replacedChildNode, replacementChildNode) {
                var childNodes = this.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
                childNodes.splice(start, deleteCount, replacementChildNode);
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
            key: "resolveImports",
            value: function resolveImports(parentNode, context) {
                parentNode = this; ///\
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, markdownNode = nonTerminalNode; ///
                        markdownNode.resolveImports(parentNode, context);
                    }
                });
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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    var className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context);
                    if (className !== null) {
                        domElement.className = className;
                    }
                    if (attributeName !== null && attributeValue !== null) {
                        domElement.setAttribute(attributeName, attributeValue);
                    }
                    this.setDOMElement(domElement);
                    this.createChildNodeDOMElements(context);
                }
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), childNodesHTML = childNodes.reduce(function(childNodesHTML, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodeHTML = markdownNode.asHTML(indent, context);
                        if (markdownNodeHTML !== null) {
                            childNodesHTML = childNodesHTML === null ? markdownNodeHTML : "".concat(childNodesHTML).concat(markdownNodeHTML);
                        }
                    }
                    return childNodesHTML;
                }, null);
                return childNodesHTML;
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
                        var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodeDOMElement = markdownNode.createDOMElement(context);
                        if (markdownNodeDOMElement !== null) {
                            _this.insertDOMElement(markdownNodeDOMElement);
                        }
                    }
                });
            }
        },
        {
            key: "insertDOMElement",
            value: function insertDOMElement(domElement) {
                var parentDOMElement = this.domElement, siblingDOMElement = null, childNodeDOMElement = domElement; ///
                parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var _$_get;
                return (_$_get = _get(_get_prototype_of(MarkdownNode.prototype), "clone", this)).call.apply(_$_get, [
                    this,
                    this.domElement
                ].concat(_to_consumable_array(remainingArguments)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHkpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBhZGRDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBydWxlTmFtZVRvSFRNTE1hcFt0aGlzLnJ1bGVOYW1lXTtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gYCAgJHtpbmRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICByZXNvbHZlSW1wb3J0cyhwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgcGFyZW50Tm9kZSA9IHRoaXM7ICAvLy9cXFxuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5yZXNvbHZlSW1wb3J0cyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlSFRNTCA9IG1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWFya2Rvd25Ob2RlSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gKGNoaWxkTm9kZXNIVE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZUhUTUwgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzSFRNTH0ke21hcmtkb3duTm9kZUhUTUx9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtYXJrZG93bk5vZGVET01FbGVtZW50ID0gbWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1hcmtkb3duTm9kZURPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQobWFya2Rvd25Ob2RlRE9NRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoY2hpbGROb2RlRE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiYWRkQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsInB1c2giLCJyZW1vdmVDaGlsZE5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJ0YWdOYW1lIiwiY29udGV4dCIsInJ1bGVOYW1lVG9IVE1MTWFwIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwicmVzb2x2ZUltcG9ydHMiLCJwYXJlbnROb2RlIiwiZm9yRWFjaCIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsInJlZHVjZSIsIm1hcmtkb3duTm9kZUhUTUwiLCJtYXJrZG93bk5vZGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJOb25UZXJtaW5hbE5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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