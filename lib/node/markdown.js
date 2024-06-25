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
                var lines;
                var ref, ref1;
                ref = this.constructor, ref1 = ref.lines, lines = ref1 === void 0 ? null : ref1, ref;
                if (lines === null) {
                    var childNodes = this.getChildNodes();
                    lines = childNodes.reduce(function(lines, childNode) {
                        var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                        if (childNodeMarkdownNode) {
                            var markdownNode = childNode, markdownNodeLines = markdownNode.lines(context);
                            lines += markdownNodeLines;
                        }
                        return lines;
                    }, 0);
                }
                return lines;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = null;
                var tagName = this.tagName(context);
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
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText = null;
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    var childNodesPlainText = this.childNodesAsPlainText(context);
                    if (childNodesPlainText !== null) {
                        plainText = plainText === null ? childNodesPlainText : "".concat(plainText, "\n").concat(childNodesPlainText, ";");
                    }
                }
                return plainText;
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
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodes = this.getChildNodes(), childNodesPlainText = childNodes.reduce(function(childNodesPlainText, childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode, markdownNodePlainText = markdownNode.asPlainText(context);
                        if (markdownNodePlainText !== null) {
                            childNodesPlainText = childNodesPlainText === null ? markdownNodePlainText : "".concat(childNodesPlainText, "\n").concat(markdownNodePlainText);
                        }
                    }
                    return childNodesPlainText;
                }, null);
                return childNodesPlainText;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBNYXJrZG93bk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW3RoaXMucnVsZU5hbWVdO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50TWFwW3RoaXMucnVsZU5hbWVdO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8LyR7dGFnTmFtZX0+YDtcblxuICAgIHJldHVybiBjbG9zaW5nVGFnO1xuICB9XG5cbiAgc3RhcnRpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0+YDtcblxuICAgIHJldHVybiBzdGFydGluZ1RhZztcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IGAgICR7aW5kZW50fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgaXNQbGFpblRleHRNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgbGluZXMoY29udGV4dCkge1xuICAgIGxldCBsaW5lcztcblxuICAgICh7IGxpbmVzID0gbnVsbCB9ID0gdGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAobGluZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgbGluZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXJrZG93bk5vZGVMaW5lcyA9IG1hcmtkb3duTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgICAgIGxpbmVzICs9IG1hcmtkb3duTm9kZUxpbmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzUGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIHBsYWluVGV4dCA9IChwbGFpblRleHQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgYCR7cGxhaW5UZXh0fVxuJHtjaGlsZE5vZGVzUGxhaW5UZXh0fTtgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hcmtkb3duTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBtYXJrZG93bk5vZGVIVE1MID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXJrZG93bk5vZGVIVE1MICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNIVE1MfSR7bWFya2Rvd25Ob2RlSFRNTH1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dCA9IG1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSAoY2hpbGROb2Rlc1BsYWluVGV4dCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0IDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNQbGFpblRleHR9XG4ke21hcmtkb3duTm9kZVBsYWluVGV4dH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gbWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYWRkRE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwidGFnTmFtZSIsImNvbnRleHQiLCJlbGVtZW50TWFwIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiaXNQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnN0cnVjdG9yIiwiZ2V0Q2hpbGROb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZUxpbmVzIiwiYXNIVE1MIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsIm1hcmtkb3duTm9kZUhUTUwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJtYXJrZG93bk5vZGVQbGFpblRleHQiLCJmb3JFYWNoIiwiYWRkRE9NRWxlbWVudCIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsIk5vblRlcm1pbmFsTm9kZSIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJlbGVt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