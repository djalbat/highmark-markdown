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
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _element = /*#__PURE__*/ _interop_require_default(require("../mixins/element"));
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
            key: "getDOMElements",
            value: function getDOMElements() {
                var domElements = this.domElement === null ? [] : [
                    this.domElement
                ];
                return domElements;
            }
        },
        {
            key: "tagName",
            value: function tagName(context) {
                var tagName = _elementMap.default[this.ruleName].tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = _elementMap.default[this.ruleName].className;
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
            key: "isPlainTextMarkdownNode",
            value: function isPlainTextMarkdownNode() {
                var plainTextMarkdownNode = false;
                return plainTextMarkdownNode;
            }
        },
        {
            key: "lines",
            value: function lines(context) {
                var childNodes = this.getChildNodes(), lines = childNodes.reduce(function(lines, childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode, markdownNodeLines = markdownNode.lines(context);
                        lines += markdownNodeLines;
                    }
                    return lines;
                }, 0);
                return lines;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
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
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), childNodesHTML = childNodes.reduce(function(childNodesHTML, childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode, markdownNodeHTML = markdownNode.asHTML(indent, context);
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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    var className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context);
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
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
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var _this = this;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode; ///
                        markdownNode.createDOMElement(context);
                        var domElement = markdownNode.getDOMElement();
                        if (domElement !== null) {
                            _this.addDOMElement(domElement);
                        }
                    }
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBNYXJrZG93bk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudHMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5kb21FbGVtZW50XTtcblxuICAgIHJldHVybiBkb21FbGVtZW50cztcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gZWxlbWVudE1hcFt0aGlzLnJ1bGVOYW1lXTtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudE1hcFt0aGlzLnJ1bGVOYW1lXTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGluZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIE1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlTGluZXMgPSBtYXJrZG93bk5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgbGluZXMgKz0gbWFya2Rvd25Ob2RlTGluZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsaW5lcztcbiAgICAgICAgICB9LCAwKTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbmAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY2hpbGROb2Rlcy5yZWR1Y2UoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZUhUTUwgPSBtYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZUhUTUwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IChjaGlsZE5vZGVzSFRNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93bk5vZGVIVE1MIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc0hUTUx9JHttYXJrZG93bk5vZGVIVE1MfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBtYXJrZG93bk5vZGUuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hZGRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50cyIsImRvbUVsZW1lbnRzIiwidGFnTmFtZSIsImNvbnRleHQiLCJlbGVtZW50TWFwIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiaXNQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJsaW5lcyIsImdldENoaWxkTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVMaW5lcyIsImFzSFRNTCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJtYXJrZG93bk5vZGVIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImFkZERPTUVsZW1lbnQiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJOb25UZXJtaW5hbE5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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